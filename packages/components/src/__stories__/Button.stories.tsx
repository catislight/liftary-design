import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../ui/Button';
import { expect, userEvent, within } from '@storybook/test';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: '按钮内部的内容',
    },
    onClick: {
      action: 'clicked',
      description: '点击事件处理函数',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用按钮',
    },
    variant: {
      control: { type: 'select', options: ['primary', 'secondary'] },
      description: '按钮变体',
    },
    className: {
      control: 'text',
      description: '附加的 CSS 类名',
    },
    style: {
      control: 'object',
      description: '内联样式对象',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /primary button/i });
    await expect(button).toBeInTheDocument();
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /secondary button/i });
    await expect(button).toBeInTheDocument();
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /disabled button/i });
    await expect(button).toBeDisabled();
  },
};

export const ClickInteraction: Story = {
  args: {
    children: 'Click Me',
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /click me/i });

    // Track click count
    let clickCount = 0;
    const originalOnClick = args.onClick;
    args.onClick = () => {
      clickCount++;
      originalOnClick?.();
    };

    await userEvent.click(button);

  },
};
