type Slug =
  | 'home'
  | 'projects'
  | 'blog';

type Route = {
  path: string,
};

type Routes = Record<Slug, Route>;

export const routes: Routes = {
  home: {
    path: '/'
  },
  projects: {
    path: '/projects'
  },
  blog: {
    path: '/blog'
  },
};
