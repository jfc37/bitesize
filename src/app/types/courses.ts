export interface CourseSummary {
  slug: string;
  name: string;
  pitch: string;
}

export interface CoursePageSummary {
  title: string;
  slug: string;
}

export interface PageContent {
  courseName: string;
  pageName: string;
  nextPage?: CoursePageSummary;
}

export function getDummyPageContent(slug: string): PageContent {
  return PAGE_CONTENTS[slug];
}

const PAGE_CONTENTS: { [key: string]: PageContent } = {
  ['joe-c/component-tdd/01-intro']: {
    courseName: 'Components through TDD',
    pageName: 'Intro',
    nextPage: {
      title: 'Initial test',
      slug: 'joe-c/component-tdd/02-initial-test',
    },
  },
  ['joe-c/component-tdd/02-initial-test']: {
    courseName: 'Components through TDD',
    pageName: 'Intro',
    nextPage: {
      title: 'Initial test',
      slug: 'joe-c/component-tdd/01-intro',
    },
  },
};

const PAGE_SUMMARIES: { [key: string]: CoursePageSummary[] } = {
  ['joe-c/component-tdd']: [
    {
      title: 'Intro',
      slug: 'joe-c/component-tdd/01-intro',
    },
    {
      title: 'Initial test',
      slug: 'joe-c/component-tdd/02-initial-test',
    },
    {
      title: 'User input',
      slug: 'joe-c/component-tdd/03-user-input',
    },
    {
      title: 'Dependencies',
      slug: 'joe-c/component-tdd/04-dependencies',
    },
  ],
};

export function getDummyCoursePageSummaries(slug: string): CoursePageSummary[] {
  return PAGE_SUMMARIES[slug];
}

export function getDummyCourseSummaries(): CourseSummary[] {
  return [
    {
      slug: 'joe-c/component-tdd/01-intro',
      name: 'Components through TDD',
      pitch: 'Learn how write unit tests as you build a basic component',
    },
    {
      slug: 'joe-c/marble-testing/01-intro',
      name: 'Marble testing',
      pitch: 'Learn how to test observables using marble diagrams',
    },
  ];
}
