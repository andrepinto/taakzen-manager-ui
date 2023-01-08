import { IconInfoCircle, IconSettings } from '@tabler/icons';

import React from 'react';
import { Avatar, Flex } from '@mantine/core';
import MenuLinkButton from '@/app/base/components/sideMenu/LinkButton';

const data = [
  { link: '/manager/collections', label: 'Collections', icon: IconInfoCircle },
  { link: '/manager/content', label: 'Content', icon: IconSettings },
];

export default function BottomMenu() {
  const links = data.map((item) => (
    <MenuLinkButton active={''} item={item} tooltip={false} />
  ));

  return (
    <Flex direction={'column'} gap={'md'} pb={'40px'}>
      {links}
      <Avatar
        src={
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
        }
        radius="xl"
      >
        MK
      </Avatar>
    </Flex>
  );
}
