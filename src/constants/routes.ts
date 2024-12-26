type Slug = 'home' | 'projects' | 'blog' | 'publications';

export type Route = {
  path: string;
  name: string;
};

type Routes = Record<Slug, Route>;

export const ROUTES: Routes = {
  home: {
    path: '/',
    name: 'About',
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

export const TOP_NAV: Route[] = [
  ROUTES.projects,
  ROUTES.blog,
  ROUTES.publications,
];

export const FOOTER_NAV: Route[] = [];
