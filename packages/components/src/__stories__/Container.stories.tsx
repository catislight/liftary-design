import type { Meta, StoryObj } from '@storybook/react-vite';
import { Container } from '../structure/Container';

const meta: Meta<typeof Container> = {
  title: 'Structure/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Container 内部的内容',
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

export const Default: Story = {
  args: {
    children: '这是一个默认的 Container 组件示例',
  },
};

export const WithCustomContent: Story = {
  args: {
    children: (
      <div>
        <h1>标题内容</h1>
        <p>这里是一些段落文本内容，用于演示 Container 组件的布局效果。</p>
        <button>按钮</button>
      </div>
    ),
  },
};

export const WithCustomStyle: Story = {
  args: {
    children: '带有自定义样式的 Container',
    style: {
      backgroundColor: '#e3f2fd',
      border: '2px solid #1976d2',
      borderRadius: '8px',
    },
  },
};

export const WithClassName: Story = {
  args: {
    children: '带有自定义类名的 Container',
    className: 'custom-container',
  },
};
