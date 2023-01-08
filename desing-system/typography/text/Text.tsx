import {
  Text as MantineText,
  MantineColor,
  useMantineTheme,
} from '@mantine/core';

import { colors } from '@/desing-system/config';
import { SpacingProps } from '@/desing-system/shared/spacing.props';

interface ITextProps extends JSX.ElementChildrenAttribute, SpacingProps {
  align?: 'left' | 'center' | 'right' | 'justify';
  color?: MantineColor;
  gradient?: boolean;
  rows?: number;
  size?: 'md' | 'lg';
  weight?: 'bold' | 'normal';
}

/**
 * Text component
 *
 */
export function Text({ children, gradient = false, ...props }: ITextProps) {
  const { colorScheme } = useMantineTheme();
  const gradientStyles = gradient
    ? {
        backgroundImage: colors.horizontal,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }
    : {};

  let textColor = props.color;
  if (!textColor) {
    textColor = colorScheme === 'dark' ? colors.white : colors.appBlack900;
  }

  return (
    <MantineText
      lineClamp={props.rows}
      size="md"
      weight="normal"
      style={gradientStyles}
      {...props}
      color={textColor}
    >
      <>{children}</>
    </MantineText>
  );
}
