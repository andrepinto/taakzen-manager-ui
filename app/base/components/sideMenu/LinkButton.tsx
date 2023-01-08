import Link from 'next/link';
import React from 'react';
import useStyles from './LinkButton.styles';
import { TablerIcon } from '@tabler/icons';
import { Tooltip } from '@/desing-system';

interface IMenuLinkProps {
  active: string;
  item: MenuLinkItem;
  tooltip: boolean;
}

interface MenuLinkItem {
  icon: TablerIcon;
  label: string;
  link: string;
}

export default function MenuLinkButton({
  item,
  active,
  tooltip,
}: IMenuLinkProps) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip
      disabled={!tooltip}
      label={item.label}
      key={item.label}
      position={'right'}
    >
      <Link
        className={cx(classes.link, {
          [classes.linkActive]: item.label === active,
        })}
        href={item.link}
        key={item.label}
      >
        <item.icon className={classes.linkIcon} stroke={1.8} />
      </Link>
    </Tooltip>
  );
}
