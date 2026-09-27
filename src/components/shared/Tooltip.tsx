import React, {
  CSSProperties, useEffect, useId, useRef, useState,
} from 'react';

type TooltipProps = {
  content: React.ReactNode,
  children: React.ReactNode,
  // Accessible name of the trigger button (the children are usually just an icon).
  label?: string,
};

const POPOVER_MAX_WIDTH = 320;
const VIEWPORT_GUTTER = 16;

/*
  Rich tooltip that also works without a mouse: opens on hover, on tap/click and on keyboard focus,
  closes with Escape or a click outside. The popover is shifted so it never leaves the viewport and
  is not rendered while closed (so it can never cause horizontal overflow on phones).
*/
const Tooltip = (props: TooltipProps): React.ReactElement => {
  const { children, content, label = 'More details' } = props;

  const [isVisible, setIsVisible] = useState(false);
  const [style, setStyle] = useState<CSSProperties>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const id = useId();

  const place = (): void => {
    const el = containerRef.current;
    if (!el) {
      return;
    }
    const rect = el.getBoundingClientRect();
    const viewport = window.innerWidth;
    const width = Math.min(POPOVER_MAX_WIDTH, viewport - 2 * VIEWPORT_GUTTER);
    let left = rect.left + rect.width / 2 - width / 2;
    left = Math.max(VIEWPORT_GUTTER, Math.min(left, viewport - VIEWPORT_GUTTER - width));
    setStyle({ width, left: left - rect.left });
  };

  const show = (): void => {
    place();
    setIsVisible(true);
  };

  const hide = (): void => setIsVisible(false);

  const toggle = (): void => {
    if (isVisible) {
      hide();
    } else {
      show();
    }
  };

  useEffect(() => {
    if (!isVisible) {
      return undefined;
    }
    const onPointerDown = (event: MouseEvent | TouchEvent): void => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        hide();
      }
    };
    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        hide();
      }
    };
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return (): void => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      className="shared-tooltip-container relative z-10 inline-flex"
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      <button
        type="button"
        aria-label={label}
        aria-expanded={isVisible}
        aria-controls={id}
        onClick={toggle}
        onFocus={show}
        onBlur={hide}
        className="-m-1.5 inline-flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:bg-subtle hover:text-fg"
      >
        {children}
      </button>
      <div
        id={id}
        role="tooltip"
        style={style}
        className={`absolute top-full z-20 pt-2 ${isVisible ? 'block animate-fade-in' : 'hidden'}`}
      >
        <div className="shared-tooltip-content rounded-xl bg-fg px-4 py-3 text-left text-sm font-normal leading-relaxed text-bg shadow-card">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
