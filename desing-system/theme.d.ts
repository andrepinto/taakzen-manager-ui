import { DefaultMantineColor } from '@mantine/core';

type ExtendedCustomColors = 'appBlack' | 'brand' | DefaultMantineColor;

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, string[]>;
  }
}
