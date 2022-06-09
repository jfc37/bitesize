export interface CourseSummary {
  slug: string;
  name: string;
  pitch: string;
}

export interface Course {
  name: string;
  pages: Page[];
}

export interface Page {
  name: string;
  number: number;
  sections: string[];
  slug: string;
}
