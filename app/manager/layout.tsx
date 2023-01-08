'use client';

import Menu from '@/app/manager/menu';
import { AppShell } from '@mantine/core';

export default function ManagerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppShell
      padding="md"
      navbar={<Menu></Menu>}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === `dark` ? theme.colors.dark[8] : theme.white,
        },
      })}
    >
      {children}
    </AppShell>
  );
}
