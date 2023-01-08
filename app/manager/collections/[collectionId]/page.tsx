'use client';

import { useQuery } from 'urql';
import { CollectionByIdDocument } from '@/graphql/generated';

type PageProps = {
  params: {
    collectionId: string;
  };
};

export default function Page({ params: { collectionId } }: PageProps) {
  const [results] = useQuery({
    query: CollectionByIdDocument,
    variables: { collectionId },
  });
  return <>{results.data?.collection?.id}</>;
}
