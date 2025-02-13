// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IAuthorFields {
  /** Name */
  name: string;

  /** Picture */
  picture: Asset;
}

export interface IAuthor extends Entry<IAuthorFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "author";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPageFields {
  /** Title */
  title: string;

  /** Slug */
  slug: string;

  /** Body */
  body: string;

  /** Meta Description */
  metaDescription?: string | undefined;
}

export interface IPage extends Entry<IPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "page";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPostFields {
  /** Title */
  title: string;

  /** Slug */
  slug: string;

  /** Publish Date */
  publishDate: string;

  /** Hero Image */
  heroImage: Asset;

  /** Body */
  body: string;

  /** Tags */
  tags?: ITag[] | undefined;

  /** Meta Description */
  metaDescription?: string | undefined;

  /** Rich Body */
  richBody?: Document | undefined;
}

export interface IPost extends Entry<IPostFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "post";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ISomeTypeFields {
  /** Title */
  title?: string | undefined;

  /** Desc */
  desc?: Document | undefined;
}

/** Some testing type. Just like a table inside a DB */

export interface ISomeType extends Entry<ISomeTypeFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "someType";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ITagFields {
  /** Title */
  title: string;

  /** Slug */
  slug: string;
}

export interface ITag extends Entry<ITagFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "tag";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE = "author" | "page" | "post" | "someType" | "tag";

export type IEntry = IAuthor | IPage | IPost | ISomeType | ITag;

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
