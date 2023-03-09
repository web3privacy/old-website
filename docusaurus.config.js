// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Web3Privacy Now',
    tagline: 'A research project aimed at building a culture of privacy industry in web3.',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://web3privacy.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/website/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'web3privacy', // Usually your GitHub org/username.
    projectName: 'website', // Usually your repo name.
    deploymentBranch: 'gh-pages', // Branch that GitHub pages will deploy from.
    trailingSlash: false, // Set to true if you are using Netlify.
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    // i18n: {
    //     defaultLocale: 'en',
    //     locales: ['en', 'fr', 'es', 'zh-Hans', 'ja', 'ko', 'ru', 'pt-BR', 'vi', 'tr', 'id', 'ar', 'th', 'de', 'it', 'fa'],
    // },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/web3privacy/website/tree/main/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/web3privacy/website/tree/main/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/web3privacynow.jpg',
            navbar: {
                title: 'Web3Privacy Now',
                logo: {
                    alt: 'Web3Privacy Now Logo',
                    src: 'img/web3privacynow.svg',
                },
                items: [
                    {
                        to: '/docs/category/db',
                        position: 'left',
                        label: 'DB',
                    },
                    {
                        type: 'doc',
                        docId: 'manifesto',
                        position: 'left',
                        label: 'Manifesto',
                    },
                    {
                        type: 'doc',
                        docId: 'pagency',
                        position: 'left',
                        label: 'Pagency',
                    },
                    {
                        type: 'doc',
                        docId: 'roadmap',
                        position: 'left',
                        label: 'Roadmap',
                    },
                    {to: '/blog', label: 'Blog', position: 'left'},
                    {
                        href: 'https://github.com/web3privacy/website',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Manifesto',
                                to: '/docs/manifesto',
                            }, {
                                label: 'Pagency',
                                to: '/docs/pagency',
                            }, {
                                label: 'DB',
                                to: '/docs/category/db',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/web3privacy',
                            },
                            {
                                label: 'Signal',
                                href: 'https://chat.web3privacy.info',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Blog',
                                to: '/blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/web3privacy/website',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Web3Privacy. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
