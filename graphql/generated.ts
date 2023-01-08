import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Collection = {
  __typename?: 'Collection';
  createdBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  schema?: Maybe<ComponentSchema>;
  system?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ComponentSchema = {
  __typename?: 'ComponentSchema';
  fields?: Maybe<Array<Maybe<ComponentSchemaField>>>;
};

export type ComponentSchemaField = {
  __typename?: 'ComponentSchemaField';
  Options?: Maybe<ComponentSchemaOptions>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
  unique?: Maybe<Scalars['Boolean']>;
};

export type ComponentSchemaFieldOptionMinMax = {
  __typename?: 'ComponentSchemaFieldOptionMinMax';
  value?: Maybe<Scalars['Int']>;
};

export type ComponentSchemaFieldOptionText = {
  __typename?: 'ComponentSchemaFieldOptionText';
  max?: Maybe<ComponentSchemaFieldOptionMinMax>;
  min?: Maybe<ComponentSchemaFieldOptionMinMax>;
};

export type ComponentSchemaOptions = {
  __typename?: 'ComponentSchemaOptions';
  OptionsText?: Maybe<ComponentSchemaFieldOptionText>;
};

export type CreatecollectionResponse = {
  __typename?: 'CreatecollectionResponse';
  id?: Maybe<Scalars['String']>;
};

export type CreatecollectionfieldnumberResponse = {
  __typename?: 'CreatecollectionfieldnumberResponse';
  id?: Maybe<Scalars['String']>;
};

export type CreatecollectionfieldtextResponse = {
  __typename?: 'CreatecollectionfieldtextResponse';
  id?: Maybe<Scalars['String']>;
};

export type CreatecomponentResponse = {
  __typename?: 'CreatecomponentResponse';
  id?: Maybe<Scalars['String']>;
};

export type DeleteCollectionResponse = {
  __typename?: 'DeleteCollectionResponse';
  id?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** create collection */
  createCollection?: Maybe<CreatecomponentResponse>;
  /** create collection field */
  createCollectionFieldComponent?: Maybe<CreateCollectionFieldComponentResponse>;
  /** create collection field */
  createCollectionFieldNumber?: Maybe<CreatecollectionfieldnumberResponse>;
  /** create collection field */
  createCollectionFieldText?: Maybe<CreatecollectionfieldtextResponse>;
  /** create component */
  createComponent?: Maybe<CreatecollectionResponse>;
  /** delete collection */
  deleteCollection?: Maybe<DeleteCollectionResponse>;
  /** update collection */
  updateCollection?: Maybe<UpdateCollectionResponse>;
};


export type MutationCreateCollectionArgs = {
  name?: InputMaybe<Scalars['ID']>;
};


export type MutationCreateCollectionFieldComponentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  component?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['ID']>;
  required?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateCollectionFieldNumberArgs = {
  collection?: InputMaybe<Scalars['String']>;
  max?: InputMaybe<Scalars['Int']>;
  min?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['ID']>;
  required?: InputMaybe<Scalars['Boolean']>;
  unique?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateCollectionFieldTextArgs = {
  collection?: InputMaybe<Scalars['String']>;
  max?: InputMaybe<Scalars['Int']>;
  min?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['ID']>;
  pattern?: InputMaybe<Scalars['String']>;
  required?: InputMaybe<Scalars['Boolean']>;
  unique?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateComponentArgs = {
  name?: InputMaybe<Scalars['ID']>;
};


export type MutationDeleteCollectionArgs = {
  name?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdateCollectionArgs = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  /** Get collection */
  collection?: Maybe<Collection>;
  /** List of collections */
  collections?: Maybe<Array<Maybe<Bases>>>;
  /** List of collections */
  components?: Maybe<Array<Maybe<Components>>>;
  version?: Maybe<Scalars['String']>;
};


export type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryCollectionsArgs = {
  filter?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  per_page?: InputMaybe<Scalars['Int']>;
};


export type QueryComponentsArgs = {
  filter?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  per_page?: InputMaybe<Scalars['Int']>;
};

export type UpdateCollectionResponse = {
  __typename?: 'UpdateCollectionResponse';
  id?: Maybe<Scalars['String']>;
};

export type Bases = {
  __typename?: 'bases';
  createdBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  schema?: Maybe<ComponentSchema>;
  system?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type Components = {
  __typename?: 'components';
  createdBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  schema?: Maybe<ComponentSchema>;
  system?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CreateCollectionFieldComponentResponse = {
  __typename?: 'createCollectionFieldComponentResponse';
  id?: Maybe<Scalars['String']>;
};

export type CollectionByIdQueryVariables = Exact<{
  collectionId?: InputMaybe<Scalars['String']>;
}>;


export type CollectionByIdQuery = { __typename?: 'Query', collection?: { __typename?: 'Collection', createdBy?: string | null, id?: string | null, name?: string | null, schema?: { __typename?: 'ComponentSchema', fields?: Array<{ __typename?: 'ComponentSchemaField', id?: string | null, required?: boolean | null, name?: string | null, type?: string | null, unique?: boolean | null, Options?: { __typename?: 'ComponentSchemaOptions', OptionsText?: { __typename?: 'ComponentSchemaFieldOptionText', max?: { __typename?: 'ComponentSchemaFieldOptionMinMax', value?: number | null } | null, min?: { __typename?: 'ComponentSchemaFieldOptionMinMax', value?: number | null } | null } | null } | null } | null> | null } | null } | null };

export type CollectionsQueryVariables = Exact<{ [key: string]: never; }>;


export type CollectionsQuery = { __typename?: 'Query', collections?: Array<{ __typename?: 'bases', createdBy?: string | null, id?: string | null, name?: string | null, system?: boolean | null, type?: string | null, updatedBy?: string | null } | null> | null };

export type ComponentsQueryVariables = Exact<{ [key: string]: never; }>;


export type ComponentsQuery = { __typename?: 'Query', components?: Array<{ __typename?: 'components', createdBy?: string | null, id?: string | null, name?: string | null, system?: boolean | null, type?: string | null, updatedBy?: string | null } | null> | null };


export const CollectionByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CollectionById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collectionId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collectionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"schema"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"OptionsText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"min"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"required"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"unique"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CollectionByIdQuery, CollectionByIdQueryVariables>;
export const CollectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Collections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"system"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"}}]}}]}}]} as unknown as DocumentNode<CollectionsQuery, CollectionsQueryVariables>;
export const ComponentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Components"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"components"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"system"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"}}]}}]}}]} as unknown as DocumentNode<ComponentsQuery, ComponentsQueryVariables>;