import React from 'react';
import { Button as MantineButton } from '@mantine/core';

import { SpacingProps } from '@/desing-system/shared/spacing.props';
import useStyles from './Button.styles';

export type Size = 'md' | 'lg' | undefined;

interface IButtonProps extends JSX.ElementChildrenAttribute, SpacingProps {
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  inherit?: boolean;
  loading?: boolean;
  onClick?: (e: any) => void;
  size?: Size;
  submit?: boolean;
  variant?: 'outline' | 'filled' | 'default' | 'light';
}

/**
 * Button component
 *
 */
export function Button({
  loading,
  children,
  submit = false,
  icon,
  size = 'md',
  fullWidth,
  disabled = false,
  inherit = false,
  onClick,
  variant = 'filled',
  ...props
}: IButtonProps) {
  const { classes } = useStyles({ disabled, inherit, variant });
  const withIconProps = icon ? { leftIcon: icon } : {};

  return (
    <MantineButton
      radius="sm"
      classNames={classes}
      {...withIconProps}
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
      disabled={disabled}
      size={size}
      loading={loading}
      fullWidth={fullWidth}
      variant={variant}
      {...props}
    >
      <>{children}</>
    </MantineButton>
  );
}
