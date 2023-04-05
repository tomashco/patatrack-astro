export interface Post {
  id: string;
  slug: string;

  publishDate: Date;
  category?: string;
  tags?: Array<string>;
  author?: string;

  title: string;
  image?: string;
  excerpt?: string;
  gallery?: Array<string>;

  Content: unknown;

  description?: string;

  permalink?: string;
  readingTime?: number;

  canonical?: string | URL;
  draft?: boolean;
  content?: string;
}

export interface Hero {
  title: string;
  titleColor: string;
  subTitleColor: string;
  subTitle: string;
  content: string;
}

export interface MetaSEO {
  title?: string;
  description?: string;
  image?: string;

  canonical?: string | URL;
  noindex?: boolean;
  nofollow?: boolean;

  ogTitle?: string;
  ogType?: string;
}
