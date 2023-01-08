import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Group } from '@mantine/core';
import { Button } from './Button';
import { IconDatabase } from '@tabler/icons';
import { colors } from '@/desing-system/config';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ ...args }) => (
  <Button {...args}>Click Me</Button>
);

export const Default = Template.bind({});
Default.args = {};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const filled = () => (
  <Group>
    <Button size="lg">Large</Button>
    <Button>Medium</Button>
  </Group>
);

export const outline = () => (
  <Group>
    <Button size="lg" variant="outline">
      Large
    </Button>
    <Button variant="outline">Medium</Button>
  </Group>
);

export const disabled = () => (
  <Group>
    <Button disabled>Filled</Button>
    <Button variant="outline" disabled>
      Outline
    </Button>
  </Group>
);

export const icon = () => (
  <Group>
    <Button icon={<IconDatabase size={14} />}>Outline</Button>
  </Group>
);

export const light = () => (
  <Group bg={colors.white} h={100} p={'sm'}>
    <Button variant={'light'}>light</Button>
    <Button icon={<IconDatabase size={14} />} variant={'light'}>
      light
    </Button>
  </Group>
);
