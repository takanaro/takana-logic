export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type ContentfulAsset = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  contentful_id?: Maybe<Scalars['String']>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  file?: Maybe<ContentfulAssetFile>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  node_locale?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulAssetSys>;
  localFile?: Maybe<File>;
  fixed?: Maybe<ContentfulFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ContentfulResolutions>;
  fluid?: Maybe<ContentfulFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ContentfulSizes>;
  resize?: Maybe<ContentfulResize>;
};


export type ContentfulAssetCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAssetUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  toFormat?: Maybe<ContentfulImageFormat>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};

export type ContentfulAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAssetGroupConnection>;
};


export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetEdge = {
  next?: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous?: Maybe<ContentfulAsset>;
};

export type ContentfulAssetFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'contentful_id'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'file___url'
  | 'file___details___size'
  | 'file___details___image___width'
  | 'file___details___image___height'
  | 'file___fileName'
  | 'file___contentType'
  | 'title'
  | 'description'
  | 'node_locale'
  | 'sys___revision'
  | 'localFile___sourceInstanceName'
  | 'localFile___absolutePath'
  | 'localFile___relativePath'
  | 'localFile___extension'
  | 'localFile___size'
  | 'localFile___prettySize'
  | 'localFile___modifiedTime'
  | 'localFile___accessTime'
  | 'localFile___changeTime'
  | 'localFile___birthTime'
  | 'localFile___root'
  | 'localFile___dir'
  | 'localFile___base'
  | 'localFile___ext'
  | 'localFile___name'
  | 'localFile___relativeDirectory'
  | 'localFile___dev'
  | 'localFile___mode'
  | 'localFile___nlink'
  | 'localFile___uid'
  | 'localFile___gid'
  | 'localFile___rdev'
  | 'localFile___ino'
  | 'localFile___atimeMs'
  | 'localFile___mtimeMs'
  | 'localFile___ctimeMs'
  | 'localFile___atime'
  | 'localFile___mtime'
  | 'localFile___ctime'
  | 'localFile___birthtime'
  | 'localFile___birthtimeMs'
  | 'localFile___blksize'
  | 'localFile___blocks'
  | 'localFile___url'
  | 'localFile___id'
  | 'localFile___parent___id'
  | 'localFile___parent___parent___id'
  | 'localFile___parent___parent___children'
  | 'localFile___parent___children'
  | 'localFile___parent___children___id'
  | 'localFile___parent___children___children'
  | 'localFile___parent___internal___content'
  | 'localFile___parent___internal___contentDigest'
  | 'localFile___parent___internal___description'
  | 'localFile___parent___internal___fieldOwners'
  | 'localFile___parent___internal___ignoreType'
  | 'localFile___parent___internal___mediaType'
  | 'localFile___parent___internal___owner'
  | 'localFile___parent___internal___type'
  | 'localFile___children'
  | 'localFile___children___id'
  | 'localFile___children___parent___id'
  | 'localFile___children___parent___children'
  | 'localFile___children___children'
  | 'localFile___children___children___id'
  | 'localFile___children___children___children'
  | 'localFile___children___internal___content'
  | 'localFile___children___internal___contentDigest'
  | 'localFile___children___internal___description'
  | 'localFile___children___internal___fieldOwners'
  | 'localFile___children___internal___ignoreType'
  | 'localFile___children___internal___mediaType'
  | 'localFile___children___internal___owner'
  | 'localFile___children___internal___type'
  | 'localFile___internal___content'
  | 'localFile___internal___contentDigest'
  | 'localFile___internal___description'
  | 'localFile___internal___fieldOwners'
  | 'localFile___internal___ignoreType'
  | 'localFile___internal___mediaType'
  | 'localFile___internal___owner'
  | 'localFile___internal___type'
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'resize___base64'
  | 'resize___tracedSVG'
  | 'resize___src'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio';

export type ContentfulAssetFile = {
  url?: Maybe<Scalars['String']>;
  details?: Maybe<ContentfulAssetFileDetails>;
  fileName?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
};

export type ContentfulAssetFileDetails = {
  size?: Maybe<Scalars['Int']>;
  image?: Maybe<ContentfulAssetFileDetailsImage>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

export type ContentfulAssetFileDetailsImage = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  details?: Maybe<ContentfulAssetFileDetailsFilterInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulAssetSysFilterInput>;
  localFile?: Maybe<FileFilterInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
};

export type ContentfulAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAssetSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAssetSys = {
  revision?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulCategory = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  parentId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  contentfulid?: Maybe<Scalars['Int']>;
  entry_post?: Maybe<Array<Maybe<ContentfulEntryPost>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulCategorySys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulCategoryCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulCategoryUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulCategoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCategoryEdge>;
  nodes: Array<ContentfulCategory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulCategoryGroupConnection>;
};


export type ContentfulCategoryConnectionDistinctArgs = {
  field: ContentfulCategoryFieldsEnum;
};


export type ContentfulCategoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulCategoryFieldsEnum;
};

export type ContentfulCategoryEdge = {
  next?: Maybe<ContentfulCategory>;
  node: ContentfulCategory;
  previous?: Maybe<ContentfulCategory>;
};

export type ContentfulCategoryFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'parentId'
  | 'name'
  | 'contentfulid'
  | 'entry_post'
  | 'entry_post___id'
  | 'entry_post___parent___id'
  | 'entry_post___parent___parent___id'
  | 'entry_post___parent___parent___children'
  | 'entry_post___parent___children'
  | 'entry_post___parent___children___id'
  | 'entry_post___parent___children___children'
  | 'entry_post___parent___internal___content'
  | 'entry_post___parent___internal___contentDigest'
  | 'entry_post___parent___internal___description'
  | 'entry_post___parent___internal___fieldOwners'
  | 'entry_post___parent___internal___ignoreType'
  | 'entry_post___parent___internal___mediaType'
  | 'entry_post___parent___internal___owner'
  | 'entry_post___parent___internal___type'
  | 'entry_post___children'
  | 'entry_post___children___id'
  | 'entry_post___children___parent___id'
  | 'entry_post___children___parent___children'
  | 'entry_post___children___children'
  | 'entry_post___children___children___id'
  | 'entry_post___children___children___children'
  | 'entry_post___children___internal___content'
  | 'entry_post___children___internal___contentDigest'
  | 'entry_post___children___internal___description'
  | 'entry_post___children___internal___fieldOwners'
  | 'entry_post___children___internal___ignoreType'
  | 'entry_post___children___internal___mediaType'
  | 'entry_post___children___internal___owner'
  | 'entry_post___children___internal___type'
  | 'entry_post___internal___content'
  | 'entry_post___internal___contentDigest'
  | 'entry_post___internal___description'
  | 'entry_post___internal___fieldOwners'
  | 'entry_post___internal___ignoreType'
  | 'entry_post___internal___mediaType'
  | 'entry_post___internal___owner'
  | 'entry_post___internal___type'
  | 'entry_post___title'
  | 'entry_post___publishDate'
  | 'entry_post___tags'
  | 'entry_post___contentfulid'
  | 'entry_post___author___id'
  | 'entry_post___author___parent___id'
  | 'entry_post___author___parent___children'
  | 'entry_post___author___children'
  | 'entry_post___author___children___id'
  | 'entry_post___author___children___children'
  | 'entry_post___author___internal___content'
  | 'entry_post___author___internal___contentDigest'
  | 'entry_post___author___internal___description'
  | 'entry_post___author___internal___fieldOwners'
  | 'entry_post___author___internal___ignoreType'
  | 'entry_post___author___internal___mediaType'
  | 'entry_post___author___internal___owner'
  | 'entry_post___author___internal___type'
  | 'entry_post___author___name'
  | 'entry_post___author___title'
  | 'entry_post___author___company'
  | 'entry_post___author___entry_post'
  | 'entry_post___author___entry_post___id'
  | 'entry_post___author___entry_post___children'
  | 'entry_post___author___entry_post___title'
  | 'entry_post___author___entry_post___publishDate'
  | 'entry_post___author___entry_post___tags'
  | 'entry_post___author___entry_post___contentfulid'
  | 'entry_post___author___entry_post___categoryId'
  | 'entry_post___author___entry_post___spaceId'
  | 'entry_post___author___entry_post___contentful_id'
  | 'entry_post___author___entry_post___createdAt'
  | 'entry_post___author___entry_post___updatedAt'
  | 'entry_post___author___entry_post___node_locale'
  | 'entry_post___author___shortBio___id'
  | 'entry_post___author___shortBio___children'
  | 'entry_post___author___shortBio___shortBio'
  | 'entry_post___author___spaceId'
  | 'entry_post___author___contentful_id'
  | 'entry_post___author___createdAt'
  | 'entry_post___author___updatedAt'
  | 'entry_post___author___sys___revision'
  | 'entry_post___author___node_locale'
  | 'entry_post___author___email'
  | 'entry_post___author___phone'
  | 'entry_post___author___facebook'
  | 'entry_post___author___twitter'
  | 'entry_post___author___github'
  | 'entry_post___author___image___id'
  | 'entry_post___author___image___children'
  | 'entry_post___author___image___contentful_id'
  | 'entry_post___author___image___spaceId'
  | 'entry_post___author___image___createdAt'
  | 'entry_post___author___image___updatedAt'
  | 'entry_post___author___image___title'
  | 'entry_post___author___image___description'
  | 'entry_post___author___image___node_locale'
  | 'entry_post___author___childContentfulPersonShortBioTextNode___id'
  | 'entry_post___author___childContentfulPersonShortBioTextNode___children'
  | 'entry_post___author___childContentfulPersonShortBioTextNode___shortBio'
  | 'entry_post___categoryId'
  | 'entry_post___categoryId___id'
  | 'entry_post___categoryId___parent___id'
  | 'entry_post___categoryId___parent___children'
  | 'entry_post___categoryId___children'
  | 'entry_post___categoryId___children___id'
  | 'entry_post___categoryId___children___children'
  | 'entry_post___categoryId___internal___content'
  | 'entry_post___categoryId___internal___contentDigest'
  | 'entry_post___categoryId___internal___description'
  | 'entry_post___categoryId___internal___fieldOwners'
  | 'entry_post___categoryId___internal___ignoreType'
  | 'entry_post___categoryId___internal___mediaType'
  | 'entry_post___categoryId___internal___owner'
  | 'entry_post___categoryId___internal___type'
  | 'entry_post___categoryId___parentId'
  | 'entry_post___categoryId___name'
  | 'entry_post___categoryId___contentfulid'
  | 'entry_post___categoryId___entry_post'
  | 'entry_post___categoryId___entry_post___id'
  | 'entry_post___categoryId___entry_post___children'
  | 'entry_post___categoryId___entry_post___title'
  | 'entry_post___categoryId___entry_post___publishDate'
  | 'entry_post___categoryId___entry_post___tags'
  | 'entry_post___categoryId___entry_post___contentfulid'
  | 'entry_post___categoryId___entry_post___categoryId'
  | 'entry_post___categoryId___entry_post___spaceId'
  | 'entry_post___categoryId___entry_post___contentful_id'
  | 'entry_post___categoryId___entry_post___createdAt'
  | 'entry_post___categoryId___entry_post___updatedAt'
  | 'entry_post___categoryId___entry_post___node_locale'
  | 'entry_post___categoryId___spaceId'
  | 'entry_post___categoryId___contentful_id'
  | 'entry_post___categoryId___createdAt'
  | 'entry_post___categoryId___updatedAt'
  | 'entry_post___categoryId___sys___revision'
  | 'entry_post___categoryId___node_locale'
  | 'entry_post___thumbnail___id'
  | 'entry_post___thumbnail___parent___id'
  | 'entry_post___thumbnail___parent___children'
  | 'entry_post___thumbnail___children'
  | 'entry_post___thumbnail___children___id'
  | 'entry_post___thumbnail___children___children'
  | 'entry_post___thumbnail___internal___content'
  | 'entry_post___thumbnail___internal___contentDigest'
  | 'entry_post___thumbnail___internal___description'
  | 'entry_post___thumbnail___internal___fieldOwners'
  | 'entry_post___thumbnail___internal___ignoreType'
  | 'entry_post___thumbnail___internal___mediaType'
  | 'entry_post___thumbnail___internal___owner'
  | 'entry_post___thumbnail___internal___type'
  | 'entry_post___thumbnail___contentful_id'
  | 'entry_post___thumbnail___spaceId'
  | 'entry_post___thumbnail___createdAt'
  | 'entry_post___thumbnail___updatedAt'
  | 'entry_post___thumbnail___file___url'
  | 'entry_post___thumbnail___file___fileName'
  | 'entry_post___thumbnail___file___contentType'
  | 'entry_post___thumbnail___title'
  | 'entry_post___thumbnail___description'
  | 'entry_post___thumbnail___node_locale'
  | 'entry_post___thumbnail___sys___revision'
  | 'entry_post___thumbnail___localFile___sourceInstanceName'
  | 'entry_post___thumbnail___localFile___absolutePath'
  | 'entry_post___thumbnail___localFile___relativePath'
  | 'entry_post___thumbnail___localFile___extension'
  | 'entry_post___thumbnail___localFile___size'
  | 'entry_post___thumbnail___localFile___prettySize'
  | 'entry_post___thumbnail___localFile___modifiedTime'
  | 'entry_post___thumbnail___localFile___accessTime'
  | 'entry_post___thumbnail___localFile___changeTime'
  | 'entry_post___thumbnail___localFile___birthTime'
  | 'entry_post___thumbnail___localFile___root'
  | 'entry_post___thumbnail___localFile___dir'
  | 'entry_post___thumbnail___localFile___base'
  | 'entry_post___thumbnail___localFile___ext'
  | 'entry_post___thumbnail___localFile___name'
  | 'entry_post___thumbnail___localFile___relativeDirectory'
  | 'entry_post___thumbnail___localFile___dev'
  | 'entry_post___thumbnail___localFile___mode'
  | 'entry_post___thumbnail___localFile___nlink'
  | 'entry_post___thumbnail___localFile___uid'
  | 'entry_post___thumbnail___localFile___gid'
  | 'entry_post___thumbnail___localFile___rdev'
  | 'entry_post___thumbnail___localFile___ino'
  | 'entry_post___thumbnail___localFile___atimeMs'
  | 'entry_post___thumbnail___localFile___mtimeMs'
  | 'entry_post___thumbnail___localFile___ctimeMs'
  | 'entry_post___thumbnail___localFile___atime'
  | 'entry_post___thumbnail___localFile___mtime'
  | 'entry_post___thumbnail___localFile___ctime'
  | 'entry_post___thumbnail___localFile___birthtime'
  | 'entry_post___thumbnail___localFile___birthtimeMs'
  | 'entry_post___thumbnail___localFile___blksize'
  | 'entry_post___thumbnail___localFile___blocks'
  | 'entry_post___thumbnail___localFile___url'
  | 'entry_post___thumbnail___localFile___id'
  | 'entry_post___thumbnail___localFile___children'
  | 'entry_post___thumbnail___fixed___base64'
  | 'entry_post___thumbnail___fixed___tracedSVG'
  | 'entry_post___thumbnail___fixed___aspectRatio'
  | 'entry_post___thumbnail___fixed___width'
  | 'entry_post___thumbnail___fixed___height'
  | 'entry_post___thumbnail___fixed___src'
  | 'entry_post___thumbnail___fixed___srcSet'
  | 'entry_post___thumbnail___fixed___srcWebp'
  | 'entry_post___thumbnail___fixed___srcSetWebp'
  | 'entry_post___thumbnail___resolutions___base64'
  | 'entry_post___thumbnail___resolutions___tracedSVG'
  | 'entry_post___thumbnail___resolutions___aspectRatio'
  | 'entry_post___thumbnail___resolutions___width'
  | 'entry_post___thumbnail___resolutions___height'
  | 'entry_post___thumbnail___resolutions___src'
  | 'entry_post___thumbnail___resolutions___srcSet'
  | 'entry_post___thumbnail___resolutions___srcWebp'
  | 'entry_post___thumbnail___resolutions___srcSetWebp'
  | 'entry_post___thumbnail___fluid___base64'
  | 'entry_post___thumbnail___fluid___tracedSVG'
  | 'entry_post___thumbnail___fluid___aspectRatio'
  | 'entry_post___thumbnail___fluid___src'
  | 'entry_post___thumbnail___fluid___srcSet'
  | 'entry_post___thumbnail___fluid___srcWebp'
  | 'entry_post___thumbnail___fluid___srcSetWebp'
  | 'entry_post___thumbnail___fluid___sizes'
  | 'entry_post___thumbnail___sizes___base64'
  | 'entry_post___thumbnail___sizes___tracedSVG'
  | 'entry_post___thumbnail___sizes___aspectRatio'
  | 'entry_post___thumbnail___sizes___src'
  | 'entry_post___thumbnail___sizes___srcSet'
  | 'entry_post___thumbnail___sizes___srcWebp'
  | 'entry_post___thumbnail___sizes___srcSetWebp'
  | 'entry_post___thumbnail___sizes___sizes'
  | 'entry_post___thumbnail___resize___base64'
  | 'entry_post___thumbnail___resize___tracedSVG'
  | 'entry_post___thumbnail___resize___src'
  | 'entry_post___thumbnail___resize___width'
  | 'entry_post___thumbnail___resize___height'
  | 'entry_post___thumbnail___resize___aspectRatio'
  | 'entry_post___body___id'
  | 'entry_post___body___parent___id'
  | 'entry_post___body___parent___children'
  | 'entry_post___body___children'
  | 'entry_post___body___children___id'
  | 'entry_post___body___children___children'
  | 'entry_post___body___internal___content'
  | 'entry_post___body___internal___contentDigest'
  | 'entry_post___body___internal___description'
  | 'entry_post___body___internal___fieldOwners'
  | 'entry_post___body___internal___ignoreType'
  | 'entry_post___body___internal___mediaType'
  | 'entry_post___body___internal___owner'
  | 'entry_post___body___internal___type'
  | 'entry_post___body___body'
  | 'entry_post___body___childMarkdownRemark___id'
  | 'entry_post___body___childMarkdownRemark___excerpt'
  | 'entry_post___body___childMarkdownRemark___rawMarkdownBody'
  | 'entry_post___body___childMarkdownRemark___html'
  | 'entry_post___body___childMarkdownRemark___htmlAst'
  | 'entry_post___body___childMarkdownRemark___excerptAst'
  | 'entry_post___body___childMarkdownRemark___headings'
  | 'entry_post___body___childMarkdownRemark___timeToRead'
  | 'entry_post___body___childMarkdownRemark___tableOfContents'
  | 'entry_post___body___childMarkdownRemark___children'
  | 'entry_post___content___id'
  | 'entry_post___content___parent___id'
  | 'entry_post___content___parent___children'
  | 'entry_post___content___children'
  | 'entry_post___content___children___id'
  | 'entry_post___content___children___children'
  | 'entry_post___content___internal___content'
  | 'entry_post___content___internal___contentDigest'
  | 'entry_post___content___internal___description'
  | 'entry_post___content___internal___fieldOwners'
  | 'entry_post___content___internal___ignoreType'
  | 'entry_post___content___internal___mediaType'
  | 'entry_post___content___internal___owner'
  | 'entry_post___content___internal___type'
  | 'entry_post___content___content'
  | 'entry_post___content___childMarkdownRemark___id'
  | 'entry_post___content___childMarkdownRemark___excerpt'
  | 'entry_post___content___childMarkdownRemark___rawMarkdownBody'
  | 'entry_post___content___childMarkdownRemark___html'
  | 'entry_post___content___childMarkdownRemark___htmlAst'
  | 'entry_post___content___childMarkdownRemark___excerptAst'
  | 'entry_post___content___childMarkdownRemark___headings'
  | 'entry_post___content___childMarkdownRemark___timeToRead'
  | 'entry_post___content___childMarkdownRemark___tableOfContents'
  | 'entry_post___content___childMarkdownRemark___children'
  | 'entry_post___spaceId'
  | 'entry_post___contentful_id'
  | 'entry_post___createdAt'
  | 'entry_post___updatedAt'
  | 'entry_post___sys___revision'
  | 'entry_post___node_locale'
  | 'entry_post___childContentfulEntryPostBodyTextNode___id'
  | 'entry_post___childContentfulEntryPostBodyTextNode___parent___id'
  | 'entry_post___childContentfulEntryPostBodyTextNode___parent___children'
  | 'entry_post___childContentfulEntryPostBodyTextNode___children'
  | 'entry_post___childContentfulEntryPostBodyTextNode___children___id'
  | 'entry_post___childContentfulEntryPostBodyTextNode___children___children'
  | 'entry_post___childContentfulEntryPostBodyTextNode___internal___content'
  | 'entry_post___childContentfulEntryPostBodyTextNode___internal___contentDigest'
  | 'entry_post___childContentfulEntryPostBodyTextNode___internal___description'
  | 'entry_post___childContentfulEntryPostBodyTextNode___internal___fieldOwners'
  | 'entry_post___childContentfulEntryPostBodyTextNode___internal___ignoreType'
  | 'entry_post___childContentfulEntryPostBodyTextNode___internal___mediaType'
  | 'entry_post___childContentfulEntryPostBodyTextNode___internal___owner'
  | 'entry_post___childContentfulEntryPostBodyTextNode___internal___type'
  | 'entry_post___childContentfulEntryPostBodyTextNode___body'
  | 'entry_post___childContentfulEntryPostBodyTextNode___childMarkdownRemark___id'
  | 'entry_post___childContentfulEntryPostBodyTextNode___childMarkdownRemark___excerpt'
  | 'entry_post___childContentfulEntryPostBodyTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'entry_post___childContentfulEntryPostBodyTextNode___childMarkdownRemark___html'
  | 'entry_post___childContentfulEntryPostBodyTextNode___childMarkdownRemark___htmlAst'
  | 'entry_post___childContentfulEntryPostBodyTextNode___childMarkdownRemark___excerptAst'
  | 'entry_post___childContentfulEntryPostBodyTextNode___childMarkdownRemark___headings'
  | 'entry_post___childContentfulEntryPostBodyTextNode___childMarkdownRemark___timeToRead'
  | 'entry_post___childContentfulEntryPostBodyTextNode___childMarkdownRemark___tableOfContents'
  | 'entry_post___childContentfulEntryPostBodyTextNode___childMarkdownRemark___children'
  | 'entry_post___childContentfulEntryPostContentTextNode___id'
  | 'entry_post___childContentfulEntryPostContentTextNode___parent___id'
  | 'entry_post___childContentfulEntryPostContentTextNode___parent___children'
  | 'entry_post___childContentfulEntryPostContentTextNode___children'
  | 'entry_post___childContentfulEntryPostContentTextNode___children___id'
  | 'entry_post___childContentfulEntryPostContentTextNode___children___children'
  | 'entry_post___childContentfulEntryPostContentTextNode___internal___content'
  | 'entry_post___childContentfulEntryPostContentTextNode___internal___contentDigest'
  | 'entry_post___childContentfulEntryPostContentTextNode___internal___description'
  | 'entry_post___childContentfulEntryPostContentTextNode___internal___fieldOwners'
  | 'entry_post___childContentfulEntryPostContentTextNode___internal___ignoreType'
  | 'entry_post___childContentfulEntryPostContentTextNode___internal___mediaType'
  | 'entry_post___childContentfulEntryPostContentTextNode___internal___owner'
  | 'entry_post___childContentfulEntryPostContentTextNode___internal___type'
  | 'entry_post___childContentfulEntryPostContentTextNode___content'
  | 'entry_post___childContentfulEntryPostContentTextNode___childMarkdownRemark___id'
  | 'entry_post___childContentfulEntryPostContentTextNode___childMarkdownRemark___excerpt'
  | 'entry_post___childContentfulEntryPostContentTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'entry_post___childContentfulEntryPostContentTextNode___childMarkdownRemark___html'
  | 'entry_post___childContentfulEntryPostContentTextNode___childMarkdownRemark___htmlAst'
  | 'entry_post___childContentfulEntryPostContentTextNode___childMarkdownRemark___excerptAst'
  | 'entry_post___childContentfulEntryPostContentTextNode___childMarkdownRemark___headings'
  | 'entry_post___childContentfulEntryPostContentTextNode___childMarkdownRemark___timeToRead'
  | 'entry_post___childContentfulEntryPostContentTextNode___childMarkdownRemark___tableOfContents'
  | 'entry_post___childContentfulEntryPostContentTextNode___childMarkdownRemark___children'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale';

export type ContentfulCategoryFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  parentId?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  contentfulid?: Maybe<IntQueryOperatorInput>;
  entry_post?: Maybe<ContentfulEntryPostFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulCategorySysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulCategoryFilterListInput = {
  elemMatch?: Maybe<ContentfulCategoryFilterInput>;
};

export type ContentfulCategoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCategoryEdge>;
  nodes: Array<ContentfulCategory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulCategorySortInput = {
  fields?: Maybe<Array<Maybe<ContentfulCategoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulCategorySys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulCategorySysContentType>;
};

export type ContentfulCategorySysContentType = {
  sys?: Maybe<ContentfulCategorySysContentTypeSys>;
};

export type ContentfulCategorySysContentTypeFilterInput = {
  sys?: Maybe<ContentfulCategorySysContentTypeSysFilterInput>;
};

export type ContentfulCategorySysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulCategorySysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulCategorySysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulCategorySysContentTypeFilterInput>;
};

export type ContentfulContentType = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  displayField?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulContentTypeGroupConnection>;
};


export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeEdge = {
  next?: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous?: Maybe<ContentfulContentType>;
};

export type ContentfulContentTypeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'displayField'
  | 'description';

export type ContentfulContentTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulContentTypeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContentTypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulEntryPost = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  publishDate?: Maybe<Scalars['Date']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentfulid?: Maybe<Scalars['Int']>;
  author?: Maybe<ContentfulPerson>;
  categoryId?: Maybe<Array<Maybe<ContentfulCategory>>>;
  thumbnail?: Maybe<ContentfulAsset>;
  body?: Maybe<ContentfulEntryPostBodyTextNode>;
  content?: Maybe<ContentfulEntryPostContentTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulEntryPostSys>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulEntryPostBodyTextNode?: Maybe<ContentfulEntryPostBodyTextNode>;
  childContentfulEntryPostContentTextNode?: Maybe<ContentfulEntryPostContentTextNode>;
};


export type ContentfulEntryPostPublishDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulEntryPostCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulEntryPostUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulEntryPostBodyTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  body?: Maybe<Scalars['String']>;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulEntryPostBodyTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEntryPostBodyTextNodeEdge>;
  nodes: Array<ContentfulEntryPostBodyTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulEntryPostBodyTextNodeGroupConnection>;
};


export type ContentfulEntryPostBodyTextNodeConnectionDistinctArgs = {
  field: ContentfulEntryPostBodyTextNodeFieldsEnum;
};


export type ContentfulEntryPostBodyTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulEntryPostBodyTextNodeFieldsEnum;
};

export type ContentfulEntryPostBodyTextNodeEdge = {
  next?: Maybe<ContentfulEntryPostBodyTextNode>;
  node: ContentfulEntryPostBodyTextNode;
  previous?: Maybe<ContentfulEntryPostBodyTextNode>;
};

export type ContentfulEntryPostBodyTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'body'
  | 'childMarkdownRemark___id'
  | 'childMarkdownRemark___frontmatter___title'
  | 'childMarkdownRemark___excerpt'
  | 'childMarkdownRemark___rawMarkdownBody'
  | 'childMarkdownRemark___html'
  | 'childMarkdownRemark___htmlAst'
  | 'childMarkdownRemark___excerptAst'
  | 'childMarkdownRemark___headings'
  | 'childMarkdownRemark___headings___id'
  | 'childMarkdownRemark___headings___value'
  | 'childMarkdownRemark___headings___depth'
  | 'childMarkdownRemark___timeToRead'
  | 'childMarkdownRemark___tableOfContents'
  | 'childMarkdownRemark___wordCount___paragraphs'
  | 'childMarkdownRemark___wordCount___sentences'
  | 'childMarkdownRemark___wordCount___words'
  | 'childMarkdownRemark___parent___id'
  | 'childMarkdownRemark___parent___parent___id'
  | 'childMarkdownRemark___parent___parent___children'
  | 'childMarkdownRemark___parent___children'
  | 'childMarkdownRemark___parent___children___id'
  | 'childMarkdownRemark___parent___children___children'
  | 'childMarkdownRemark___parent___internal___content'
  | 'childMarkdownRemark___parent___internal___contentDigest'
  | 'childMarkdownRemark___parent___internal___description'
  | 'childMarkdownRemark___parent___internal___fieldOwners'
  | 'childMarkdownRemark___parent___internal___ignoreType'
  | 'childMarkdownRemark___parent___internal___mediaType'
  | 'childMarkdownRemark___parent___internal___owner'
  | 'childMarkdownRemark___parent___internal___type'
  | 'childMarkdownRemark___children'
  | 'childMarkdownRemark___children___id'
  | 'childMarkdownRemark___children___parent___id'
  | 'childMarkdownRemark___children___parent___children'
  | 'childMarkdownRemark___children___children'
  | 'childMarkdownRemark___children___children___id'
  | 'childMarkdownRemark___children___children___children'
  | 'childMarkdownRemark___children___internal___content'
  | 'childMarkdownRemark___children___internal___contentDigest'
  | 'childMarkdownRemark___children___internal___description'
  | 'childMarkdownRemark___children___internal___fieldOwners'
  | 'childMarkdownRemark___children___internal___ignoreType'
  | 'childMarkdownRemark___children___internal___mediaType'
  | 'childMarkdownRemark___children___internal___owner'
  | 'childMarkdownRemark___children___internal___type'
  | 'childMarkdownRemark___internal___content'
  | 'childMarkdownRemark___internal___contentDigest'
  | 'childMarkdownRemark___internal___description'
  | 'childMarkdownRemark___internal___fieldOwners'
  | 'childMarkdownRemark___internal___ignoreType'
  | 'childMarkdownRemark___internal___mediaType'
  | 'childMarkdownRemark___internal___owner'
  | 'childMarkdownRemark___internal___type';

export type ContentfulEntryPostBodyTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  body?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type ContentfulEntryPostBodyTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEntryPostBodyTextNodeEdge>;
  nodes: Array<ContentfulEntryPostBodyTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulEntryPostBodyTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulEntryPostBodyTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulEntryPostConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEntryPostEdge>;
  nodes: Array<ContentfulEntryPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulEntryPostGroupConnection>;
};


export type ContentfulEntryPostConnectionDistinctArgs = {
  field: ContentfulEntryPostFieldsEnum;
};


export type ContentfulEntryPostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulEntryPostFieldsEnum;
};

export type ContentfulEntryPostContentTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  content?: Maybe<Scalars['String']>;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulEntryPostContentTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEntryPostContentTextNodeEdge>;
  nodes: Array<ContentfulEntryPostContentTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulEntryPostContentTextNodeGroupConnection>;
};


export type ContentfulEntryPostContentTextNodeConnectionDistinctArgs = {
  field: ContentfulEntryPostContentTextNodeFieldsEnum;
};


export type ContentfulEntryPostContentTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulEntryPostContentTextNodeFieldsEnum;
};

export type ContentfulEntryPostContentTextNodeEdge = {
  next?: Maybe<ContentfulEntryPostContentTextNode>;
  node: ContentfulEntryPostContentTextNode;
  previous?: Maybe<ContentfulEntryPostContentTextNode>;
};

export type ContentfulEntryPostContentTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'content'
  | 'childMarkdownRemark___id'
  | 'childMarkdownRemark___frontmatter___title'
  | 'childMarkdownRemark___excerpt'
  | 'childMarkdownRemark___rawMarkdownBody'
  | 'childMarkdownRemark___html'
  | 'childMarkdownRemark___htmlAst'
  | 'childMarkdownRemark___excerptAst'
  | 'childMarkdownRemark___headings'
  | 'childMarkdownRemark___headings___id'
  | 'childMarkdownRemark___headings___value'
  | 'childMarkdownRemark___headings___depth'
  | 'childMarkdownRemark___timeToRead'
  | 'childMarkdownRemark___tableOfContents'
  | 'childMarkdownRemark___wordCount___paragraphs'
  | 'childMarkdownRemark___wordCount___sentences'
  | 'childMarkdownRemark___wordCount___words'
  | 'childMarkdownRemark___parent___id'
  | 'childMarkdownRemark___parent___parent___id'
  | 'childMarkdownRemark___parent___parent___children'
  | 'childMarkdownRemark___parent___children'
  | 'childMarkdownRemark___parent___children___id'
  | 'childMarkdownRemark___parent___children___children'
  | 'childMarkdownRemark___parent___internal___content'
  | 'childMarkdownRemark___parent___internal___contentDigest'
  | 'childMarkdownRemark___parent___internal___description'
  | 'childMarkdownRemark___parent___internal___fieldOwners'
  | 'childMarkdownRemark___parent___internal___ignoreType'
  | 'childMarkdownRemark___parent___internal___mediaType'
  | 'childMarkdownRemark___parent___internal___owner'
  | 'childMarkdownRemark___parent___internal___type'
  | 'childMarkdownRemark___children'
  | 'childMarkdownRemark___children___id'
  | 'childMarkdownRemark___children___parent___id'
  | 'childMarkdownRemark___children___parent___children'
  | 'childMarkdownRemark___children___children'
  | 'childMarkdownRemark___children___children___id'
  | 'childMarkdownRemark___children___children___children'
  | 'childMarkdownRemark___children___internal___content'
  | 'childMarkdownRemark___children___internal___contentDigest'
  | 'childMarkdownRemark___children___internal___description'
  | 'childMarkdownRemark___children___internal___fieldOwners'
  | 'childMarkdownRemark___children___internal___ignoreType'
  | 'childMarkdownRemark___children___internal___mediaType'
  | 'childMarkdownRemark___children___internal___owner'
  | 'childMarkdownRemark___children___internal___type'
  | 'childMarkdownRemark___internal___content'
  | 'childMarkdownRemark___internal___contentDigest'
  | 'childMarkdownRemark___internal___description'
  | 'childMarkdownRemark___internal___fieldOwners'
  | 'childMarkdownRemark___internal___ignoreType'
  | 'childMarkdownRemark___internal___mediaType'
  | 'childMarkdownRemark___internal___owner'
  | 'childMarkdownRemark___internal___type';

export type ContentfulEntryPostContentTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type ContentfulEntryPostContentTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEntryPostContentTextNodeEdge>;
  nodes: Array<ContentfulEntryPostContentTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulEntryPostContentTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulEntryPostContentTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulEntryPostEdge = {
  next?: Maybe<ContentfulEntryPost>;
  node: ContentfulEntryPost;
  previous?: Maybe<ContentfulEntryPost>;
};

export type ContentfulEntryPostFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'publishDate'
  | 'tags'
  | 'contentfulid'
  | 'author___id'
  | 'author___parent___id'
  | 'author___parent___parent___id'
  | 'author___parent___parent___children'
  | 'author___parent___children'
  | 'author___parent___children___id'
  | 'author___parent___children___children'
  | 'author___parent___internal___content'
  | 'author___parent___internal___contentDigest'
  | 'author___parent___internal___description'
  | 'author___parent___internal___fieldOwners'
  | 'author___parent___internal___ignoreType'
  | 'author___parent___internal___mediaType'
  | 'author___parent___internal___owner'
  | 'author___parent___internal___type'
  | 'author___children'
  | 'author___children___id'
  | 'author___children___parent___id'
  | 'author___children___parent___children'
  | 'author___children___children'
  | 'author___children___children___id'
  | 'author___children___children___children'
  | 'author___children___internal___content'
  | 'author___children___internal___contentDigest'
  | 'author___children___internal___description'
  | 'author___children___internal___fieldOwners'
  | 'author___children___internal___ignoreType'
  | 'author___children___internal___mediaType'
  | 'author___children___internal___owner'
  | 'author___children___internal___type'
  | 'author___internal___content'
  | 'author___internal___contentDigest'
  | 'author___internal___description'
  | 'author___internal___fieldOwners'
  | 'author___internal___ignoreType'
  | 'author___internal___mediaType'
  | 'author___internal___owner'
  | 'author___internal___type'
  | 'author___name'
  | 'author___title'
  | 'author___company'
  | 'author___entry_post'
  | 'author___entry_post___id'
  | 'author___entry_post___parent___id'
  | 'author___entry_post___parent___children'
  | 'author___entry_post___children'
  | 'author___entry_post___children___id'
  | 'author___entry_post___children___children'
  | 'author___entry_post___internal___content'
  | 'author___entry_post___internal___contentDigest'
  | 'author___entry_post___internal___description'
  | 'author___entry_post___internal___fieldOwners'
  | 'author___entry_post___internal___ignoreType'
  | 'author___entry_post___internal___mediaType'
  | 'author___entry_post___internal___owner'
  | 'author___entry_post___internal___type'
  | 'author___entry_post___title'
  | 'author___entry_post___publishDate'
  | 'author___entry_post___tags'
  | 'author___entry_post___contentfulid'
  | 'author___entry_post___author___id'
  | 'author___entry_post___author___children'
  | 'author___entry_post___author___name'
  | 'author___entry_post___author___title'
  | 'author___entry_post___author___company'
  | 'author___entry_post___author___entry_post'
  | 'author___entry_post___author___spaceId'
  | 'author___entry_post___author___contentful_id'
  | 'author___entry_post___author___createdAt'
  | 'author___entry_post___author___updatedAt'
  | 'author___entry_post___author___node_locale'
  | 'author___entry_post___author___email'
  | 'author___entry_post___author___phone'
  | 'author___entry_post___author___facebook'
  | 'author___entry_post___author___twitter'
  | 'author___entry_post___author___github'
  | 'author___entry_post___categoryId'
  | 'author___entry_post___categoryId___id'
  | 'author___entry_post___categoryId___children'
  | 'author___entry_post___categoryId___parentId'
  | 'author___entry_post___categoryId___name'
  | 'author___entry_post___categoryId___contentfulid'
  | 'author___entry_post___categoryId___entry_post'
  | 'author___entry_post___categoryId___spaceId'
  | 'author___entry_post___categoryId___contentful_id'
  | 'author___entry_post___categoryId___createdAt'
  | 'author___entry_post___categoryId___updatedAt'
  | 'author___entry_post___categoryId___node_locale'
  | 'author___entry_post___thumbnail___id'
  | 'author___entry_post___thumbnail___children'
  | 'author___entry_post___thumbnail___contentful_id'
  | 'author___entry_post___thumbnail___spaceId'
  | 'author___entry_post___thumbnail___createdAt'
  | 'author___entry_post___thumbnail___updatedAt'
  | 'author___entry_post___thumbnail___title'
  | 'author___entry_post___thumbnail___description'
  | 'author___entry_post___thumbnail___node_locale'
  | 'author___entry_post___body___id'
  | 'author___entry_post___body___children'
  | 'author___entry_post___body___body'
  | 'author___entry_post___content___id'
  | 'author___entry_post___content___children'
  | 'author___entry_post___content___content'
  | 'author___entry_post___spaceId'
  | 'author___entry_post___contentful_id'
  | 'author___entry_post___createdAt'
  | 'author___entry_post___updatedAt'
  | 'author___entry_post___sys___revision'
  | 'author___entry_post___node_locale'
  | 'author___entry_post___childContentfulEntryPostBodyTextNode___id'
  | 'author___entry_post___childContentfulEntryPostBodyTextNode___children'
  | 'author___entry_post___childContentfulEntryPostBodyTextNode___body'
  | 'author___entry_post___childContentfulEntryPostContentTextNode___id'
  | 'author___entry_post___childContentfulEntryPostContentTextNode___children'
  | 'author___entry_post___childContentfulEntryPostContentTextNode___content'
  | 'author___shortBio___id'
  | 'author___shortBio___parent___id'
  | 'author___shortBio___parent___children'
  | 'author___shortBio___children'
  | 'author___shortBio___children___id'
  | 'author___shortBio___children___children'
  | 'author___shortBio___internal___content'
  | 'author___shortBio___internal___contentDigest'
  | 'author___shortBio___internal___description'
  | 'author___shortBio___internal___fieldOwners'
  | 'author___shortBio___internal___ignoreType'
  | 'author___shortBio___internal___mediaType'
  | 'author___shortBio___internal___owner'
  | 'author___shortBio___internal___type'
  | 'author___shortBio___shortBio'
  | 'author___shortBio___childMarkdownRemark___id'
  | 'author___shortBio___childMarkdownRemark___excerpt'
  | 'author___shortBio___childMarkdownRemark___rawMarkdownBody'
  | 'author___shortBio___childMarkdownRemark___html'
  | 'author___shortBio___childMarkdownRemark___htmlAst'
  | 'author___shortBio___childMarkdownRemark___excerptAst'
  | 'author___shortBio___childMarkdownRemark___headings'
  | 'author___shortBio___childMarkdownRemark___timeToRead'
  | 'author___shortBio___childMarkdownRemark___tableOfContents'
  | 'author___shortBio___childMarkdownRemark___children'
  | 'author___spaceId'
  | 'author___contentful_id'
  | 'author___createdAt'
  | 'author___updatedAt'
  | 'author___sys___revision'
  | 'author___node_locale'
  | 'author___email'
  | 'author___phone'
  | 'author___facebook'
  | 'author___twitter'
  | 'author___github'
  | 'author___image___id'
  | 'author___image___parent___id'
  | 'author___image___parent___children'
  | 'author___image___children'
  | 'author___image___children___id'
  | 'author___image___children___children'
  | 'author___image___internal___content'
  | 'author___image___internal___contentDigest'
  | 'author___image___internal___description'
  | 'author___image___internal___fieldOwners'
  | 'author___image___internal___ignoreType'
  | 'author___image___internal___mediaType'
  | 'author___image___internal___owner'
  | 'author___image___internal___type'
  | 'author___image___contentful_id'
  | 'author___image___spaceId'
  | 'author___image___createdAt'
  | 'author___image___updatedAt'
  | 'author___image___file___url'
  | 'author___image___file___fileName'
  | 'author___image___file___contentType'
  | 'author___image___title'
  | 'author___image___description'
  | 'author___image___node_locale'
  | 'author___image___sys___revision'
  | 'author___image___localFile___sourceInstanceName'
  | 'author___image___localFile___absolutePath'
  | 'author___image___localFile___relativePath'
  | 'author___image___localFile___extension'
  | 'author___image___localFile___size'
  | 'author___image___localFile___prettySize'
  | 'author___image___localFile___modifiedTime'
  | 'author___image___localFile___accessTime'
  | 'author___image___localFile___changeTime'
  | 'author___image___localFile___birthTime'
  | 'author___image___localFile___root'
  | 'author___image___localFile___dir'
  | 'author___image___localFile___base'
  | 'author___image___localFile___ext'
  | 'author___image___localFile___name'
  | 'author___image___localFile___relativeDirectory'
  | 'author___image___localFile___dev'
  | 'author___image___localFile___mode'
  | 'author___image___localFile___nlink'
  | 'author___image___localFile___uid'
  | 'author___image___localFile___gid'
  | 'author___image___localFile___rdev'
  | 'author___image___localFile___ino'
  | 'author___image___localFile___atimeMs'
  | 'author___image___localFile___mtimeMs'
  | 'author___image___localFile___ctimeMs'
  | 'author___image___localFile___atime'
  | 'author___image___localFile___mtime'
  | 'author___image___localFile___ctime'
  | 'author___image___localFile___birthtime'
  | 'author___image___localFile___birthtimeMs'
  | 'author___image___localFile___blksize'
  | 'author___image___localFile___blocks'
  | 'author___image___localFile___url'
  | 'author___image___localFile___id'
  | 'author___image___localFile___children'
  | 'author___image___fixed___base64'
  | 'author___image___fixed___tracedSVG'
  | 'author___image___fixed___aspectRatio'
  | 'author___image___fixed___width'
  | 'author___image___fixed___height'
  | 'author___image___fixed___src'
  | 'author___image___fixed___srcSet'
  | 'author___image___fixed___srcWebp'
  | 'author___image___fixed___srcSetWebp'
  | 'author___image___resolutions___base64'
  | 'author___image___resolutions___tracedSVG'
  | 'author___image___resolutions___aspectRatio'
  | 'author___image___resolutions___width'
  | 'author___image___resolutions___height'
  | 'author___image___resolutions___src'
  | 'author___image___resolutions___srcSet'
  | 'author___image___resolutions___srcWebp'
  | 'author___image___resolutions___srcSetWebp'
  | 'author___image___fluid___base64'
  | 'author___image___fluid___tracedSVG'
  | 'author___image___fluid___aspectRatio'
  | 'author___image___fluid___src'
  | 'author___image___fluid___srcSet'
  | 'author___image___fluid___srcWebp'
  | 'author___image___fluid___srcSetWebp'
  | 'author___image___fluid___sizes'
  | 'author___image___sizes___base64'
  | 'author___image___sizes___tracedSVG'
  | 'author___image___sizes___aspectRatio'
  | 'author___image___sizes___src'
  | 'author___image___sizes___srcSet'
  | 'author___image___sizes___srcWebp'
  | 'author___image___sizes___srcSetWebp'
  | 'author___image___sizes___sizes'
  | 'author___image___resize___base64'
  | 'author___image___resize___tracedSVG'
  | 'author___image___resize___src'
  | 'author___image___resize___width'
  | 'author___image___resize___height'
  | 'author___image___resize___aspectRatio'
  | 'author___childContentfulPersonShortBioTextNode___id'
  | 'author___childContentfulPersonShortBioTextNode___parent___id'
  | 'author___childContentfulPersonShortBioTextNode___parent___children'
  | 'author___childContentfulPersonShortBioTextNode___children'
  | 'author___childContentfulPersonShortBioTextNode___children___id'
  | 'author___childContentfulPersonShortBioTextNode___children___children'
  | 'author___childContentfulPersonShortBioTextNode___internal___content'
  | 'author___childContentfulPersonShortBioTextNode___internal___contentDigest'
  | 'author___childContentfulPersonShortBioTextNode___internal___description'
  | 'author___childContentfulPersonShortBioTextNode___internal___fieldOwners'
  | 'author___childContentfulPersonShortBioTextNode___internal___ignoreType'
  | 'author___childContentfulPersonShortBioTextNode___internal___mediaType'
  | 'author___childContentfulPersonShortBioTextNode___internal___owner'
  | 'author___childContentfulPersonShortBioTextNode___internal___type'
  | 'author___childContentfulPersonShortBioTextNode___shortBio'
  | 'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___id'
  | 'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___excerpt'
  | 'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___html'
  | 'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___htmlAst'
  | 'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___excerptAst'
  | 'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___headings'
  | 'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___timeToRead'
  | 'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___tableOfContents'
  | 'author___childContentfulPersonShortBioTextNode___childMarkdownRemark___children'
  | 'categoryId'
  | 'categoryId___id'
  | 'categoryId___parent___id'
  | 'categoryId___parent___parent___id'
  | 'categoryId___parent___parent___children'
  | 'categoryId___parent___children'
  | 'categoryId___parent___children___id'
  | 'categoryId___parent___children___children'
  | 'categoryId___parent___internal___content'
  | 'categoryId___parent___internal___contentDigest'
  | 'categoryId___parent___internal___description'
  | 'categoryId___parent___internal___fieldOwners'
  | 'categoryId___parent___internal___ignoreType'
  | 'categoryId___parent___internal___mediaType'
  | 'categoryId___parent___internal___owner'
  | 'categoryId___parent___internal___type'
  | 'categoryId___children'
  | 'categoryId___children___id'
  | 'categoryId___children___parent___id'
  | 'categoryId___children___parent___children'
  | 'categoryId___children___children'
  | 'categoryId___children___children___id'
  | 'categoryId___children___children___children'
  | 'categoryId___children___internal___content'
  | 'categoryId___children___internal___contentDigest'
  | 'categoryId___children___internal___description'
  | 'categoryId___children___internal___fieldOwners'
  | 'categoryId___children___internal___ignoreType'
  | 'categoryId___children___internal___mediaType'
  | 'categoryId___children___internal___owner'
  | 'categoryId___children___internal___type'
  | 'categoryId___internal___content'
  | 'categoryId___internal___contentDigest'
  | 'categoryId___internal___description'
  | 'categoryId___internal___fieldOwners'
  | 'categoryId___internal___ignoreType'
  | 'categoryId___internal___mediaType'
  | 'categoryId___internal___owner'
  | 'categoryId___internal___type'
  | 'categoryId___parentId'
  | 'categoryId___name'
  | 'categoryId___contentfulid'
  | 'categoryId___entry_post'
  | 'categoryId___entry_post___id'
  | 'categoryId___entry_post___parent___id'
  | 'categoryId___entry_post___parent___children'
  | 'categoryId___entry_post___children'
  | 'categoryId___entry_post___children___id'
  | 'categoryId___entry_post___children___children'
  | 'categoryId___entry_post___internal___content'
  | 'categoryId___entry_post___internal___contentDigest'
  | 'categoryId___entry_post___internal___description'
  | 'categoryId___entry_post___internal___fieldOwners'
  | 'categoryId___entry_post___internal___ignoreType'
  | 'categoryId___entry_post___internal___mediaType'
  | 'categoryId___entry_post___internal___owner'
  | 'categoryId___entry_post___internal___type'
  | 'categoryId___entry_post___title'
  | 'categoryId___entry_post___publishDate'
  | 'categoryId___entry_post___tags'
  | 'categoryId___entry_post___contentfulid'
  | 'categoryId___entry_post___author___id'
  | 'categoryId___entry_post___author___children'
  | 'categoryId___entry_post___author___name'
  | 'categoryId___entry_post___author___title'
  | 'categoryId___entry_post___author___company'
  | 'categoryId___entry_post___author___entry_post'
  | 'categoryId___entry_post___author___spaceId'
  | 'categoryId___entry_post___author___contentful_id'
  | 'categoryId___entry_post___author___createdAt'
  | 'categoryId___entry_post___author___updatedAt'
  | 'categoryId___entry_post___author___node_locale'
  | 'categoryId___entry_post___author___email'
  | 'categoryId___entry_post___author___phone'
  | 'categoryId___entry_post___author___facebook'
  | 'categoryId___entry_post___author___twitter'
  | 'categoryId___entry_post___author___github'
  | 'categoryId___entry_post___categoryId'
  | 'categoryId___entry_post___categoryId___id'
  | 'categoryId___entry_post___categoryId___children'
  | 'categoryId___entry_post___categoryId___parentId'
  | 'categoryId___entry_post___categoryId___name'
  | 'categoryId___entry_post___categoryId___contentfulid'
  | 'categoryId___entry_post___categoryId___entry_post'
  | 'categoryId___entry_post___categoryId___spaceId'
  | 'categoryId___entry_post___categoryId___contentful_id'
  | 'categoryId___entry_post___categoryId___createdAt'
  | 'categoryId___entry_post___categoryId___updatedAt'
  | 'categoryId___entry_post___categoryId___node_locale'
  | 'categoryId___entry_post___thumbnail___id'
  | 'categoryId___entry_post___thumbnail___children'
  | 'categoryId___entry_post___thumbnail___contentful_id'
  | 'categoryId___entry_post___thumbnail___spaceId'
  | 'categoryId___entry_post___thumbnail___createdAt'
  | 'categoryId___entry_post___thumbnail___updatedAt'
  | 'categoryId___entry_post___thumbnail___title'
  | 'categoryId___entry_post___thumbnail___description'
  | 'categoryId___entry_post___thumbnail___node_locale'
  | 'categoryId___entry_post___body___id'
  | 'categoryId___entry_post___body___children'
  | 'categoryId___entry_post___body___body'
  | 'categoryId___entry_post___content___id'
  | 'categoryId___entry_post___content___children'
  | 'categoryId___entry_post___content___content'
  | 'categoryId___entry_post___spaceId'
  | 'categoryId___entry_post___contentful_id'
  | 'categoryId___entry_post___createdAt'
  | 'categoryId___entry_post___updatedAt'
  | 'categoryId___entry_post___sys___revision'
  | 'categoryId___entry_post___node_locale'
  | 'categoryId___entry_post___childContentfulEntryPostBodyTextNode___id'
  | 'categoryId___entry_post___childContentfulEntryPostBodyTextNode___children'
  | 'categoryId___entry_post___childContentfulEntryPostBodyTextNode___body'
  | 'categoryId___entry_post___childContentfulEntryPostContentTextNode___id'
  | 'categoryId___entry_post___childContentfulEntryPostContentTextNode___children'
  | 'categoryId___entry_post___childContentfulEntryPostContentTextNode___content'
  | 'categoryId___spaceId'
  | 'categoryId___contentful_id'
  | 'categoryId___createdAt'
  | 'categoryId___updatedAt'
  | 'categoryId___sys___revision'
  | 'categoryId___node_locale'
  | 'thumbnail___id'
  | 'thumbnail___parent___id'
  | 'thumbnail___parent___parent___id'
  | 'thumbnail___parent___parent___children'
  | 'thumbnail___parent___children'
  | 'thumbnail___parent___children___id'
  | 'thumbnail___parent___children___children'
  | 'thumbnail___parent___internal___content'
  | 'thumbnail___parent___internal___contentDigest'
  | 'thumbnail___parent___internal___description'
  | 'thumbnail___parent___internal___fieldOwners'
  | 'thumbnail___parent___internal___ignoreType'
  | 'thumbnail___parent___internal___mediaType'
  | 'thumbnail___parent___internal___owner'
  | 'thumbnail___parent___internal___type'
  | 'thumbnail___children'
  | 'thumbnail___children___id'
  | 'thumbnail___children___parent___id'
  | 'thumbnail___children___parent___children'
  | 'thumbnail___children___children'
  | 'thumbnail___children___children___id'
  | 'thumbnail___children___children___children'
  | 'thumbnail___children___internal___content'
  | 'thumbnail___children___internal___contentDigest'
  | 'thumbnail___children___internal___description'
  | 'thumbnail___children___internal___fieldOwners'
  | 'thumbnail___children___internal___ignoreType'
  | 'thumbnail___children___internal___mediaType'
  | 'thumbnail___children___internal___owner'
  | 'thumbnail___children___internal___type'
  | 'thumbnail___internal___content'
  | 'thumbnail___internal___contentDigest'
  | 'thumbnail___internal___description'
  | 'thumbnail___internal___fieldOwners'
  | 'thumbnail___internal___ignoreType'
  | 'thumbnail___internal___mediaType'
  | 'thumbnail___internal___owner'
  | 'thumbnail___internal___type'
  | 'thumbnail___contentful_id'
  | 'thumbnail___spaceId'
  | 'thumbnail___createdAt'
  | 'thumbnail___updatedAt'
  | 'thumbnail___file___url'
  | 'thumbnail___file___details___size'
  | 'thumbnail___file___fileName'
  | 'thumbnail___file___contentType'
  | 'thumbnail___title'
  | 'thumbnail___description'
  | 'thumbnail___node_locale'
  | 'thumbnail___sys___revision'
  | 'thumbnail___localFile___sourceInstanceName'
  | 'thumbnail___localFile___absolutePath'
  | 'thumbnail___localFile___relativePath'
  | 'thumbnail___localFile___extension'
  | 'thumbnail___localFile___size'
  | 'thumbnail___localFile___prettySize'
  | 'thumbnail___localFile___modifiedTime'
  | 'thumbnail___localFile___accessTime'
  | 'thumbnail___localFile___changeTime'
  | 'thumbnail___localFile___birthTime'
  | 'thumbnail___localFile___root'
  | 'thumbnail___localFile___dir'
  | 'thumbnail___localFile___base'
  | 'thumbnail___localFile___ext'
  | 'thumbnail___localFile___name'
  | 'thumbnail___localFile___relativeDirectory'
  | 'thumbnail___localFile___dev'
  | 'thumbnail___localFile___mode'
  | 'thumbnail___localFile___nlink'
  | 'thumbnail___localFile___uid'
  | 'thumbnail___localFile___gid'
  | 'thumbnail___localFile___rdev'
  | 'thumbnail___localFile___ino'
  | 'thumbnail___localFile___atimeMs'
  | 'thumbnail___localFile___mtimeMs'
  | 'thumbnail___localFile___ctimeMs'
  | 'thumbnail___localFile___atime'
  | 'thumbnail___localFile___mtime'
  | 'thumbnail___localFile___ctime'
  | 'thumbnail___localFile___birthtime'
  | 'thumbnail___localFile___birthtimeMs'
  | 'thumbnail___localFile___blksize'
  | 'thumbnail___localFile___blocks'
  | 'thumbnail___localFile___url'
  | 'thumbnail___localFile___id'
  | 'thumbnail___localFile___parent___id'
  | 'thumbnail___localFile___parent___children'
  | 'thumbnail___localFile___children'
  | 'thumbnail___localFile___children___id'
  | 'thumbnail___localFile___children___children'
  | 'thumbnail___localFile___internal___content'
  | 'thumbnail___localFile___internal___contentDigest'
  | 'thumbnail___localFile___internal___description'
  | 'thumbnail___localFile___internal___fieldOwners'
  | 'thumbnail___localFile___internal___ignoreType'
  | 'thumbnail___localFile___internal___mediaType'
  | 'thumbnail___localFile___internal___owner'
  | 'thumbnail___localFile___internal___type'
  | 'thumbnail___fixed___base64'
  | 'thumbnail___fixed___tracedSVG'
  | 'thumbnail___fixed___aspectRatio'
  | 'thumbnail___fixed___width'
  | 'thumbnail___fixed___height'
  | 'thumbnail___fixed___src'
  | 'thumbnail___fixed___srcSet'
  | 'thumbnail___fixed___srcWebp'
  | 'thumbnail___fixed___srcSetWebp'
  | 'thumbnail___resolutions___base64'
  | 'thumbnail___resolutions___tracedSVG'
  | 'thumbnail___resolutions___aspectRatio'
  | 'thumbnail___resolutions___width'
  | 'thumbnail___resolutions___height'
  | 'thumbnail___resolutions___src'
  | 'thumbnail___resolutions___srcSet'
  | 'thumbnail___resolutions___srcWebp'
  | 'thumbnail___resolutions___srcSetWebp'
  | 'thumbnail___fluid___base64'
  | 'thumbnail___fluid___tracedSVG'
  | 'thumbnail___fluid___aspectRatio'
  | 'thumbnail___fluid___src'
  | 'thumbnail___fluid___srcSet'
  | 'thumbnail___fluid___srcWebp'
  | 'thumbnail___fluid___srcSetWebp'
  | 'thumbnail___fluid___sizes'
  | 'thumbnail___sizes___base64'
  | 'thumbnail___sizes___tracedSVG'
  | 'thumbnail___sizes___aspectRatio'
  | 'thumbnail___sizes___src'
  | 'thumbnail___sizes___srcSet'
  | 'thumbnail___sizes___srcWebp'
  | 'thumbnail___sizes___srcSetWebp'
  | 'thumbnail___sizes___sizes'
  | 'thumbnail___resize___base64'
  | 'thumbnail___resize___tracedSVG'
  | 'thumbnail___resize___src'
  | 'thumbnail___resize___width'
  | 'thumbnail___resize___height'
  | 'thumbnail___resize___aspectRatio'
  | 'body___id'
  | 'body___parent___id'
  | 'body___parent___parent___id'
  | 'body___parent___parent___children'
  | 'body___parent___children'
  | 'body___parent___children___id'
  | 'body___parent___children___children'
  | 'body___parent___internal___content'
  | 'body___parent___internal___contentDigest'
  | 'body___parent___internal___description'
  | 'body___parent___internal___fieldOwners'
  | 'body___parent___internal___ignoreType'
  | 'body___parent___internal___mediaType'
  | 'body___parent___internal___owner'
  | 'body___parent___internal___type'
  | 'body___children'
  | 'body___children___id'
  | 'body___children___parent___id'
  | 'body___children___parent___children'
  | 'body___children___children'
  | 'body___children___children___id'
  | 'body___children___children___children'
  | 'body___children___internal___content'
  | 'body___children___internal___contentDigest'
  | 'body___children___internal___description'
  | 'body___children___internal___fieldOwners'
  | 'body___children___internal___ignoreType'
  | 'body___children___internal___mediaType'
  | 'body___children___internal___owner'
  | 'body___children___internal___type'
  | 'body___internal___content'
  | 'body___internal___contentDigest'
  | 'body___internal___description'
  | 'body___internal___fieldOwners'
  | 'body___internal___ignoreType'
  | 'body___internal___mediaType'
  | 'body___internal___owner'
  | 'body___internal___type'
  | 'body___body'
  | 'body___childMarkdownRemark___id'
  | 'body___childMarkdownRemark___frontmatter___title'
  | 'body___childMarkdownRemark___excerpt'
  | 'body___childMarkdownRemark___rawMarkdownBody'
  | 'body___childMarkdownRemark___html'
  | 'body___childMarkdownRemark___htmlAst'
  | 'body___childMarkdownRemark___excerptAst'
  | 'body___childMarkdownRemark___headings'
  | 'body___childMarkdownRemark___headings___id'
  | 'body___childMarkdownRemark___headings___value'
  | 'body___childMarkdownRemark___headings___depth'
  | 'body___childMarkdownRemark___timeToRead'
  | 'body___childMarkdownRemark___tableOfContents'
  | 'body___childMarkdownRemark___wordCount___paragraphs'
  | 'body___childMarkdownRemark___wordCount___sentences'
  | 'body___childMarkdownRemark___wordCount___words'
  | 'body___childMarkdownRemark___parent___id'
  | 'body___childMarkdownRemark___parent___children'
  | 'body___childMarkdownRemark___children'
  | 'body___childMarkdownRemark___children___id'
  | 'body___childMarkdownRemark___children___children'
  | 'body___childMarkdownRemark___internal___content'
  | 'body___childMarkdownRemark___internal___contentDigest'
  | 'body___childMarkdownRemark___internal___description'
  | 'body___childMarkdownRemark___internal___fieldOwners'
  | 'body___childMarkdownRemark___internal___ignoreType'
  | 'body___childMarkdownRemark___internal___mediaType'
  | 'body___childMarkdownRemark___internal___owner'
  | 'body___childMarkdownRemark___internal___type'
  | 'content___id'
  | 'content___parent___id'
  | 'content___parent___parent___id'
  | 'content___parent___parent___children'
  | 'content___parent___children'
  | 'content___parent___children___id'
  | 'content___parent___children___children'
  | 'content___parent___internal___content'
  | 'content___parent___internal___contentDigest'
  | 'content___parent___internal___description'
  | 'content___parent___internal___fieldOwners'
  | 'content___parent___internal___ignoreType'
  | 'content___parent___internal___mediaType'
  | 'content___parent___internal___owner'
  | 'content___parent___internal___type'
  | 'content___children'
  | 'content___children___id'
  | 'content___children___parent___id'
  | 'content___children___parent___children'
  | 'content___children___children'
  | 'content___children___children___id'
  | 'content___children___children___children'
  | 'content___children___internal___content'
  | 'content___children___internal___contentDigest'
  | 'content___children___internal___description'
  | 'content___children___internal___fieldOwners'
  | 'content___children___internal___ignoreType'
  | 'content___children___internal___mediaType'
  | 'content___children___internal___owner'
  | 'content___children___internal___type'
  | 'content___internal___content'
  | 'content___internal___contentDigest'
  | 'content___internal___description'
  | 'content___internal___fieldOwners'
  | 'content___internal___ignoreType'
  | 'content___internal___mediaType'
  | 'content___internal___owner'
  | 'content___internal___type'
  | 'content___content'
  | 'content___childMarkdownRemark___id'
  | 'content___childMarkdownRemark___frontmatter___title'
  | 'content___childMarkdownRemark___excerpt'
  | 'content___childMarkdownRemark___rawMarkdownBody'
  | 'content___childMarkdownRemark___html'
  | 'content___childMarkdownRemark___htmlAst'
  | 'content___childMarkdownRemark___excerptAst'
  | 'content___childMarkdownRemark___headings'
  | 'content___childMarkdownRemark___headings___id'
  | 'content___childMarkdownRemark___headings___value'
  | 'content___childMarkdownRemark___headings___depth'
  | 'content___childMarkdownRemark___timeToRead'
  | 'content___childMarkdownRemark___tableOfContents'
  | 'content___childMarkdownRemark___wordCount___paragraphs'
  | 'content___childMarkdownRemark___wordCount___sentences'
  | 'content___childMarkdownRemark___wordCount___words'
  | 'content___childMarkdownRemark___parent___id'
  | 'content___childMarkdownRemark___parent___children'
  | 'content___childMarkdownRemark___children'
  | 'content___childMarkdownRemark___children___id'
  | 'content___childMarkdownRemark___children___children'
  | 'content___childMarkdownRemark___internal___content'
  | 'content___childMarkdownRemark___internal___contentDigest'
  | 'content___childMarkdownRemark___internal___description'
  | 'content___childMarkdownRemark___internal___fieldOwners'
  | 'content___childMarkdownRemark___internal___ignoreType'
  | 'content___childMarkdownRemark___internal___mediaType'
  | 'content___childMarkdownRemark___internal___owner'
  | 'content___childMarkdownRemark___internal___type'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'childContentfulEntryPostBodyTextNode___id'
  | 'childContentfulEntryPostBodyTextNode___parent___id'
  | 'childContentfulEntryPostBodyTextNode___parent___parent___id'
  | 'childContentfulEntryPostBodyTextNode___parent___parent___children'
  | 'childContentfulEntryPostBodyTextNode___parent___children'
  | 'childContentfulEntryPostBodyTextNode___parent___children___id'
  | 'childContentfulEntryPostBodyTextNode___parent___children___children'
  | 'childContentfulEntryPostBodyTextNode___parent___internal___content'
  | 'childContentfulEntryPostBodyTextNode___parent___internal___contentDigest'
  | 'childContentfulEntryPostBodyTextNode___parent___internal___description'
  | 'childContentfulEntryPostBodyTextNode___parent___internal___fieldOwners'
  | 'childContentfulEntryPostBodyTextNode___parent___internal___ignoreType'
  | 'childContentfulEntryPostBodyTextNode___parent___internal___mediaType'
  | 'childContentfulEntryPostBodyTextNode___parent___internal___owner'
  | 'childContentfulEntryPostBodyTextNode___parent___internal___type'
  | 'childContentfulEntryPostBodyTextNode___children'
  | 'childContentfulEntryPostBodyTextNode___children___id'
  | 'childContentfulEntryPostBodyTextNode___children___parent___id'
  | 'childContentfulEntryPostBodyTextNode___children___parent___children'
  | 'childContentfulEntryPostBodyTextNode___children___children'
  | 'childContentfulEntryPostBodyTextNode___children___children___id'
  | 'childContentfulEntryPostBodyTextNode___children___children___children'
  | 'childContentfulEntryPostBodyTextNode___children___internal___content'
  | 'childContentfulEntryPostBodyTextNode___children___internal___contentDigest'
  | 'childContentfulEntryPostBodyTextNode___children___internal___description'
  | 'childContentfulEntryPostBodyTextNode___children___internal___fieldOwners'
  | 'childContentfulEntryPostBodyTextNode___children___internal___ignoreType'
  | 'childContentfulEntryPostBodyTextNode___children___internal___mediaType'
  | 'childContentfulEntryPostBodyTextNode___children___internal___owner'
  | 'childContentfulEntryPostBodyTextNode___children___internal___type'
  | 'childContentfulEntryPostBodyTextNode___internal___content'
  | 'childContentfulEntryPostBodyTextNode___internal___contentDigest'
  | 'childContentfulEntryPostBodyTextNode___internal___description'
  | 'childContentfulEntryPostBodyTextNode___internal___fieldOwners'
  | 'childContentfulEntryPostBodyTextNode___internal___ignoreType'
  | 'childContentfulEntryPostBodyTextNode___internal___mediaType'
  | 'childContentfulEntryPostBodyTextNode___internal___owner'
  | 'childContentfulEntryPostBodyTextNode___internal___type'
  | 'childContentfulEntryPostBodyTextNode___body'
  | 'childContentfulEntryPostBodyTextNode___childMarkdownRemark___id'
  | 'childContentfulEntryPostBodyTextNode___childMarkdownRemark___frontmatter___title'
  | 'childContentfulEntryPostBodyTextNode___childMarkdownRemark___excerpt'
  | 'childContentfulEntryPostBodyTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'childContentfulEntryPostBodyTextNode___childMarkdownRemark___html'
  | 'childContentfulEntryPostBodyTextNode___childMarkdownRemark___htmlAst'
  | 'childContentfulEntryPostBodyTextNode___childMarkdownRemark___excerptAst'
  | 'childContentfulEntryPostBodyTextNode___childMarkdownRemark___headings'
  | 'childContentfulEntryPostBodyTextNode___childMarkdownRemark___headings___id'
  | 'childContentfulEntryPostBodyTextNode___childMarkdownRemark___headings___value'
  | 'childContentfulEntryPostBodyTextNode___childMarkdownRemark___headings___depth'
  | 'childContentfulEntryPostBodyTextNode___childMarkdownRemark___timeToRead'
  | 'childContentfulEntryPostBodyTextNode___childMarkdownRemark___tableOfContents'
  | 'childContentfulEntryPostBodyTextNode___childMarkdownRemark___wordCount___paragraphs'
  | 'childContentfulEntryPostBodyTextNode___childMarkdownRemark___wordCount___sentences'
  | 'childContentfulEntryPostBodyTextNode___childMarkdownRemark___wordCount___words'
  | 'childContentfulEntryPostBodyTextNode___childMarkdownRemark___parent___id'
  | 'childContentfulEntryPostBodyTextNode___childMarkdownRemark___parent___children'
  | 'childContentfulEntryPostBodyTextNode___childMarkdownRemark___children'
  | 'childContentfulEntryPostBodyTextNode___childMarkdownRemark___children___id'
  | 'childContentfulEntryPostBodyTextNode___childMarkdownRemark___children___children'
  | 'childContentfulEntryPostBodyTextNode___childMarkdownRemark___internal___content'
  | 'childContentfulEntryPostBodyTextNode___childMarkdownRemark___internal___contentDigest'
  | 'childContentfulEntryPostBodyTextNode___childMarkdownRemark___internal___description'
  | 'childContentfulEntryPostBodyTextNode___childMarkdownRemark___internal___fieldOwners'
  | 'childContentfulEntryPostBodyTextNode___childMarkdownRemark___internal___ignoreType'
  | 'childContentfulEntryPostBodyTextNode___childMarkdownRemark___internal___mediaType'
  | 'childContentfulEntryPostBodyTextNode___childMarkdownRemark___internal___owner'
  | 'childContentfulEntryPostBodyTextNode___childMarkdownRemark___internal___type'
  | 'childContentfulEntryPostContentTextNode___id'
  | 'childContentfulEntryPostContentTextNode___parent___id'
  | 'childContentfulEntryPostContentTextNode___parent___parent___id'
  | 'childContentfulEntryPostContentTextNode___parent___parent___children'
  | 'childContentfulEntryPostContentTextNode___parent___children'
  | 'childContentfulEntryPostContentTextNode___parent___children___id'
  | 'childContentfulEntryPostContentTextNode___parent___children___children'
  | 'childContentfulEntryPostContentTextNode___parent___internal___content'
  | 'childContentfulEntryPostContentTextNode___parent___internal___contentDigest'
  | 'childContentfulEntryPostContentTextNode___parent___internal___description'
  | 'childContentfulEntryPostContentTextNode___parent___internal___fieldOwners'
  | 'childContentfulEntryPostContentTextNode___parent___internal___ignoreType'
  | 'childContentfulEntryPostContentTextNode___parent___internal___mediaType'
  | 'childContentfulEntryPostContentTextNode___parent___internal___owner'
  | 'childContentfulEntryPostContentTextNode___parent___internal___type'
  | 'childContentfulEntryPostContentTextNode___children'
  | 'childContentfulEntryPostContentTextNode___children___id'
  | 'childContentfulEntryPostContentTextNode___children___parent___id'
  | 'childContentfulEntryPostContentTextNode___children___parent___children'
  | 'childContentfulEntryPostContentTextNode___children___children'
  | 'childContentfulEntryPostContentTextNode___children___children___id'
  | 'childContentfulEntryPostContentTextNode___children___children___children'
  | 'childContentfulEntryPostContentTextNode___children___internal___content'
  | 'childContentfulEntryPostContentTextNode___children___internal___contentDigest'
  | 'childContentfulEntryPostContentTextNode___children___internal___description'
  | 'childContentfulEntryPostContentTextNode___children___internal___fieldOwners'
  | 'childContentfulEntryPostContentTextNode___children___internal___ignoreType'
  | 'childContentfulEntryPostContentTextNode___children___internal___mediaType'
  | 'childContentfulEntryPostContentTextNode___children___internal___owner'
  | 'childContentfulEntryPostContentTextNode___children___internal___type'
  | 'childContentfulEntryPostContentTextNode___internal___content'
  | 'childContentfulEntryPostContentTextNode___internal___contentDigest'
  | 'childContentfulEntryPostContentTextNode___internal___description'
  | 'childContentfulEntryPostContentTextNode___internal___fieldOwners'
  | 'childContentfulEntryPostContentTextNode___internal___ignoreType'
  | 'childContentfulEntryPostContentTextNode___internal___mediaType'
  | 'childContentfulEntryPostContentTextNode___internal___owner'
  | 'childContentfulEntryPostContentTextNode___internal___type'
  | 'childContentfulEntryPostContentTextNode___content'
  | 'childContentfulEntryPostContentTextNode___childMarkdownRemark___id'
  | 'childContentfulEntryPostContentTextNode___childMarkdownRemark___frontmatter___title'
  | 'childContentfulEntryPostContentTextNode___childMarkdownRemark___excerpt'
  | 'childContentfulEntryPostContentTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'childContentfulEntryPostContentTextNode___childMarkdownRemark___html'
  | 'childContentfulEntryPostContentTextNode___childMarkdownRemark___htmlAst'
  | 'childContentfulEntryPostContentTextNode___childMarkdownRemark___excerptAst'
  | 'childContentfulEntryPostContentTextNode___childMarkdownRemark___headings'
  | 'childContentfulEntryPostContentTextNode___childMarkdownRemark___headings___id'
  | 'childContentfulEntryPostContentTextNode___childMarkdownRemark___headings___value'
  | 'childContentfulEntryPostContentTextNode___childMarkdownRemark___headings___depth'
  | 'childContentfulEntryPostContentTextNode___childMarkdownRemark___timeToRead'
  | 'childContentfulEntryPostContentTextNode___childMarkdownRemark___tableOfContents'
  | 'childContentfulEntryPostContentTextNode___childMarkdownRemark___wordCount___paragraphs'
  | 'childContentfulEntryPostContentTextNode___childMarkdownRemark___wordCount___sentences'
  | 'childContentfulEntryPostContentTextNode___childMarkdownRemark___wordCount___words'
  | 'childContentfulEntryPostContentTextNode___childMarkdownRemark___parent___id'
  | 'childContentfulEntryPostContentTextNode___childMarkdownRemark___parent___children'
  | 'childContentfulEntryPostContentTextNode___childMarkdownRemark___children'
  | 'childContentfulEntryPostContentTextNode___childMarkdownRemark___children___id'
  | 'childContentfulEntryPostContentTextNode___childMarkdownRemark___children___children'
  | 'childContentfulEntryPostContentTextNode___childMarkdownRemark___internal___content'
  | 'childContentfulEntryPostContentTextNode___childMarkdownRemark___internal___contentDigest'
  | 'childContentfulEntryPostContentTextNode___childMarkdownRemark___internal___description'
  | 'childContentfulEntryPostContentTextNode___childMarkdownRemark___internal___fieldOwners'
  | 'childContentfulEntryPostContentTextNode___childMarkdownRemark___internal___ignoreType'
  | 'childContentfulEntryPostContentTextNode___childMarkdownRemark___internal___mediaType'
  | 'childContentfulEntryPostContentTextNode___childMarkdownRemark___internal___owner'
  | 'childContentfulEntryPostContentTextNode___childMarkdownRemark___internal___type';

export type ContentfulEntryPostFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  publishDate?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  contentfulid?: Maybe<IntQueryOperatorInput>;
  author?: Maybe<ContentfulPersonFilterInput>;
  categoryId?: Maybe<ContentfulCategoryFilterListInput>;
  thumbnail?: Maybe<ContentfulAssetFilterInput>;
  body?: Maybe<ContentfulEntryPostBodyTextNodeFilterInput>;
  content?: Maybe<ContentfulEntryPostContentTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulEntryPostSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulEntryPostBodyTextNode?: Maybe<ContentfulEntryPostBodyTextNodeFilterInput>;
  childContentfulEntryPostContentTextNode?: Maybe<ContentfulEntryPostContentTextNodeFilterInput>;
};

export type ContentfulEntryPostFilterListInput = {
  elemMatch?: Maybe<ContentfulEntryPostFilterInput>;
};

export type ContentfulEntryPostGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEntryPostEdge>;
  nodes: Array<ContentfulEntryPost>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulEntryPostSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulEntryPostFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulEntryPostSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulEntryPostSysContentType>;
};

export type ContentfulEntryPostSysContentType = {
  sys?: Maybe<ContentfulEntryPostSysContentTypeSys>;
};

export type ContentfulEntryPostSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulEntryPostSysContentTypeSysFilterInput>;
};

export type ContentfulEntryPostSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulEntryPostSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulEntryPostSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulEntryPostSysContentTypeFilterInput>;
};

export type ContentfulFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulImageCropFocus = 
  | 'TOP'
  | 'TOP_LEFT'
  | 'TOP_RIGHT'
  | 'BOTTOM'
  | 'BOTTOM_RIGHT'
  | 'BOTTOM_LEFT'
  | 'RIGHT'
  | 'LEFT'
  | 'FACE'
  | 'FACES'
  | 'CENTER';

export type ContentfulImageFormat = 
  | 'NO_CHANGE'
  | 'JPG'
  | 'PNG'
  | 'WEBP';

export type ContentfulPerson = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  entry_post?: Maybe<Array<Maybe<ContentfulEntryPost>>>;
  shortBio?: Maybe<ContentfulPersonShortBioTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulPersonSys>;
  node_locale?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  image?: Maybe<ContentfulAsset>;
  childContentfulPersonShortBioTextNode?: Maybe<ContentfulPersonShortBioTextNode>;
};


export type ContentfulPersonCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulPersonUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulPersonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPersonEdge>;
  nodes: Array<ContentfulPerson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPersonGroupConnection>;
};


export type ContentfulPersonConnectionDistinctArgs = {
  field: ContentfulPersonFieldsEnum;
};


export type ContentfulPersonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPersonFieldsEnum;
};

export type ContentfulPersonEdge = {
  next?: Maybe<ContentfulPerson>;
  node: ContentfulPerson;
  previous?: Maybe<ContentfulPerson>;
};

export type ContentfulPersonFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'title'
  | 'company'
  | 'entry_post'
  | 'entry_post___id'
  | 'entry_post___parent___id'
  | 'entry_post___parent___parent___id'
  | 'entry_post___parent___parent___children'
  | 'entry_post___parent___children'
  | 'entry_post___parent___children___id'
  | 'entry_post___parent___children___children'
  | 'entry_post___parent___internal___content'
  | 'entry_post___parent___internal___contentDigest'
  | 'entry_post___parent___internal___description'
  | 'entry_post___parent___internal___fieldOwners'
  | 'entry_post___parent___internal___ignoreType'
  | 'entry_post___parent___internal___mediaType'
  | 'entry_post___parent___internal___owner'
  | 'entry_post___parent___internal___type'
  | 'entry_post___children'
  | 'entry_post___children___id'
  | 'entry_post___children___parent___id'
  | 'entry_post___children___parent___children'
  | 'entry_post___children___children'
  | 'entry_post___children___children___id'
  | 'entry_post___children___children___children'
  | 'entry_post___children___internal___content'
  | 'entry_post___children___internal___contentDigest'
  | 'entry_post___children___internal___description'
  | 'entry_post___children___internal___fieldOwners'
  | 'entry_post___children___internal___ignoreType'
  | 'entry_post___children___internal___mediaType'
  | 'entry_post___children___internal___owner'
  | 'entry_post___children___internal___type'
  | 'entry_post___internal___content'
  | 'entry_post___internal___contentDigest'
  | 'entry_post___internal___description'
  | 'entry_post___internal___fieldOwners'
  | 'entry_post___internal___ignoreType'
  | 'entry_post___internal___mediaType'
  | 'entry_post___internal___owner'
  | 'entry_post___internal___type'
  | 'entry_post___title'
  | 'entry_post___publishDate'
  | 'entry_post___tags'
  | 'entry_post___contentfulid'
  | 'entry_post___author___id'
  | 'entry_post___author___parent___id'
  | 'entry_post___author___parent___children'
  | 'entry_post___author___children'
  | 'entry_post___author___children___id'
  | 'entry_post___author___children___children'
  | 'entry_post___author___internal___content'
  | 'entry_post___author___internal___contentDigest'
  | 'entry_post___author___internal___description'
  | 'entry_post___author___internal___fieldOwners'
  | 'entry_post___author___internal___ignoreType'
  | 'entry_post___author___internal___mediaType'
  | 'entry_post___author___internal___owner'
  | 'entry_post___author___internal___type'
  | 'entry_post___author___name'
  | 'entry_post___author___title'
  | 'entry_post___author___company'
  | 'entry_post___author___entry_post'
  | 'entry_post___author___entry_post___id'
  | 'entry_post___author___entry_post___children'
  | 'entry_post___author___entry_post___title'
  | 'entry_post___author___entry_post___publishDate'
  | 'entry_post___author___entry_post___tags'
  | 'entry_post___author___entry_post___contentfulid'
  | 'entry_post___author___entry_post___categoryId'
  | 'entry_post___author___entry_post___spaceId'
  | 'entry_post___author___entry_post___contentful_id'
  | 'entry_post___author___entry_post___createdAt'
  | 'entry_post___author___entry_post___updatedAt'
  | 'entry_post___author___entry_post___node_locale'
  | 'entry_post___author___shortBio___id'
  | 'entry_post___author___shortBio___children'
  | 'entry_post___author___shortBio___shortBio'
  | 'entry_post___author___spaceId'
  | 'entry_post___author___contentful_id'
  | 'entry_post___author___createdAt'
  | 'entry_post___author___updatedAt'
  | 'entry_post___author___sys___revision'
  | 'entry_post___author___node_locale'
  | 'entry_post___author___email'
  | 'entry_post___author___phone'
  | 'entry_post___author___facebook'
  | 'entry_post___author___twitter'
  | 'entry_post___author___github'
  | 'entry_post___author___image___id'
  | 'entry_post___author___image___children'
  | 'entry_post___author___image___contentful_id'
  | 'entry_post___author___image___spaceId'
  | 'entry_post___author___image___createdAt'
  | 'entry_post___author___image___updatedAt'
  | 'entry_post___author___image___title'
  | 'entry_post___author___image___description'
  | 'entry_post___author___image___node_locale'
  | 'entry_post___author___childContentfulPersonShortBioTextNode___id'
  | 'entry_post___author___childContentfulPersonShortBioTextNode___children'
  | 'entry_post___author___childContentfulPersonShortBioTextNode___shortBio'
  | 'entry_post___categoryId'
  | 'entry_post___categoryId___id'
  | 'entry_post___categoryId___parent___id'
  | 'entry_post___categoryId___parent___children'
  | 'entry_post___categoryId___children'
  | 'entry_post___categoryId___children___id'
  | 'entry_post___categoryId___children___children'
  | 'entry_post___categoryId___internal___content'
  | 'entry_post___categoryId___internal___contentDigest'
  | 'entry_post___categoryId___internal___description'
  | 'entry_post___categoryId___internal___fieldOwners'
  | 'entry_post___categoryId___internal___ignoreType'
  | 'entry_post___categoryId___internal___mediaType'
  | 'entry_post___categoryId___internal___owner'
  | 'entry_post___categoryId___internal___type'
  | 'entry_post___categoryId___parentId'
  | 'entry_post___categoryId___name'
  | 'entry_post___categoryId___contentfulid'
  | 'entry_post___categoryId___entry_post'
  | 'entry_post___categoryId___entry_post___id'
  | 'entry_post___categoryId___entry_post___children'
  | 'entry_post___categoryId___entry_post___title'
  | 'entry_post___categoryId___entry_post___publishDate'
  | 'entry_post___categoryId___entry_post___tags'
  | 'entry_post___categoryId___entry_post___contentfulid'
  | 'entry_post___categoryId___entry_post___categoryId'
  | 'entry_post___categoryId___entry_post___spaceId'
  | 'entry_post___categoryId___entry_post___contentful_id'
  | 'entry_post___categoryId___entry_post___createdAt'
  | 'entry_post___categoryId___entry_post___updatedAt'
  | 'entry_post___categoryId___entry_post___node_locale'
  | 'entry_post___categoryId___spaceId'
  | 'entry_post___categoryId___contentful_id'
  | 'entry_post___categoryId___createdAt'
  | 'entry_post___categoryId___updatedAt'
  | 'entry_post___categoryId___sys___revision'
  | 'entry_post___categoryId___node_locale'
  | 'entry_post___thumbnail___id'
  | 'entry_post___thumbnail___parent___id'
  | 'entry_post___thumbnail___parent___children'
  | 'entry_post___thumbnail___children'
  | 'entry_post___thumbnail___children___id'
  | 'entry_post___thumbnail___children___children'
  | 'entry_post___thumbnail___internal___content'
  | 'entry_post___thumbnail___internal___contentDigest'
  | 'entry_post___thumbnail___internal___description'
  | 'entry_post___thumbnail___internal___fieldOwners'
  | 'entry_post___thumbnail___internal___ignoreType'
  | 'entry_post___thumbnail___internal___mediaType'
  | 'entry_post___thumbnail___internal___owner'
  | 'entry_post___thumbnail___internal___type'
  | 'entry_post___thumbnail___contentful_id'
  | 'entry_post___thumbnail___spaceId'
  | 'entry_post___thumbnail___createdAt'
  | 'entry_post___thumbnail___updatedAt'
  | 'entry_post___thumbnail___file___url'
  | 'entry_post___thumbnail___file___fileName'
  | 'entry_post___thumbnail___file___contentType'
  | 'entry_post___thumbnail___title'
  | 'entry_post___thumbnail___description'
  | 'entry_post___thumbnail___node_locale'
  | 'entry_post___thumbnail___sys___revision'
  | 'entry_post___thumbnail___localFile___sourceInstanceName'
  | 'entry_post___thumbnail___localFile___absolutePath'
  | 'entry_post___thumbnail___localFile___relativePath'
  | 'entry_post___thumbnail___localFile___extension'
  | 'entry_post___thumbnail___localFile___size'
  | 'entry_post___thumbnail___localFile___prettySize'
  | 'entry_post___thumbnail___localFile___modifiedTime'
  | 'entry_post___thumbnail___localFile___accessTime'
  | 'entry_post___thumbnail___localFile___changeTime'
  | 'entry_post___thumbnail___localFile___birthTime'
  | 'entry_post___thumbnail___localFile___root'
  | 'entry_post___thumbnail___localFile___dir'
  | 'entry_post___thumbnail___localFile___base'
  | 'entry_post___thumbnail___localFile___ext'
  | 'entry_post___thumbnail___localFile___name'
  | 'entry_post___thumbnail___localFile___relativeDirectory'
  | 'entry_post___thumbnail___localFile___dev'
  | 'entry_post___thumbnail___localFile___mode'
  | 'entry_post___thumbnail___localFile___nlink'
  | 'entry_post___thumbnail___localFile___uid'
  | 'entry_post___thumbnail___localFile___gid'
  | 'entry_post___thumbnail___localFile___rdev'
  | 'entry_post___thumbnail___localFile___ino'
  | 'entry_post___thumbnail___localFile___atimeMs'
  | 'entry_post___thumbnail___localFile___mtimeMs'
  | 'entry_post___thumbnail___localFile___ctimeMs'
  | 'entry_post___thumbnail___localFile___atime'
  | 'entry_post___thumbnail___localFile___mtime'
  | 'entry_post___thumbnail___localFile___ctime'
  | 'entry_post___thumbnail___localFile___birthtime'
  | 'entry_post___thumbnail___localFile___birthtimeMs'
  | 'entry_post___thumbnail___localFile___blksize'
  | 'entry_post___thumbnail___localFile___blocks'
  | 'entry_post___thumbnail___localFile___url'
  | 'entry_post___thumbnail___localFile___id'
  | 'entry_post___thumbnail___localFile___children'
  | 'entry_post___thumbnail___fixed___base64'
  | 'entry_post___thumbnail___fixed___tracedSVG'
  | 'entry_post___thumbnail___fixed___aspectRatio'
  | 'entry_post___thumbnail___fixed___width'
  | 'entry_post___thumbnail___fixed___height'
  | 'entry_post___thumbnail___fixed___src'
  | 'entry_post___thumbnail___fixed___srcSet'
  | 'entry_post___thumbnail___fixed___srcWebp'
  | 'entry_post___thumbnail___fixed___srcSetWebp'
  | 'entry_post___thumbnail___resolutions___base64'
  | 'entry_post___thumbnail___resolutions___tracedSVG'
  | 'entry_post___thumbnail___resolutions___aspectRatio'
  | 'entry_post___thumbnail___resolutions___width'
  | 'entry_post___thumbnail___resolutions___height'
  | 'entry_post___thumbnail___resolutions___src'
  | 'entry_post___thumbnail___resolutions___srcSet'
  | 'entry_post___thumbnail___resolutions___srcWebp'
  | 'entry_post___thumbnail___resolutions___srcSetWebp'
  | 'entry_post___thumbnail___fluid___base64'
  | 'entry_post___thumbnail___fluid___tracedSVG'
  | 'entry_post___thumbnail___fluid___aspectRatio'
  | 'entry_post___thumbnail___fluid___src'
  | 'entry_post___thumbnail___fluid___srcSet'
  | 'entry_post___thumbnail___fluid___srcWebp'
  | 'entry_post___thumbnail___fluid___srcSetWebp'
  | 'entry_post___thumbnail___fluid___sizes'
  | 'entry_post___thumbnail___sizes___base64'
  | 'entry_post___thumbnail___sizes___tracedSVG'
  | 'entry_post___thumbnail___sizes___aspectRatio'
  | 'entry_post___thumbnail___sizes___src'
  | 'entry_post___thumbnail___sizes___srcSet'
  | 'entry_post___thumbnail___sizes___srcWebp'
  | 'entry_post___thumbnail___sizes___srcSetWebp'
  | 'entry_post___thumbnail___sizes___sizes'
  | 'entry_post___thumbnail___resize___base64'
  | 'entry_post___thumbnail___resize___tracedSVG'
  | 'entry_post___thumbnail___resize___src'
  | 'entry_post___thumbnail___resize___width'
  | 'entry_post___thumbnail___resize___height'
  | 'entry_post___thumbnail___resize___aspectRatio'
  | 'entry_post___body___id'
  | 'entry_post___body___parent___id'
  | 'entry_post___body___parent___children'
  | 'entry_post___body___children'
  | 'entry_post___body___children___id'
  | 'entry_post___body___children___children'
  | 'entry_post___body___internal___content'
  | 'entry_post___body___internal___contentDigest'
  | 'entry_post___body___internal___description'
  | 'entry_post___body___internal___fieldOwners'
  | 'entry_post___body___internal___ignoreType'
  | 'entry_post___body___internal___mediaType'
  | 'entry_post___body___internal___owner'
  | 'entry_post___body___internal___type'
  | 'entry_post___body___body'
  | 'entry_post___body___childMarkdownRemark___id'
  | 'entry_post___body___childMarkdownRemark___excerpt'
  | 'entry_post___body___childMarkdownRemark___rawMarkdownBody'
  | 'entry_post___body___childMarkdownRemark___html'
  | 'entry_post___body___childMarkdownRemark___htmlAst'
  | 'entry_post___body___childMarkdownRemark___excerptAst'
  | 'entry_post___body___childMarkdownRemark___headings'
  | 'entry_post___body___childMarkdownRemark___timeToRead'
  | 'entry_post___body___childMarkdownRemark___tableOfContents'
  | 'entry_post___body___childMarkdownRemark___children'
  | 'entry_post___content___id'
  | 'entry_post___content___parent___id'
  | 'entry_post___content___parent___children'
  | 'entry_post___content___children'
  | 'entry_post___content___children___id'
  | 'entry_post___content___children___children'
  | 'entry_post___content___internal___content'
  | 'entry_post___content___internal___contentDigest'
  | 'entry_post___content___internal___description'
  | 'entry_post___content___internal___fieldOwners'
  | 'entry_post___content___internal___ignoreType'
  | 'entry_post___content___internal___mediaType'
  | 'entry_post___content___internal___owner'
  | 'entry_post___content___internal___type'
  | 'entry_post___content___content'
  | 'entry_post___content___childMarkdownRemark___id'
  | 'entry_post___content___childMarkdownRemark___excerpt'
  | 'entry_post___content___childMarkdownRemark___rawMarkdownBody'
  | 'entry_post___content___childMarkdownRemark___html'
  | 'entry_post___content___childMarkdownRemark___htmlAst'
  | 'entry_post___content___childMarkdownRemark___excerptAst'
  | 'entry_post___content___childMarkdownRemark___headings'
  | 'entry_post___content___childMarkdownRemark___timeToRead'
  | 'entry_post___content___childMarkdownRemark___tableOfContents'
  | 'entry_post___content___childMarkdownRemark___children'
  | 'entry_post___spaceId'
  | 'entry_post___contentful_id'
  | 'entry_post___createdAt'
  | 'entry_post___updatedAt'
  | 'entry_post___sys___revision'
  | 'entry_post___node_locale'
  | 'entry_post___childContentfulEntryPostBodyTextNode___id'
  | 'entry_post___childContentfulEntryPostBodyTextNode___parent___id'
  | 'entry_post___childContentfulEntryPostBodyTextNode___parent___children'
  | 'entry_post___childContentfulEntryPostBodyTextNode___children'
  | 'entry_post___childContentfulEntryPostBodyTextNode___children___id'
  | 'entry_post___childContentfulEntryPostBodyTextNode___children___children'
  | 'entry_post___childContentfulEntryPostBodyTextNode___internal___content'
  | 'entry_post___childContentfulEntryPostBodyTextNode___internal___contentDigest'
  | 'entry_post___childContentfulEntryPostBodyTextNode___internal___description'
  | 'entry_post___childContentfulEntryPostBodyTextNode___internal___fieldOwners'
  | 'entry_post___childContentfulEntryPostBodyTextNode___internal___ignoreType'
  | 'entry_post___childContentfulEntryPostBodyTextNode___internal___mediaType'
  | 'entry_post___childContentfulEntryPostBodyTextNode___internal___owner'
  | 'entry_post___childContentfulEntryPostBodyTextNode___internal___type'
  | 'entry_post___childContentfulEntryPostBodyTextNode___body'
  | 'entry_post___childContentfulEntryPostBodyTextNode___childMarkdownRemark___id'
  | 'entry_post___childContentfulEntryPostBodyTextNode___childMarkdownRemark___excerpt'
  | 'entry_post___childContentfulEntryPostBodyTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'entry_post___childContentfulEntryPostBodyTextNode___childMarkdownRemark___html'
  | 'entry_post___childContentfulEntryPostBodyTextNode___childMarkdownRemark___htmlAst'
  | 'entry_post___childContentfulEntryPostBodyTextNode___childMarkdownRemark___excerptAst'
  | 'entry_post___childContentfulEntryPostBodyTextNode___childMarkdownRemark___headings'
  | 'entry_post___childContentfulEntryPostBodyTextNode___childMarkdownRemark___timeToRead'
  | 'entry_post___childContentfulEntryPostBodyTextNode___childMarkdownRemark___tableOfContents'
  | 'entry_post___childContentfulEntryPostBodyTextNode___childMarkdownRemark___children'
  | 'entry_post___childContentfulEntryPostContentTextNode___id'
  | 'entry_post___childContentfulEntryPostContentTextNode___parent___id'
  | 'entry_post___childContentfulEntryPostContentTextNode___parent___children'
  | 'entry_post___childContentfulEntryPostContentTextNode___children'
  | 'entry_post___childContentfulEntryPostContentTextNode___children___id'
  | 'entry_post___childContentfulEntryPostContentTextNode___children___children'
  | 'entry_post___childContentfulEntryPostContentTextNode___internal___content'
  | 'entry_post___childContentfulEntryPostContentTextNode___internal___contentDigest'
  | 'entry_post___childContentfulEntryPostContentTextNode___internal___description'
  | 'entry_post___childContentfulEntryPostContentTextNode___internal___fieldOwners'
  | 'entry_post___childContentfulEntryPostContentTextNode___internal___ignoreType'
  | 'entry_post___childContentfulEntryPostContentTextNode___internal___mediaType'
  | 'entry_post___childContentfulEntryPostContentTextNode___internal___owner'
  | 'entry_post___childContentfulEntryPostContentTextNode___internal___type'
  | 'entry_post___childContentfulEntryPostContentTextNode___content'
  | 'entry_post___childContentfulEntryPostContentTextNode___childMarkdownRemark___id'
  | 'entry_post___childContentfulEntryPostContentTextNode___childMarkdownRemark___excerpt'
  | 'entry_post___childContentfulEntryPostContentTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'entry_post___childContentfulEntryPostContentTextNode___childMarkdownRemark___html'
  | 'entry_post___childContentfulEntryPostContentTextNode___childMarkdownRemark___htmlAst'
  | 'entry_post___childContentfulEntryPostContentTextNode___childMarkdownRemark___excerptAst'
  | 'entry_post___childContentfulEntryPostContentTextNode___childMarkdownRemark___headings'
  | 'entry_post___childContentfulEntryPostContentTextNode___childMarkdownRemark___timeToRead'
  | 'entry_post___childContentfulEntryPostContentTextNode___childMarkdownRemark___tableOfContents'
  | 'entry_post___childContentfulEntryPostContentTextNode___childMarkdownRemark___children'
  | 'shortBio___id'
  | 'shortBio___parent___id'
  | 'shortBio___parent___parent___id'
  | 'shortBio___parent___parent___children'
  | 'shortBio___parent___children'
  | 'shortBio___parent___children___id'
  | 'shortBio___parent___children___children'
  | 'shortBio___parent___internal___content'
  | 'shortBio___parent___internal___contentDigest'
  | 'shortBio___parent___internal___description'
  | 'shortBio___parent___internal___fieldOwners'
  | 'shortBio___parent___internal___ignoreType'
  | 'shortBio___parent___internal___mediaType'
  | 'shortBio___parent___internal___owner'
  | 'shortBio___parent___internal___type'
  | 'shortBio___children'
  | 'shortBio___children___id'
  | 'shortBio___children___parent___id'
  | 'shortBio___children___parent___children'
  | 'shortBio___children___children'
  | 'shortBio___children___children___id'
  | 'shortBio___children___children___children'
  | 'shortBio___children___internal___content'
  | 'shortBio___children___internal___contentDigest'
  | 'shortBio___children___internal___description'
  | 'shortBio___children___internal___fieldOwners'
  | 'shortBio___children___internal___ignoreType'
  | 'shortBio___children___internal___mediaType'
  | 'shortBio___children___internal___owner'
  | 'shortBio___children___internal___type'
  | 'shortBio___internal___content'
  | 'shortBio___internal___contentDigest'
  | 'shortBio___internal___description'
  | 'shortBio___internal___fieldOwners'
  | 'shortBio___internal___ignoreType'
  | 'shortBio___internal___mediaType'
  | 'shortBio___internal___owner'
  | 'shortBio___internal___type'
  | 'shortBio___shortBio'
  | 'shortBio___childMarkdownRemark___id'
  | 'shortBio___childMarkdownRemark___frontmatter___title'
  | 'shortBio___childMarkdownRemark___excerpt'
  | 'shortBio___childMarkdownRemark___rawMarkdownBody'
  | 'shortBio___childMarkdownRemark___html'
  | 'shortBio___childMarkdownRemark___htmlAst'
  | 'shortBio___childMarkdownRemark___excerptAst'
  | 'shortBio___childMarkdownRemark___headings'
  | 'shortBio___childMarkdownRemark___headings___id'
  | 'shortBio___childMarkdownRemark___headings___value'
  | 'shortBio___childMarkdownRemark___headings___depth'
  | 'shortBio___childMarkdownRemark___timeToRead'
  | 'shortBio___childMarkdownRemark___tableOfContents'
  | 'shortBio___childMarkdownRemark___wordCount___paragraphs'
  | 'shortBio___childMarkdownRemark___wordCount___sentences'
  | 'shortBio___childMarkdownRemark___wordCount___words'
  | 'shortBio___childMarkdownRemark___parent___id'
  | 'shortBio___childMarkdownRemark___parent___children'
  | 'shortBio___childMarkdownRemark___children'
  | 'shortBio___childMarkdownRemark___children___id'
  | 'shortBio___childMarkdownRemark___children___children'
  | 'shortBio___childMarkdownRemark___internal___content'
  | 'shortBio___childMarkdownRemark___internal___contentDigest'
  | 'shortBio___childMarkdownRemark___internal___description'
  | 'shortBio___childMarkdownRemark___internal___fieldOwners'
  | 'shortBio___childMarkdownRemark___internal___ignoreType'
  | 'shortBio___childMarkdownRemark___internal___mediaType'
  | 'shortBio___childMarkdownRemark___internal___owner'
  | 'shortBio___childMarkdownRemark___internal___type'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'email'
  | 'phone'
  | 'facebook'
  | 'twitter'
  | 'github'
  | 'image___id'
  | 'image___parent___id'
  | 'image___parent___parent___id'
  | 'image___parent___parent___children'
  | 'image___parent___children'
  | 'image___parent___children___id'
  | 'image___parent___children___children'
  | 'image___parent___internal___content'
  | 'image___parent___internal___contentDigest'
  | 'image___parent___internal___description'
  | 'image___parent___internal___fieldOwners'
  | 'image___parent___internal___ignoreType'
  | 'image___parent___internal___mediaType'
  | 'image___parent___internal___owner'
  | 'image___parent___internal___type'
  | 'image___children'
  | 'image___children___id'
  | 'image___children___parent___id'
  | 'image___children___parent___children'
  | 'image___children___children'
  | 'image___children___children___id'
  | 'image___children___children___children'
  | 'image___children___internal___content'
  | 'image___children___internal___contentDigest'
  | 'image___children___internal___description'
  | 'image___children___internal___fieldOwners'
  | 'image___children___internal___ignoreType'
  | 'image___children___internal___mediaType'
  | 'image___children___internal___owner'
  | 'image___children___internal___type'
  | 'image___internal___content'
  | 'image___internal___contentDigest'
  | 'image___internal___description'
  | 'image___internal___fieldOwners'
  | 'image___internal___ignoreType'
  | 'image___internal___mediaType'
  | 'image___internal___owner'
  | 'image___internal___type'
  | 'image___contentful_id'
  | 'image___spaceId'
  | 'image___createdAt'
  | 'image___updatedAt'
  | 'image___file___url'
  | 'image___file___details___size'
  | 'image___file___fileName'
  | 'image___file___contentType'
  | 'image___title'
  | 'image___description'
  | 'image___node_locale'
  | 'image___sys___revision'
  | 'image___localFile___sourceInstanceName'
  | 'image___localFile___absolutePath'
  | 'image___localFile___relativePath'
  | 'image___localFile___extension'
  | 'image___localFile___size'
  | 'image___localFile___prettySize'
  | 'image___localFile___modifiedTime'
  | 'image___localFile___accessTime'
  | 'image___localFile___changeTime'
  | 'image___localFile___birthTime'
  | 'image___localFile___root'
  | 'image___localFile___dir'
  | 'image___localFile___base'
  | 'image___localFile___ext'
  | 'image___localFile___name'
  | 'image___localFile___relativeDirectory'
  | 'image___localFile___dev'
  | 'image___localFile___mode'
  | 'image___localFile___nlink'
  | 'image___localFile___uid'
  | 'image___localFile___gid'
  | 'image___localFile___rdev'
  | 'image___localFile___ino'
  | 'image___localFile___atimeMs'
  | 'image___localFile___mtimeMs'
  | 'image___localFile___ctimeMs'
  | 'image___localFile___atime'
  | 'image___localFile___mtime'
  | 'image___localFile___ctime'
  | 'image___localFile___birthtime'
  | 'image___localFile___birthtimeMs'
  | 'image___localFile___blksize'
  | 'image___localFile___blocks'
  | 'image___localFile___url'
  | 'image___localFile___id'
  | 'image___localFile___parent___id'
  | 'image___localFile___parent___children'
  | 'image___localFile___children'
  | 'image___localFile___children___id'
  | 'image___localFile___children___children'
  | 'image___localFile___internal___content'
  | 'image___localFile___internal___contentDigest'
  | 'image___localFile___internal___description'
  | 'image___localFile___internal___fieldOwners'
  | 'image___localFile___internal___ignoreType'
  | 'image___localFile___internal___mediaType'
  | 'image___localFile___internal___owner'
  | 'image___localFile___internal___type'
  | 'image___fixed___base64'
  | 'image___fixed___tracedSVG'
  | 'image___fixed___aspectRatio'
  | 'image___fixed___width'
  | 'image___fixed___height'
  | 'image___fixed___src'
  | 'image___fixed___srcSet'
  | 'image___fixed___srcWebp'
  | 'image___fixed___srcSetWebp'
  | 'image___resolutions___base64'
  | 'image___resolutions___tracedSVG'
  | 'image___resolutions___aspectRatio'
  | 'image___resolutions___width'
  | 'image___resolutions___height'
  | 'image___resolutions___src'
  | 'image___resolutions___srcSet'
  | 'image___resolutions___srcWebp'
  | 'image___resolutions___srcSetWebp'
  | 'image___fluid___base64'
  | 'image___fluid___tracedSVG'
  | 'image___fluid___aspectRatio'
  | 'image___fluid___src'
  | 'image___fluid___srcSet'
  | 'image___fluid___srcWebp'
  | 'image___fluid___srcSetWebp'
  | 'image___fluid___sizes'
  | 'image___sizes___base64'
  | 'image___sizes___tracedSVG'
  | 'image___sizes___aspectRatio'
  | 'image___sizes___src'
  | 'image___sizes___srcSet'
  | 'image___sizes___srcWebp'
  | 'image___sizes___srcSetWebp'
  | 'image___sizes___sizes'
  | 'image___resize___base64'
  | 'image___resize___tracedSVG'
  | 'image___resize___src'
  | 'image___resize___width'
  | 'image___resize___height'
  | 'image___resize___aspectRatio'
  | 'childContentfulPersonShortBioTextNode___id'
  | 'childContentfulPersonShortBioTextNode___parent___id'
  | 'childContentfulPersonShortBioTextNode___parent___parent___id'
  | 'childContentfulPersonShortBioTextNode___parent___parent___children'
  | 'childContentfulPersonShortBioTextNode___parent___children'
  | 'childContentfulPersonShortBioTextNode___parent___children___id'
  | 'childContentfulPersonShortBioTextNode___parent___children___children'
  | 'childContentfulPersonShortBioTextNode___parent___internal___content'
  | 'childContentfulPersonShortBioTextNode___parent___internal___contentDigest'
  | 'childContentfulPersonShortBioTextNode___parent___internal___description'
  | 'childContentfulPersonShortBioTextNode___parent___internal___fieldOwners'
  | 'childContentfulPersonShortBioTextNode___parent___internal___ignoreType'
  | 'childContentfulPersonShortBioTextNode___parent___internal___mediaType'
  | 'childContentfulPersonShortBioTextNode___parent___internal___owner'
  | 'childContentfulPersonShortBioTextNode___parent___internal___type'
  | 'childContentfulPersonShortBioTextNode___children'
  | 'childContentfulPersonShortBioTextNode___children___id'
  | 'childContentfulPersonShortBioTextNode___children___parent___id'
  | 'childContentfulPersonShortBioTextNode___children___parent___children'
  | 'childContentfulPersonShortBioTextNode___children___children'
  | 'childContentfulPersonShortBioTextNode___children___children___id'
  | 'childContentfulPersonShortBioTextNode___children___children___children'
  | 'childContentfulPersonShortBioTextNode___children___internal___content'
  | 'childContentfulPersonShortBioTextNode___children___internal___contentDigest'
  | 'childContentfulPersonShortBioTextNode___children___internal___description'
  | 'childContentfulPersonShortBioTextNode___children___internal___fieldOwners'
  | 'childContentfulPersonShortBioTextNode___children___internal___ignoreType'
  | 'childContentfulPersonShortBioTextNode___children___internal___mediaType'
  | 'childContentfulPersonShortBioTextNode___children___internal___owner'
  | 'childContentfulPersonShortBioTextNode___children___internal___type'
  | 'childContentfulPersonShortBioTextNode___internal___content'
  | 'childContentfulPersonShortBioTextNode___internal___contentDigest'
  | 'childContentfulPersonShortBioTextNode___internal___description'
  | 'childContentfulPersonShortBioTextNode___internal___fieldOwners'
  | 'childContentfulPersonShortBioTextNode___internal___ignoreType'
  | 'childContentfulPersonShortBioTextNode___internal___mediaType'
  | 'childContentfulPersonShortBioTextNode___internal___owner'
  | 'childContentfulPersonShortBioTextNode___internal___type'
  | 'childContentfulPersonShortBioTextNode___shortBio'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___id'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___frontmatter___title'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___excerpt'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___html'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___htmlAst'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___excerptAst'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___headings'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___headings___id'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___headings___value'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___headings___depth'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___timeToRead'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___tableOfContents'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___wordCount___paragraphs'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___wordCount___sentences'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___wordCount___words'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___parent___id'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___parent___children'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___children'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___children___id'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___children___children'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___content'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___contentDigest'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___description'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___fieldOwners'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___ignoreType'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___mediaType'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___owner'
  | 'childContentfulPersonShortBioTextNode___childMarkdownRemark___internal___type';

export type ContentfulPersonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  company?: Maybe<StringQueryOperatorInput>;
  entry_post?: Maybe<ContentfulEntryPostFilterListInput>;
  shortBio?: Maybe<ContentfulPersonShortBioTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPersonSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  phone?: Maybe<StringQueryOperatorInput>;
  facebook?: Maybe<StringQueryOperatorInput>;
  twitter?: Maybe<StringQueryOperatorInput>;
  github?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFilterInput>;
  childContentfulPersonShortBioTextNode?: Maybe<ContentfulPersonShortBioTextNodeFilterInput>;
};

export type ContentfulPersonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPersonEdge>;
  nodes: Array<ContentfulPerson>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPersonShortBioTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  shortBio?: Maybe<Scalars['String']>;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulPersonShortBioTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPersonShortBioTextNodeEdge>;
  nodes: Array<ContentfulPersonShortBioTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPersonShortBioTextNodeGroupConnection>;
};


export type ContentfulPersonShortBioTextNodeConnectionDistinctArgs = {
  field: ContentfulPersonShortBioTextNodeFieldsEnum;
};


export type ContentfulPersonShortBioTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPersonShortBioTextNodeFieldsEnum;
};

export type ContentfulPersonShortBioTextNodeEdge = {
  next?: Maybe<ContentfulPersonShortBioTextNode>;
  node: ContentfulPersonShortBioTextNode;
  previous?: Maybe<ContentfulPersonShortBioTextNode>;
};

export type ContentfulPersonShortBioTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'shortBio'
  | 'childMarkdownRemark___id'
  | 'childMarkdownRemark___frontmatter___title'
  | 'childMarkdownRemark___excerpt'
  | 'childMarkdownRemark___rawMarkdownBody'
  | 'childMarkdownRemark___html'
  | 'childMarkdownRemark___htmlAst'
  | 'childMarkdownRemark___excerptAst'
  | 'childMarkdownRemark___headings'
  | 'childMarkdownRemark___headings___id'
  | 'childMarkdownRemark___headings___value'
  | 'childMarkdownRemark___headings___depth'
  | 'childMarkdownRemark___timeToRead'
  | 'childMarkdownRemark___tableOfContents'
  | 'childMarkdownRemark___wordCount___paragraphs'
  | 'childMarkdownRemark___wordCount___sentences'
  | 'childMarkdownRemark___wordCount___words'
  | 'childMarkdownRemark___parent___id'
  | 'childMarkdownRemark___parent___parent___id'
  | 'childMarkdownRemark___parent___parent___children'
  | 'childMarkdownRemark___parent___children'
  | 'childMarkdownRemark___parent___children___id'
  | 'childMarkdownRemark___parent___children___children'
  | 'childMarkdownRemark___parent___internal___content'
  | 'childMarkdownRemark___parent___internal___contentDigest'
  | 'childMarkdownRemark___parent___internal___description'
  | 'childMarkdownRemark___parent___internal___fieldOwners'
  | 'childMarkdownRemark___parent___internal___ignoreType'
  | 'childMarkdownRemark___parent___internal___mediaType'
  | 'childMarkdownRemark___parent___internal___owner'
  | 'childMarkdownRemark___parent___internal___type'
  | 'childMarkdownRemark___children'
  | 'childMarkdownRemark___children___id'
  | 'childMarkdownRemark___children___parent___id'
  | 'childMarkdownRemark___children___parent___children'
  | 'childMarkdownRemark___children___children'
  | 'childMarkdownRemark___children___children___id'
  | 'childMarkdownRemark___children___children___children'
  | 'childMarkdownRemark___children___internal___content'
  | 'childMarkdownRemark___children___internal___contentDigest'
  | 'childMarkdownRemark___children___internal___description'
  | 'childMarkdownRemark___children___internal___fieldOwners'
  | 'childMarkdownRemark___children___internal___ignoreType'
  | 'childMarkdownRemark___children___internal___mediaType'
  | 'childMarkdownRemark___children___internal___owner'
  | 'childMarkdownRemark___children___internal___type'
  | 'childMarkdownRemark___internal___content'
  | 'childMarkdownRemark___internal___contentDigest'
  | 'childMarkdownRemark___internal___description'
  | 'childMarkdownRemark___internal___fieldOwners'
  | 'childMarkdownRemark___internal___ignoreType'
  | 'childMarkdownRemark___internal___mediaType'
  | 'childMarkdownRemark___internal___owner'
  | 'childMarkdownRemark___internal___type';

export type ContentfulPersonShortBioTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  shortBio?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type ContentfulPersonShortBioTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPersonShortBioTextNodeEdge>;
  nodes: Array<ContentfulPersonShortBioTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPersonShortBioTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPersonShortBioTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPersonSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPersonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPersonSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulPersonSysContentType>;
};

export type ContentfulPersonSysContentType = {
  sys?: Maybe<ContentfulPersonSysContentTypeSys>;
};

export type ContentfulPersonSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulPersonSysContentTypeSysFilterInput>;
};

export type ContentfulPersonSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulPersonSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPersonSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulPersonSysContentTypeFilterInput>;
};

export type ContentfulResize = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type ContentfulResizeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type ContentfulResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSiteInformation = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  siteName?: Maybe<Scalars['String']>;
  siteDescription?: Maybe<Scalars['String']>;
  menus?: Maybe<Array<Maybe<Scalars['String']>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulSiteInformationSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulSiteInformationCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulSiteInformationUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulSiteInformationConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSiteInformationEdge>;
  nodes: Array<ContentfulSiteInformation>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulSiteInformationGroupConnection>;
};


export type ContentfulSiteInformationConnectionDistinctArgs = {
  field: ContentfulSiteInformationFieldsEnum;
};


export type ContentfulSiteInformationConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulSiteInformationFieldsEnum;
};

export type ContentfulSiteInformationEdge = {
  next?: Maybe<ContentfulSiteInformation>;
  node: ContentfulSiteInformation;
  previous?: Maybe<ContentfulSiteInformation>;
};

export type ContentfulSiteInformationFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'siteName'
  | 'siteDescription'
  | 'menus'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale';

export type ContentfulSiteInformationFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  siteName?: Maybe<StringQueryOperatorInput>;
  siteDescription?: Maybe<StringQueryOperatorInput>;
  menus?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSiteInformationSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSiteInformationGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSiteInformationEdge>;
  nodes: Array<ContentfulSiteInformation>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulSiteInformationSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulSiteInformationFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulSiteInformationSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulSiteInformationSysContentType>;
};

export type ContentfulSiteInformationSysContentType = {
  sys?: Maybe<ContentfulSiteInformationSysContentTypeSys>;
};

export type ContentfulSiteInformationSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulSiteInformationSysContentTypeSysFilterInput>;
};

export type ContentfulSiteInformationSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulSiteInformationSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSiteInformationSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulSiteInformationSysContentTypeFilterInput>;
};

export type ContentfulSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'url'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ImageResizingBehavior = 
  | 'NO_CHANGE'
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  | 'PAD'
  /** Crop a part of the original image to match the specified size. */
  | 'CROP'
  /**
   * Crop the image to the specified dimensions, if the original image is smaller
   * than these dimensions, then the image will be upscaled.
   */
  | 'FILL'
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  | 'THUMB'
  /** Scale the image regardless of the original aspect ratio. */
  | 'SCALE';

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type MarkdownExcerptFormats = 
  | 'PLAIN'
  | 'HTML'
  | 'MARKDOWN';

export type MarkdownHeading = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>;
};

export type MarkdownHeadingLevels = 
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type MarkdownRemark = Node & {
  id: Scalars['ID'];
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
  excerpt?: Maybe<Scalars['String']>;
  rawMarkdownBody?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead?: Maybe<Scalars['Int']>;
  tableOfContents?: Maybe<Scalars['String']>;
  wordCount?: Maybe<MarkdownWordCount>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MarkdownRemarkGroupConnection>;
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export type MarkdownRemarkFieldsEnum = 
  | 'id'
  | 'frontmatter___title'
  | 'excerpt'
  | 'rawMarkdownBody'
  | 'html'
  | 'htmlAst'
  | 'excerptAst'
  | 'headings'
  | 'headings___id'
  | 'headings___value'
  | 'headings___depth'
  | 'timeToRead'
  | 'tableOfContents'
  | 'wordCount___paragraphs'
  | 'wordCount___sentences'
  | 'wordCount___words'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkFrontmatter = {
  title?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  markdownRemark?: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  contentfulAsset?: Maybe<ContentfulAsset>;
  allContentfulAsset: ContentfulAssetConnection;
  contentfulSiteInformation?: Maybe<ContentfulSiteInformation>;
  allContentfulSiteInformation: ContentfulSiteInformationConnection;
  contentfulEntryPostContentTextNode?: Maybe<ContentfulEntryPostContentTextNode>;
  allContentfulEntryPostContentTextNode: ContentfulEntryPostContentTextNodeConnection;
  contentfulEntryPostBodyTextNode?: Maybe<ContentfulEntryPostBodyTextNode>;
  allContentfulEntryPostBodyTextNode: ContentfulEntryPostBodyTextNodeConnection;
  contentfulEntryPost?: Maybe<ContentfulEntryPost>;
  allContentfulEntryPost: ContentfulEntryPostConnection;
  contentfulCategory?: Maybe<ContentfulCategory>;
  allContentfulCategory: ContentfulCategoryConnection;
  contentfulPersonShortBioTextNode?: Maybe<ContentfulPersonShortBioTextNode>;
  allContentfulPersonShortBioTextNode: ContentfulPersonShortBioTextNodeConnection;
  contentfulPerson?: Maybe<ContentfulPerson>;
  allContentfulPerson: ContentfulPersonConnection;
  contentfulContentType?: Maybe<ContentfulContentType>;
  allContentfulContentType: ContentfulContentTypeConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>;
  sort?: Maybe<MarkdownRemarkSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAssetArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulAssetSysFilterInput>;
  localFile?: Maybe<FileFilterInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
};


export type QueryAllContentfulAssetArgs = {
  filter?: Maybe<ContentfulAssetFilterInput>;
  sort?: Maybe<ContentfulAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulSiteInformationArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  siteName?: Maybe<StringQueryOperatorInput>;
  siteDescription?: Maybe<StringQueryOperatorInput>;
  menus?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSiteInformationSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulSiteInformationArgs = {
  filter?: Maybe<ContentfulSiteInformationFilterInput>;
  sort?: Maybe<ContentfulSiteInformationSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulEntryPostContentTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulEntryPostContentTextNodeArgs = {
  filter?: Maybe<ContentfulEntryPostContentTextNodeFilterInput>;
  sort?: Maybe<ContentfulEntryPostContentTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulEntryPostBodyTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  body?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulEntryPostBodyTextNodeArgs = {
  filter?: Maybe<ContentfulEntryPostBodyTextNodeFilterInput>;
  sort?: Maybe<ContentfulEntryPostBodyTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulEntryPostArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  publishDate?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  contentfulid?: Maybe<IntQueryOperatorInput>;
  author?: Maybe<ContentfulPersonFilterInput>;
  categoryId?: Maybe<ContentfulCategoryFilterListInput>;
  thumbnail?: Maybe<ContentfulAssetFilterInput>;
  body?: Maybe<ContentfulEntryPostBodyTextNodeFilterInput>;
  content?: Maybe<ContentfulEntryPostContentTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulEntryPostSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulEntryPostBodyTextNode?: Maybe<ContentfulEntryPostBodyTextNodeFilterInput>;
  childContentfulEntryPostContentTextNode?: Maybe<ContentfulEntryPostContentTextNodeFilterInput>;
};


export type QueryAllContentfulEntryPostArgs = {
  filter?: Maybe<ContentfulEntryPostFilterInput>;
  sort?: Maybe<ContentfulEntryPostSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulCategoryArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  parentId?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  contentfulid?: Maybe<IntQueryOperatorInput>;
  entry_post?: Maybe<ContentfulEntryPostFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulCategorySysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulCategoryArgs = {
  filter?: Maybe<ContentfulCategoryFilterInput>;
  sort?: Maybe<ContentfulCategorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPersonShortBioTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  shortBio?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulPersonShortBioTextNodeArgs = {
  filter?: Maybe<ContentfulPersonShortBioTextNodeFilterInput>;
  sort?: Maybe<ContentfulPersonShortBioTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPersonArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  company?: Maybe<StringQueryOperatorInput>;
  entry_post?: Maybe<ContentfulEntryPostFilterListInput>;
  shortBio?: Maybe<ContentfulPersonShortBioTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPersonSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  phone?: Maybe<StringQueryOperatorInput>;
  facebook?: Maybe<StringQueryOperatorInput>;
  twitter?: Maybe<StringQueryOperatorInput>;
  github?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFilterInput>;
  childContentfulPersonShortBioTextNode?: Maybe<ContentfulPersonShortBioTextNodeFilterInput>;
};


export type QueryAllContentfulPersonArgs = {
  filter?: Maybe<ContentfulPersonFilterInput>;
  sort?: Maybe<ContentfulPersonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulContentTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulContentTypeArgs = {
  filter?: Maybe<ContentfulContentTypeFilterInput>;
  sort?: Maybe<ContentfulContentTypeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum = 
  | 'buildTime'
  | 'siteMetadata___title'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum = 
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___pathToConfigModule'
  | 'pluginCreator___pluginOptions___spaceId'
  | 'pluginCreator___pluginOptions___accessToken'
  | 'pluginCreator___pluginOptions___downloadLocal'
  | 'pluginCreator___pluginOptions___fileName'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___pathToConfigModule'
  | 'pluginOptions___spaceId'
  | 'pluginOptions___accessToken'
  | 'pluginOptions___downloadLocal'
  | 'pluginOptions___fileName'
  | 'pluginOptions___path'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  pathToConfigModule?: Maybe<Scalars['String']>;
  spaceId?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  downloadLocal?: Maybe<Scalars['Boolean']>;
  fileName?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  pathToConfigModule?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  accessToken?: Maybe<StringQueryOperatorInput>;
  downloadLocal?: Maybe<BooleanQueryOperatorInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum = 
  | 'ASC'
  | 'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type IndexPageQueryVariables = Exact<{ [key: string]: never; }>;


export type IndexPageQuery = { allContentfulEntryPost: { edges: Array<{ node: (
        Pick<ContentfulEntryPost, 'id' | 'publishDate' | 'contentfulid' | 'title'>
        & { body?: Maybe<Pick<ContentfulEntryPostBodyTextNode, 'id' | 'body'>>, content?: Maybe<{ childMarkdownRemark?: Maybe<Pick<MarkdownRemark, 'excerpt' | 'timeToRead'>> }> }
      ) }> } };

export type GatsbyContentfulFixedFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_TracedSvgFragment = Pick<ContentfulFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_NoBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_WithWebpFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulFixed_WithWebp_NoBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulFluidFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_TracedSvgFragment = Pick<ContentfulFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_NoBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_WithWebpFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulFluid_WithWebp_NoBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulResolutionsFragment = Pick<ContentfulResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_TracedSvgFragment = Pick<ContentfulResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_NoBase64Fragment = Pick<ContentfulResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_WithWebpFragment = Pick<ContentfulResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulResolutions_WithWebp_NoBase64Fragment = Pick<ContentfulResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulSizesFragment = Pick<ContentfulSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_TracedSvgFragment = Pick<ContentfulSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_NoBase64Fragment = Pick<ContentfulSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_WithWebpFragment = Pick<ContentfulSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulSizes_WithWebp_NoBase64Fragment = Pick<ContentfulSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;
