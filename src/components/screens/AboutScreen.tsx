import React from 'react';

import PageLayout from '../layouts/PageLayout';
import type { Profile as ProfileType } from '../../types/Profile';
import type { Projects } from '../../types/Project';
import type { Publication } from '../../types/Publication';
import Profile from '../elements/Profile';
import SEO, { ogTypeProfile, titleModeBare } from '../shared/SEO';
import ErrorBoundary from '../shared/ErrorBoundary';
import Highlights from '../elements/Highlights';
import Section from '../shared/Section';
import FeaturedProjects from '../elements/FeaturedProjects';
import PostsList from '../elements/PostsList';
import SubscriptionForm from '../shared/SubscriptionForm';
import { resolveHighlights } from '../../utils/profile';
import { getGitHubProjectStars, projectMapToArray, selectFeaturedProjects } from '../../utils/project';
import { numberToHeadlineString } from '../../utils/numbers';
import { fullYearsBetween } from '../../utils/time';
import { routes } from '../../constants/routes';
import { IndexPageQuery } from '../../pages/__generated__/IndexPageQuery';
import { siteURL } from '../../constants/siteMeta';

type AboutScreenProps = {
  profile: ProfileType,
  projects: Projects,
  publications: Publication[],
  posts: IndexPageQuery,
};

const AboutScreen = (props: AboutScreenProps): React.ReactElement => {
  const {
    profile, projects, publications, posts,
  } = props;

  const fullName = `${profile.firstName} ${profile.lastName}`;

  const highlights = resolveHighlights(profile, projects, publications);
  const featuredProjects = selectFeaturedProjects(projects, 6);
  const projectsNum = projectMapToArray(projects).length;
  const postsNum = posts?.allMdx?.totalCount || 0;
  const publicationsNum = publications.length;

  // Years of experience, counted up to the build rather than "now": the server-rendered HTML and
  // the browser then always show the same number (it moves on with every deploy).
  const buildTime = posts?.siteBuildMetadata?.buildTime;
  const experienceYears = profile.careerStartDate && buildTime
    ? fullYearsBetween(new Date(profile.careerStartDate), new Date(buildTime))
    : undefined;

  // Share/search snippet with live numbers (e.g. "197K-star javascript-algorithms repository").
  const jsAlgorithmsStars = getGitHubProjectStars(projects['javascript-algorithms']);
  const starsNote = typeof jsAlgorithmsStars === 'number'
    ? ` and author of the ${numberToHeadlineString(jsAlgorithmsStars)}-star javascript-algorithms repository`
    : '';
  const description = `${fullName} — ${profile.position}${starsNote}. `
    + `${projectsNum} open-source projects that help people learn, ${postsNum} articles on web `
    + `development and machine learning, and ${publicationsNum} publications.`;

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: fullName,
    url: siteURL,
    jobTitle: profile.position,
    description,
    sameAs: (profile.socialLinks || []).filter((link) => !link.hidden).map((link) => link.url),
  };

  return (
    <PageLayout>
      <SEO
        title={`${fullName} | ${profile.position}`}
        titleMode={titleModeBare}
        description={description}
        type={ogTypeProfile}
        jsonLd={personJsonLd}
      />
      <ErrorBoundary>
        {/* Hero: the introduction, and the proof points beside it on desktop (a column that
            fills what used to be empty space next to the text) or under it on smaller screens.
            The text column keeps its reading measure (42rem); the stats take the rest. */}
        <div className="grid gap-y-10 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-x-16 xl:grid-cols-[minmax(0,42rem)_minmax(0,1fr)] xl:gap-x-24">
          <Profile profile={profile} experienceYears={experienceYears} />
          <Highlights highlights={highlights} />
        </div>
      </ErrorBoundary>

      <Section
        id="featured-projects"
        title="Featured projects"
        moreLink={{ url: `${routes.projects.path}/` }}
        moreLabel={`All ${projectsNum} projects`}
      >
        <ErrorBoundary>
          <FeaturedProjects projects={featuredProjects} />
        </ErrorBoundary>
      </Section>

      <Section
        id="latest-posts"
        title="Latest writing"
        moreLink={{ url: `${routes.blog.path}/` }}
        moreLabel={`All ${postsNum} posts`}
      >
        <ErrorBoundary>
          <PostsList posts={posts?.allMdx?.nodes || []} titleLevel="h3" />
        </ErrorBoundary>
      </Section>

      <div className="mt-16 sm:mt-24">
        <ErrorBoundary>
          <SubscriptionForm />
        </ErrorBoundary>
      </div>
    </PageLayout>
  );
};

export default AboutScreen;
