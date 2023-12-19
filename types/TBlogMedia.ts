type Rendered = {
  rendered: string;
};

type Size = {
  file: string;
  width: number;
  height: number;
  filesize?: number;
  mime_type: string;
  source_url: string;
};

type MediaDetails = {
  width: number;
  height: number;
  file: string;
  filesize: number;
  sizes: {
    medium: Size;
    thumbnail: Size;
    medium_large: Size;
    full: Size;
  };
  image_meta: {
    aperture: string;
    credit: string;
    camera: string;
    caption: string;
    created_timestamp: string;
    copyright: string;
    focal_length: string;
    iso: string;
    shutter_speed: string;
    title: string;
    orientation: string;
    keywords: string[];
  };
};

type Link = {
  href: string;
};

type Links = {
  self: Link[];
  collection: Link[];
  about: Link[];
  author: Link[];
  replies: Link[];
};

export type BlogMedia = {
  id: number;
  date: string;
  date_gmt: string;
  guid: Rendered;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: Rendered;
  author: number;
  comment_status: string;
  ping_status: string;
  template: string;
  meta: any[];
  description: Rendered;
  caption: Rendered;
  alt_text: string;
  media_type: string;
  mime_type: string;
  media_details: MediaDetails;
  post: number;
  source_url: string;
  _links: Links;
};
