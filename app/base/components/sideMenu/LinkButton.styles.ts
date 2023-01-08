import { createStyles } from '@mantine/core';

export default createStyles((theme, _params, getRef) => {
  const icon = getRef('icon');
  return {
    link: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[1]
          : theme.primaryColor[9],
      padding: `${theme.spacing.xs}px ${theme.spacing.xs}px`,
      borderRadius: theme.radius.lg,
      fontWeight: 500,

      '&:hover': {
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.appBlack[0]
            : theme.colors.gray[1],
        color: theme.colorScheme === 'dark' ? theme.white : theme.primaryColor,

        [`& .${icon}`]: {
          color:
            theme.colorScheme === 'dark'
              ? theme.white
              : theme.colors.appBlack[9],
        },
      },
    },

    linkIcon: {
      ref: icon,
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[2]
          : theme.primaryColor,
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor: theme.colors.gray[1],
        color: theme.colors.gray[1],
        [`& .${icon}`]: {
          color: theme.fn.variant({
            variant: 'light',
            color: theme.colors.gray[1],
          }).color,
        },
      },
    },
  };
});
