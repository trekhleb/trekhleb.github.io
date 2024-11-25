type Slug =
  | 'home'
  | 'projects'
  | 'blog'
  | 'publications';

export type Route = {
  path: string,
  name: string,
  hidden?: boolean,
};

type Routes = Record<Slug, Route>;

export const routes: Routes = {
  home: {
    path: '/',
    name: 'About',
    hidden: true,
  },
  projects: {
    path: '/projects',
    name: 'Projects',
  },
  blog: {
    path: '/blog',
    name: 'Blog',
  },
  publications: {
    path: '/publications',
    name: 'Publications',
  },
};
