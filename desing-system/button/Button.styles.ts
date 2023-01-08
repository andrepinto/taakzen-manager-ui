import { createStyles, MantineTheme } from '@mantine/core';
import { colors } from '@/desing-system/config';

const getLabelStyles = (variant: any, theme: any) => {
  const dark = theme.colorScheme === 'dark';
  let color = dark ? colors.appBlack900 : colors.white;
  if (variant === 'light' || variant === 'outline') {
    color = colors.appBlack400;
  }
  return {
    color: color,
  };
};

export const getOutlineStyles = (variant: any, theme: any) => {
  const dark = theme.colorScheme === 'dark';

  const background = dark ? colors.white : colors.appBlack900;
  let backgroundColor = dark ? colors.appBlack900 : colors.white;
  if (variant === 'light') {
    backgroundColor = colors.appGrey100;
  }
  return {
    background: background,
    backgroundColor: backgroundColor,
  };
};

export default createStyles(
  (
    theme: MantineTheme,
    {
      disabled,
      inherit,
      variant,
    }: { disabled: boolean; inherit: boolean; variant?: string },
    getRef,
  ) => {
    const dark = theme.colorScheme === 'dark';
    const loading = getRef('loading');
    let overrides = {};
    if (variant === 'outline' || variant === 'light') {
      overrides = getOutlineStyles(variant, theme);
    }

    return {
      label: disabled ? {} : getLabelStyles(variant, theme),
      root: {
        width: inherit ? '100%' : '',
        ...overrides,
      },
    };
  },
);
