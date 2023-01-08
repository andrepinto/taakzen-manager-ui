'use client';

import { Button, Group, List, Stack, Text } from '@mantine/core';
import { useQuery } from 'urql';
import { CollectionsDocument } from '@/graphql/generated';

export function SideListItemCollection() {
  const [results] = useQuery({
    query: CollectionsDocument,
  });

  return (
    <Stack>
      <Group position="apart">
        <Text fz="sm" color={`gray.7`}>
          Base
        </Text>
        <Button variant="subtle" color="primary" compact>
          + Add
        </Button>
      </Group>
      <List withPadding>
        {results.data?.collections?.map((cmp, index) => (
          <List.Item key={index}>
            <Text fz="sm">{cmp?.name}</Text>
          </List.Item>
        ))}
      </List>
    </Stack>
  );
}
