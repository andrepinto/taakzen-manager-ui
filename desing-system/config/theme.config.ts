import { MantineThemeOverride } from '@mantine/core';
import { colors, shadows } from '.';

export const mantineConfig: MantineThemeOverride = {
  // spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
  fontFamily: 'Urbanist, sans serif',
  fontSizes: { xs: 10, sm: 12, md: 14, lg: 16, xl: 18 },
  primaryColor: 'appBlack',
  //radius: { md: 7, xl: 30 },
  //lineHeight: '17px',
  shadows: {
    sm: shadows.light,
    md: shadows.medium,
    lg: shadows.dark,
    xl: shadows.color,
  },
  colors: {
    gray: [
      colors.appGrey50,
      colors.appGrey100,
      colors.appGrey200,
      colors.appGrey300,
      colors.appGrey400,
      colors.appGrey500,
      colors.appGrey600,
      colors.appGrey700,
      colors.appGrey800,
      colors.appGrey900,
    ],
    dark: [
      colors.appBlack50,
      colors.appBlack100,
      colors.appBlack200,
      colors.appBlack300,
      colors.appBlack400,
      colors.appBlack500,
      colors.appBlack600,
      colors.appBlack700,
      colors.appBlack800,
      colors.appBlack900,
    ],
    appBlack: [
      colors.appBlack50,
      colors.appBlack100,
      colors.appBlack200,
      colors.appBlack300,
      colors.appBlack400,
      colors.appBlack500,
      colors.appBlack600,
      colors.appBlack700,
      colors.appBlack800,
      colors.appBlack900,
    ],
    brand: [
      colors.brand50,
      colors.brand100,
      colors.brand200,
      colors.brand300,
      colors.brand400,
      colors.brand500,
      colors.brand600,
      colors.brand700,
      colors.brand800,
      colors.brand900,
    ],
  },
  headings: {
    fontFamily: 'RedHat, sans-serif',
    sizes: {
      h1: { fontSize: 26 },
      h2: { fontSize: 20 },
    },
  },
};
