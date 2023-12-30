export type TBlogPostsSubCategories = {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
  meta: any[];
  yoast_head: string;
  yoast_head_json: {
    title: string;
    robots: {
      index: string;
      follow: string;
      'max-snippet': string;
      'max-image-preview': string;
      'max-video-preview': string;
    };
    canonical: string;
    og_locale: string;
    og_type: string;
    og_title: string;
    og_description: string;
    og_url: string;
    og_site_name: string;
    twitter_card: string;
    schema: {
      '@context': string;
      '@graph': any[];
    };
  };
  _links: {
    self: { href: string }[];
    collection: { href: string }[];
    about: { href: string }[];
    up: { embeddable: boolean; href: string }[];
    'wp:post_type': { href: string }[];
    curies: { name: string; href: string; templated: boolean }[];
  };
};
