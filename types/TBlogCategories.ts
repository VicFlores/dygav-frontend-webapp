type Link = {
  href: string;
};

type Links = {
  self: Link[];
  collection: Link[];
  about: Link[];
  "wp:post_type": Link[];
  curies: Array<{
    name: string;
    href: string;
    templated: boolean;
  }>;
};

export type Category = {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
  meta: any[];
  _links: Links;
};
