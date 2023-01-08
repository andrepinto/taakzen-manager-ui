import { Box, Text } from '@mantine/core';

export function SideListTitle() {
  return (
    <Box
      sx={(theme) => ({
        paddingBottom: theme.spacing.xl,
      })}
    >
      <Text fz={`xl`} fw={700}>
        Collections
      </Text>
    </Box>
  );
}
