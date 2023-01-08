import { createStyles, MantineTheme } from '@mantine/core';
import { shadows, colors } from '@/desing-system/config';

export default createStyles((theme: MantineTheme) => {
  const dark = theme.colorScheme === 'dark';

  return {
    tooltip: {
      backgroundColor: dark ? colors.appBlack300 : theme.white,
      color: dark ? theme.white : colors.appBlack900,
      boxShadow: dark ? shadows.dark : shadows.medium,
      padding: '8px 10px',
      fontSize: '16px',
      fontWeight: 600,
    },
    arrow: {
      backgroundColor: dark ? colors.appBlack300 : theme.white,
    },
  };
});
