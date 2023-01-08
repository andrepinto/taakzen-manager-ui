'use client';

import { Button, Group, List, Stack, Text } from '@mantine/core';
import { useQuery } from 'urql';
import { ComponentsDocument } from '@/graphql/generated';

export function SideListItemComponent() {
  const [results] = useQuery({
    query: ComponentsDocument,
  });

  return (
    <Stack>
      <Group position="apart">
        <Text fz="sm" color={`gray.7`}>
          Components
        </Text>
        <Button variant="subtle" color="primary" compact>
          + Add
        </Button>
      </Group>
      <List withPadding>
        {results.data?.components?.map((cmp, index) => (
          <List.Item key={index}>
            <Text fz="sm">{cmp?.name}</Text>
          </List.Item>
        ))}
      </List>
    </Stack>
  );
}
