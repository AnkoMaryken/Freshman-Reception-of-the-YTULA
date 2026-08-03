/**
 * 侧边栏配置管理文件
 *
 * ─── 使用方法 ─────────────────────────────────────────────
 * 1. 在 docs/ 下新建文章，例如：docs/life/dorm.md
 * 2. 在下方对应分组的 items 数组中添加一行：
 *      { text: '宿舍介绍', link: '/life/dorm' }
 *    注意：link 以 / 开头、去掉 .md 后缀
 * 3. 保存后，开发服务器会自动热更新侧边栏
 * ─────────────────────────────────────────────────────────
 */

export function withSidebar() {
  return {
    // 「入学指南」栏目侧边栏
    '/guide/': {
      base: '/guide/',
      items: [
        {
          text: '入学指南',
          collapsed: false,
          items: [
            { text: '欢迎新同学', link: '/guide/welcome' },
            { text: '入学前准备', link: '/guide/before-arrival' },
            { text: '报到流程', link: '/register/report' },
          ],
        },
      ],
    },

    // 「报到注册」栏目侧边栏
    '/register/': {
      base: '/register/',
      items: [
        {
          text: '报到注册',
          collapsed: false,
          items: [
            { text: '报到流程', link: '/register/report' },
            { text: '证件与材料', link: '/register/documents' },
          ],
        },
      ],
    },

    // 「学习生活」栏目侧边栏
    '/life/': {
      base: '/life/',
      items: [
        {
          text: '学习生活',
          collapsed: false,
          items: [
            { text: '学习指南', link: '/life/study' },
            { text: '宿舍与生活', link: '/life/dorm' },
            { text: '食堂与美食', link: '/life/canteen' },
          ],
        },
      ],
    },

    // 「常见问题」栏目侧边栏
    '/faq/': {
      base: '/faq/',
      items: [
        {
          text: '常见问题',
          collapsed: false,
          items: [
            { text: '报到类问题', link: '/faq/register' },
            { text: '学习类问题', link: '/faq/study' },
            { text: '生活类问题', link: '/faq/life' },
            { text: '其他问题', link: '/faq/other' },
          ],
        },
      ],
    },
  }
}
