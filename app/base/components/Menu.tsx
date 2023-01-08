import { IconEdit, IconStack2 } from '@tabler/icons';
import React, { useState } from 'react';

import { Flex } from '@mantine/core';
import MenuLinkButton from '@/app/base/components/sideMenu/LinkButton';

const data = [
  { link: '/manager/collections', label: 'Collections', icon: IconStack2 },
  { link: '/manager/content', label: 'Content', icon: IconEdit },
];

export default function Menu() {
  const [active, setActive] = useState('Collections');

  const links = data.map((item) => (
    <MenuLinkButton
      active={active}
      item={item}
      key={item.label}
      tooltip={true}
    />
  ));

  return (
    <Flex direction={'column'} gap={'sm'}>
      {links}
    </Flex>
  );
}
