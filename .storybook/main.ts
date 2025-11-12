import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  // 故事文件路径配置 - 指定 Storybook 应该在哪里查找故事文件
  stories: [
    '../packages/components/src/__stories__/*.stories.@(js|jsx|mjs|ts|tsx)', // 组件库的故事文件路径
  ],
  // 插件配置 - 添加 Storybook 的扩展功能
  addons: [
    '@chromatic-com/storybook', // Chromatic 集成，用于视觉测试和发布
    '@storybook/addon-docs', // 文档插件，自动生成组件文档
    '@storybook/addon-a11y', // 无障碍访问插件，检查组件的可访问性
    '@storybook/addon-vitest', // Vitest 集成，用于运行单元测试
  ],
  // 框架配置 - 指定使用的框架和构建工具
  framework: {
    name: '@storybook/react-vite', // 使用 React + Vite 框架
    options: {},
  },
  // TypeScript 配置 - 控制 TypeScript 处理方式
  typescript: {
    check: false, // 关闭 TypeScript 类型检查，避免构建错误
    reactDocgen: 'react-docgen-typescript', // 使用 react-docgen-typescript 生成文档
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true, // 从枚举中提取字面量值
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true), // 过滤属性，只包含非 node_modules 的组件
    },
  },
}
export default config
