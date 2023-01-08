import { SideListTitle } from '@/app/manager/collections/SideListTitle';
import { Box, Stack } from '@mantine/core';
import { SideListItemCollection } from '@/app/manager/collections/SideListItemCollection';
import { SideListItemComponent } from '@/app/manager/collections/SideListItemComponent';

export function SideList() {
  return (
    <Box
      w={200}
      sx={() => ({
        borderRight: `1px solid #eee`,
      })}
    >
      <Stack>
        <SideListTitle />
        <SideListItemCollection />
        <SideListItemComponent />
      </Stack>
    </Box>
  );
}
