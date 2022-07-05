const nav = require('./configs/nav.js')
export default {
    title: 'SpaceWorm',
    description: 'Just',
    base: '/space-worm/',
    themeConfig: {
      nav: nav,
      //丝滑滚动
      smoothScroll: true,
      // 启用时间线
      editLinks: true,
      //在git上编辑提示文字
      editLinkText: '在 GitHub 上编辑此页',
      // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
      lastUpdated: '上次更新',
      socialLinks: [
          { icon: 'github', link: 'https://github.com/phyear' }
        ],
      footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2019-present Evan You'
        }    
    },
  }