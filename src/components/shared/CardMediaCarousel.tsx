import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { FiChevronLeft } from '@react-icons/all-files/fi/FiChevronLeft';
import { FiChevronRight } from '@react-icons/all-files/fi/FiChevronRight';

import { Image } from '../../types/Image';
import { Link } from '../../types/Link';
import CardMedia from './CardMedia';
import FluidImage from './FluidImage';
import HyperLink from './HyperLink';

type CardMediaCarouselProps = {
  images: Image[],
  fluidImages: (IGatsbyImageData | null | undefined)[],
  // Where the picture at `index` leads when clicked. Slides without one simply are not clickable.
  slideLink?: (index: number) => Link | undefined,
  // Called whenever a different slide comes to rest, so the card can follow the one on screen.
  onActiveIndexChange?: (index: number) => void,
  // Names the set for screen readers — normally the title of the thing being illustrated.
  label?: string,
};

/*
  One frosted "material" carries every control: a translucent sheet of the page's own background
  colour, blurred and slightly saturated, with a hairline edge. It borrows the picture underneath
  instead of painting over it, so a control stays readable on a white screenshot and on a dark one
  alike, without ever becoming a heavy black button.
*/
type DragState = {
  pointerId: number,
  startX: number,
  startScrollLeft: number,
  moved: boolean,
};

// How far the mouse must travel before the gesture stops counting as a click on the picture.
const DRAG_THRESHOLD_PX = 6;

// Browsers want to drag a picture off the page; here that gesture belongs to the carousel.
const preventNativeDrag = (event: React.DragEvent<HTMLDivElement>): void => event.preventDefault();

const materialClasses = 'bg-bg/80 ring-1 ring-line backdrop-blur-xl backdrop-saturate-150';

/*
  Hover follows the round icon buttons elsewhere on the site (social links, footer, tooltip close):
  the sheet turns solid `subtle`, the hairline strengthens and the shadow deepens, so the button
  reads as lifting off the picture. It matters more here than on a control that appears on hover,
  because these stay on screen and the hover is the only thing marking them as pressable.
*/
const arrowClasses = `pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full text-fg shadow-[0_1px_4px_rgb(0_0_0/0.12)] transition duration-150 ease-out hover:bg-subtle hover:shadow-[0_2px_8px_rgb(0_0_0/0.16)] hover:ring-line-strong disabled:pointer-events-none disabled:opacity-0 ${materialClasses}`;

/*
  Several pictures in the place a card normally shows one: swipe it with a finger, or use the
  chevrons and the dots. The sliding itself is the browser's own (CSS scroll snapping), so it keeps
  native momentum and still works before the JavaScript loads — the script only follows along to
  light the right dot and to move the row when a control is used. Scrolling is set to glide in CSS
  rather than from script, so the global `prefers-reduced-motion` rule can switch it off.

  The dots ride on the picture itself, on the same frosted sheet as the chevrons, so that adding
  pictures to an achievement moves nothing below: the title keeps its usual distance and stays
  level with the titles of the single-picture cards beside it. Laying them over the picture is
  what makes that possible, and the sheet is what keeps them readable — checked against eight
  backdrops (white, light and dark screenshots, busy colour, flat grey, black), where bare dots
  vanished on the light ones and a dark pill both shouted on the light ones and sank into the dark
  ones. A light sheet does neither: on the pale screenshots that most of these are, it fades to
  almost nothing and leaves just the dots; on a dark picture it reads as a quiet lozenge.
*/
const CardMediaCarousel = (props: CardMediaCarouselProps): React.ReactElement | null => {
  const {
    images,
    fluidImages,
    slideLink,
    onActiveIndexChange,
    label = 'Pictures',
  } = props;

  const trackRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const dragRef = useRef<DragState | null>(null);
  // Set when a drag ends and read by the click the browser fires straight after, so that letting
  // go of a picture you have just dragged does not also open it.
  const swallowClickRef = useRef<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const count = fluidImages.length;

  // Which slide is in view, read back from the scroll position the browser settled on.
  const syncActiveIndex = useCallback((): void => {
    const track = trackRef.current;
    if (!track) {
      return;
    }
    const slideWidth = track.clientWidth || 1;
    const scrolled = Math.round(track.scrollLeft / slideWidth);
    const index = Math.min(Math.max(scrolled, 0), Math.max(count - 1, 0));
    setActiveIndex((current: number) => (current === index ? current : index));
  }, [count]);

  // Scrolling fires far more often than the picture can change, so fold it into one frame.
  const handleScroll = useCallback((): void => {
    if (frameRef.current !== null) {
      return;
    }
    frameRef.current = window.requestAnimationFrame(() => {
      frameRef.current = null;
      syncActiveIndex();
    });
  }, [syncActiveIndex]);

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (onActiveIndexChange) {
      onActiveIndexChange(activeIndex);
    }
  }, [activeIndex, onActiveIndexChange]);

  const scrollToIndex = useCallback((index: number): void => {
    const track = trackRef.current;
    if (!track) {
      return;
    }
    const target = Math.min(Math.max(index, 0), Math.max(count - 1, 0));
    track.scrollTo({ left: target * track.clientWidth });
  }, [count]);

  /*
    A finger and a trackpad already slide the row — that is the browser's own scrolling, momentum
    and all. A mouse does not, so these handlers lend it the same gesture: hold the button down,
    drag, and the row follows. Snapping is off for the duration (mandatory snap would yank the row
    back on every pixel) and comes back on release, a frame later so the class is on the element
    before the scroll is asked for.
  */
  const handlePointerDown = useCallback((event: React.PointerEvent<HTMLDivElement>): void => {
    swallowClickRef.current = false;
    const track = trackRef.current;
    if (!track || event.pointerType !== 'mouse' || event.button !== 0) {
      return;
    }
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startScrollLeft: track.scrollLeft,
      moved: false,
    };
  }, []);

  const handlePointerMove = useCallback((event: React.PointerEvent<HTMLDivElement>): void => {
    const drag = dragRef.current;
    const track = trackRef.current;
    if (!drag || !track || event.pointerId !== drag.pointerId) {
      return;
    }
    const travelled = event.clientX - drag.startX;
    // Below the threshold the pointer is still making a click, not a drag.
    if (!drag.moved) {
      if (Math.abs(travelled) < DRAG_THRESHOLD_PX) {
        return;
      }
      drag.moved = true;
      setIsDragging(true);
      track.setPointerCapture(drag.pointerId);
    }
    track.scrollLeft = drag.startScrollLeft - travelled;
  }, []);

  const handlePointerUp = useCallback((event: React.PointerEvent<HTMLDivElement>): void => {
    const drag = dragRef.current;
    const track = trackRef.current;
    dragRef.current = null;
    if (!drag || !track || event.pointerId !== drag.pointerId || !drag.moved) {
      return;
    }
    if (track.hasPointerCapture(drag.pointerId)) {
      track.releasePointerCapture(drag.pointerId);
    }
    swallowClickRef.current = true;
    setIsDragging(false);
    const landedOn = Math.round(track.scrollLeft / (track.clientWidth || 1));
    window.requestAnimationFrame(() => scrollToIndex(landedOn));
  }, [scrollToIndex]);

  const handleSlideClick = useCallback((event: React.MouseEvent<HTMLAnchorElement>): void => {
    if (swallowClickRef.current) {
      swallowClickRef.current = false;
      event.preventDefault();
    }
  }, []);

  if (!count) {
    return null;
  }

  const slides = fluidImages.map((
    fluidImage: IGatsbyImageData | null | undefined,
    index: number,
  ) => {
    const image: Image | undefined = images[index];
    const link = slideLink ? slideLink(index) : undefined;

    const picture = (
      <FluidImage image={image} fluidImage={fluidImage} className="h-full w-full" />
    );

    return (
      <div
        // eslint-disable-next-line react/no-array-index-key
        key={`slide-${index}-${image?.srcPath || ''}`}
        className="h-full w-full shrink-0 snap-center snap-always"
        role="group"
        aria-roledescription="slide"
        aria-label={`${index + 1} of ${count}`}
      >
        {link?.url ? (
          <HyperLink
            link={link}
            formatted={false}
            className="block h-full w-full"
            onClick={handleSlideClick}
          >
            {picture}
          </HyperLink>
        ) : picture}
      </div>
    );
  });

  // Always on screen, not only while the pointer is over the card, so it reads as a gallery at a
  // glance; the one that would do nothing at either end of the row fades out. Pointer devices
  // only — on a touch screen a swipe is the natural move and two floating buttons would just sit
  // on top of the picture.
  const chevrons = count > 1 ? (
    <div className="pointer-events-none absolute inset-y-0 left-0 right-0 hidden items-center justify-between px-2 [@media(hover:hover)]:flex">
      <button
        type="button"
        onClick={(): void => scrollToIndex(activeIndex - 1)}
        disabled={activeIndex === 0}
        aria-label="Previous picture"
        className={arrowClasses}
      >
        <FiChevronLeft size={18} aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={(): void => scrollToIndex(activeIndex + 1)}
        disabled={activeIndex === count - 1}
        aria-label="Next picture"
        className={arrowClasses}
      >
        <FiChevronRight size={18} aria-hidden="true" />
      </button>
    </div>
  ) : null;

  const dots = count > 1 ? (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center pb-2.5">
      <div className={`pointer-events-auto flex items-center rounded-full px-1 shadow-[0_1px_4px_rgb(0_0_0/0.10)] ${materialClasses}`}>
        {fluidImages.map((_fluidImage: IGatsbyImageData | null | undefined, index: number) => {
          const isActive = index === activeIndex;
          return (
            <button
              // eslint-disable-next-line react/no-array-index-key
              key={`dot-${index}-${images[index]?.srcPath || ''}`}
              type="button"
              onClick={(): void => scrollToIndex(index)}
              aria-label={`Show picture ${index + 1} of ${count}`}
              aria-current={isActive || undefined}
              // The invisible `before` box reaches past the lozenge so a fingertip has something
              // to land on, while the lozenge itself stays as small and quiet as it looks.
              className="group/dot relative flex h-5 w-4 items-center justify-center before:absolute before:-inset-y-2 before:inset-x-0 before:content-['']"
            >
              <span
                className={`h-1.5 w-1.5 rounded-full transition-colors duration-200 ease-out ${isActive ? 'bg-fg' : 'bg-fg/25 group-hover/dot:bg-fg/50'}`}
                aria-hidden="true"
              />
            </button>
          );
        })}
      </div>
      <span className="sr-only" aria-live="polite" aria-atomic="true">
        {`Picture ${activeIndex + 1} of ${count}`}
      </span>
    </div>
  ) : null;

  return (
    <CardMedia>
      <div
        className="relative h-full w-full"
        role="group"
        aria-roledescription="carousel"
        aria-label={label}
      >
        <div
          ref={trackRef}
          onScroll={handleScroll}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onDragStart={preventNativeDrag}
          className={`flex h-full w-full overflow-x-auto overflow-y-hidden overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${isDragging ? 'snap-none scroll-auto select-none [&_a]:cursor-grabbing' : 'snap-x snap-mandatory scroll-smooth [&_a]:cursor-grab'}`}
        >
          {slides}
        </div>
        {chevrons}
        {dots}
      </div>
    </CardMedia>
  );
};

export default CardMediaCarousel;
