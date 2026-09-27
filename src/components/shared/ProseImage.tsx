import React from 'react';

type ProseImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

/*
  Replacement for plain <img> elements inside MDX posts (GIFs and other files that
  gatsby-remark-images does not process). Adds lazy loading in the server-rendered HTML so a
  5 MB demo GIF at the bottom of an article is not downloaded before the reader gets there.
*/
const ProseImage = (props: ProseImageProps): React.ReactElement => {
  const {
    alt = '',
    loading = 'lazy',
    decoding = 'async',
    ...rest
  } = props;
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img alt={alt} loading={loading} decoding={decoding} {...rest} />
  );
};

export default ProseImage;
