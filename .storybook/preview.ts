import type { Preview } from '@storybook/react-vite';

const preview: Preview = {
  parameters: {
    // Controls 配置 - 定义如何匹配和控制不同的参数类型
    controls: {
      // 匹配器 - 自动为匹配的属性分配合适的控件
      matchers: {
        color: /(background|color)$/i, // 颜色属性匹配器
        date: /Date$/i, // 日期属性匹配器
      },
    },

    // 无障碍访问配置 - 控制可访问性检查行为
    a11y: {
      // 'todo' - 在测试 UI 中显示可访问性违规
      // 'error' - 在 CI 中失败可访问性违规
      // 'off' - 完全跳过可访问性检查
      test: 'todo', // 设置为 'todo' 以在界面中显示违规，但不阻止构建
    },
  },
};

export default preview;
