import { Title as MantineTitle } from '@mantine/core';
import { colors } from '@/desing-system/config';
import { SpacingProps } from '@/desing-system/shared/spacing.props';

interface ITitleProps extends JSX.ElementChildrenAttribute, SpacingProps {
  size?: 1 | 2;
}
/**
 * Use Title to create headers.
 *
 */
export function Title({ size = 1, children }: ITitleProps) {
  return (
    <MantineTitle
      sx={(theme) => ({
        fontWeight: size === 1 ? 800 : 700,
        color: theme.colorScheme === 'dark' ? colors.white : colors.appBlack900,
      })}
      order={size}
    >
      <> {children}</>
    </MantineTitle>
  );
}
