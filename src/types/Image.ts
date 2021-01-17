export type Image = {
  srcPath?: string,
  caption?: string,
};

// The type that is being returned after using the {...GatsbyImageSharpFluid} GraphQL operator.
export type FluidImage = {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
};
