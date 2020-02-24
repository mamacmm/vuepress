module.exports = {
    title: 'Hello VuePress',
    description: 'Hello, my friend!',
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.ico`
        }]
    ],
    dest: './docs/.vuepress/dist',
    ga: '',
    evergreen: true,
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '向导', link: '/guide/' },
            {
                text: '语言',
                items: [
                    { text: '中文', link: '/language/chinese' },
                    { text: 'English', link: '/language/english' }
                ]
            },
            { text: 'External', link: 'https://www.baidu.com' },
        ],
        displayAllHeaders: true,
        sidebarDepth: 2,
        sidebar: 'auto'
    }
}
