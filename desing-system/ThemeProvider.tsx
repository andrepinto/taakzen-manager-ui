import { useEffect } from 'react';
import {
  MantineProvider,
  Global,
  ColorSchemeProvider,
  ColorScheme,
  createStyles,
} from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { useColorScheme, useLocalStorage } from '@mantine/hooks';

import { mantineConfig } from './config/theme.config';
import { colors, shadows } from './config';

const useNotificationStyles = createStyles((theme) => ({
  root: {
    backgroundColor:
      theme.colorScheme === 'dark' ? colors.BGDark : colors.BGLight,
    border: 'none',
    boxShadow: theme.colorScheme === 'dark' ? shadows.dark : shadows.light,
    height: '65px',
    width: '460px',
    borderRadius: '7px',
    padding: '20px',
    justify: 'space-between',
  },
  description: {
    fontSize: '16px',
    fontWeight: 400,
    color: theme.colorScheme === 'dark' ? colors.white : colors.appBlack900,
  },
  closeButton: {
    color:
      theme.colorScheme === 'dark' ? colors.appBlack100 : colors.appBlack900,
  },
  icon: {
    width: '22px',
    height: '22px',
    marginRight: '10px',
  },
}));

declare module '@mantine/core' {
  export type MantineColor = MantineColor | 'gradient';
}

export function ThemeProvider({
  children,
  dark,
}: {
  children: JSX.Element;
  dark?: boolean;
}) {
  const preferredColorScheme = useColorScheme();

  const { classes: notificationClasses } = useNotificationStyles();

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useEffect(() => {
    if (dark) {
      setColorScheme('dark');
    } else {
      setColorScheme('light');
    }
  }, [dark]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          // Override any other properties from default theme
          colorScheme,
          ...mantineConfig,
          components: {
            Notification: {
              classNames: notificationClasses,
            },
          },
        }}
      >
        <Global
          styles={(theme) => ({
            /* '@font-face': {
              fontFamily: 'RedHat',
              src: 'url(/fonts/RedHatText-VariableFont_wght.ttf) format("opentype")',
              fontWeight: 400,
            },*/
            '@font-face': {
              fontFamily: 'Urbanist',
              src: 'url(/fonts/Urbanist-VariableFont_wght.ttf) format("opentype")',
              fontWeight: 400,
            },

            body: {
              ...theme.fn.fontStyles(),
              backgroundColor:
                theme.colorScheme === 'dark' ? colors.BGDark : colors.BGLight,
              color:
                theme.colorScheme === 'dark'
                  ? colors.white
                  : colors.appBlack900,
            },
            a: {
              textDecoration: 'none',
              color: 'inherit',
            },
          })}
        />
        <NotificationsProvider>{children}</NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
