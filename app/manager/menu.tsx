'use client';

import {
  IconEdit,
  IconLogout,
  IconStack2,
  IconSwitchHorizontal,
} from '@tabler/icons';
import { Code, createStyles, Group, Navbar, Text } from '@mantine/core';
import React, { useState } from 'react';
import Link from 'next/link';

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef(`icon`);
  return {
    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${
        theme.colorScheme === `dark`
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === `dark`
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: `flex`,
      alignItems: `center`,
      textDecoration: `none`,
      fontSize: theme.fontSizes.sm,
      color:
        theme.colorScheme === `dark`
          ? theme.colors.dark[1]
          : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      '&:hover': {
        backgroundColor:
          theme.colorScheme === `dark`
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color: theme.colorScheme === `dark` ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === `dark` ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color:
        theme.colorScheme === `dark`
          ? theme.colors.dark[2]
          : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor: theme.fn.variant({
          variant: `light`,
          color: theme.primaryColor,
        }).background,
        color: theme.fn.variant({ variant: `light`, color: theme.primaryColor })
          .color,
        [`& .${icon}`]: {
          color: theme.fn.variant({
            variant: `light`,
            color: theme.primaryColor,
          }).color,
        },
      },
    },
  };
});

const data = [
  { link: `/manager/collections`, label: `Collections`, icon: IconStack2 },
  { link: `/manager/content`, label: `Content`, icon: IconEdit },
];

export default function Menu() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState(`Collections`);

  const links = data.map((item) => (
    <Link
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      href={item.link}
      key={item.label}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <Navbar
      width={{ sm: 250 }}
      p="md"
      sx={(theme) => ({
        backgroundColor: theme.colors.gray[0],
      })}
    >
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <Text fz={`xl`}>Manager</Text>
          <Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
        </Group>
        {links}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        {/* eslint-disable-next-line */}
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        {/* eslint-disable-next-line */}
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </Navbar.Section>
    </Navbar>
  );
}
