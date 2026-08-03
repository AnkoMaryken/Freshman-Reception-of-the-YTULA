import { defineConfig } from 'vitepress'
import { withSidebar } from './sidebar.mjs'

// 站点配置
const siteTitle = '烟台大学文新学院 · 新生入学常见问题集'
const siteDescription = '烟台大学文学与新闻传播学院新生入学常见问题集，帮助你快速了解报到、学习与生活的一切'

export default defineConfig({
  // ===== 站点元信息 =====
  title: siteTitle,
  description: siteDescription,
  lang: 'zh-CN',
  // GitHub Pages 子路径部署：base 必须与仓库名一致
  // 例如仓库名为 Freshman-Reception-of-the-YTULA 时：base: '/Freshman-Reception-of-the-YTULA/'
  // 如果使用自定义域名（如 docs.ytu.edu.cn）或部署到根路径，改为 base: '/'
  base: '/Freshman-Reception-of-the-YTULA/',

  // ===== 页面元数据 =====
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#1b66c9' }],
    ['meta', { property: 'og:title', content: siteTitle }],
    ['meta', { property: 'og:description', content: siteDescription }],
  ],

  // ===== 主题配置 =====
  themeConfig: {
    // 站点标题（左上角）
    siteTitle: '烟大文新 · 新生指南',

    // 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '入学指南', link: '/guide/welcome' },
      { text: '报到注册', link: '/register/report' },
      { text: '学习生活', link: '/life/study' },
      { text: '常见问题', link: '/faq/index' },
    ],

    // ===== 侧边栏 =====
    sidebar: withSidebar(),

    // 页脚
    footer: {
      message: '烟台大学文学与新闻传播学院 · 新生入学常见问题集',
      copyright: `Copyright © ${new Date().getFullYear()} 文学与新闻传播学院`,
    },

    // ===== 搜索配置 =====
    search: {
      provider: 'local', // 内置本地全文搜索
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: '搜索问题' },
              modal: {
                displayDetails: '显示详情',
                noResultsText: '未找到相关问题',
                resetButtonTitle: '清除查询',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                },
              },
            },
          },
        },
      },
    },

    // ===== 文档页脚导航 =====
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    // ===== 大纲标题 =====
    outline: {
      label: '本页导航',
      level: [2, 3],
    },

    // ===== 编辑链接 =====
    editLink: {
      pattern: 'https://github.com/your-repo/edit/main/docs/:path',
      text: '编辑此页',
    },

    // ===== 最后更新时间 =====
    lastUpdated: {
      text: '最后更新于',
      formatOptions: { dateStyle: 'short', timeStyle: 'short' },
    },
  },

  // ===== 代码块配置 =====
  markdown: {
    lineNumbers: true,
    container: {
      tipLabel: '提示',
      warningLabel: '注意',
      dangerLabel: '重要',
      infoLabel: '信息',
      detailsLabel: '详细信息',
    },
  },

  // ===== 深色/浅色模式 =====
  appearance: true,

  // ===== 构建输出目录 =====
  outDir: './.vitepress/dist',

  // ===== 其他配置 =====
  ignoreDeadLinks: false,
  lastUpdated: true,
})
