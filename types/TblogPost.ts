type Guid = {
  rendered: string;
};

type Title = {
  rendered: string;
};

type Content = {
  rendered: string;
  protected: boolean;
};

type Excerpt = {
  rendered: string;
  protected: boolean;
};

type Meta = {
  footnotes: string;
};

type LinksItem = {
  href: string;
};

type Links = {
  self: LinksItem[];
  collection: LinksItem[];
  about: LinksItem[];
  author: LinksItem[];
  replies: LinksItem[];
  'version-history': LinksItem[];
  'predecessor-version': LinksItem[];
  'wp:featuredmedia': LinksItem[];
  'wp:attachment': LinksItem[];
  'wp:term': LinksItem[];
  curies: LinksItem[];
};

export type BlogPost = {
  id: number;
  date: string;
  date_gmt: string;
  guid: Guid;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: Title;
  content: Content;
  excerpt: Excerpt;
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: Meta;
  categories: number[];
  tags: any[];
  _links: Links;
};
