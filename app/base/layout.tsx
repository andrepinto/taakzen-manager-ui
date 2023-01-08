'use client';

import { Flex, Stack, useMantineColorScheme } from '@mantine/core';
import Menu from '@/app/base/components/Menu';
import BottomMenu from '@/app/base/components/BottomMenu';
import { Text } from '@/desing-system/typography/text/Text';
import { colors } from '@/desing-system/config';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <Flex bg={dark ? colors.BGDark : colors.BGLight}>
      {/*main container*/}
      <Flex
        direction={'column'}
        align={'center'}
        h={'100vh'}
        w={'4.5rem'}
        bg={dark ? 'dark.4' : 'white'}
        sx={(theme) => ({
          borderRight: `1px solid ${
            theme.colorScheme === 'dark'
              ? theme.colors.dark[5]
              : theme.colors.gray[1]
          }`,
        })}
      >
        {/*menu sidebar container*/}
        <Flex
          h={'4.5rem'}
          w={'100%'}
          align={'center'}
          justify={'center'}
          sx={(theme) => ({
            borderBottom: `1px solid ${
              theme.colorScheme === 'dark'
                ? theme.colors.dark[5]
                : theme.colors.gray[1]
            }`,
          })}
        >
          <Text>TZ</Text>
        </Flex>
        <Flex h={'100%'} direction={'column'} pt={'40px'}>
          <Stack h={'100%'} justify="space-between">
            <Menu></Menu>
            <BottomMenu />
          </Stack>
        </Flex>
      </Flex>

      <Flex w={'100%'}>{children}</Flex>
    </Flex>
  );
}
