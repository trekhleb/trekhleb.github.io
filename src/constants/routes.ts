type Slug =
  | 'home'
  | 'projects'
  | 'blog';

export type Route = {
  path: string,
  name: string,
};

type Routes = Record<Slug, Route>;

// Add the "/" at the end of the path to make the classActive work properly
// for navigation links.
export const routes: Routes = {
  home: {
    path: '/',
    name: 'About',
  },
  projects: {
    path: '/projects/',
    name: 'Projects',
  },
  blog: {
    path: '/blog/',
    name: 'Blog',
  },
};
