/* eslint-disable no-undef */
module.exports = {
  //pathPrefix: `/mygatsby`,
  siteMetadata: {
    title: 'Phillip Sylvain - Portfolio',
    author: 'Phillip Sylvain',
    description: 'A Portfolio & Blog for Phillip Sylvain',
    menuLinks: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'Layouts',
        link: '#',
        items: [
          {
            name: 'Left Sidebar',
            link: '/left-sidebar',
          },
          {
            name: 'Right Sidebar',
            link: '/right-sidebar',
          },
          {
            name: 'No Sidebar',
            link: '/no-sidebar',
          },
          // {
          //   name: 'SubMenu',
          //   link: '#',
          //   items: [
          //     {
          //       name: 'Option 1',
          //       link: '#',
          //     },
          //     {
          //       name: 'Option 2',
          //       link: '#',
          //     },
          //     {
          //       name: 'Option 3',
          //       link: '#',
          //     },
          //     {
          //       name: 'Option 4',
          //       link: '#',
          //     },
          //   ],
          // },
        ],
      },
      {
        name: 'Elements',
        link: '/elements',
      },
      {
        name: 'Resume',
        link: '/resume',
      },
      {
        name: 'Blog',
        link: '/blog',
      },
      // {
      //   name: 'Sign Up',
      //   link: '#',
      //   cl: 'button primary',
      // },
    ],
  },
  plugins: [
    '@material-ui/core',
    'react-vertical-timeline-component',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-prettier-eslint",
      // this is the default configuration, override only what you need
      options: {
        cwd: process.cwd(), // path to a directory that should be considered as the current working directory
        watch: true, // format/lint on save
        initialScan: true, // if true, will format/lint the whole project on Gatsby startup
        onChangeFullScanLint: false, // if true, on file save always perform full scan lint
        onChangeFullScanFormat: false, // if true, on file save always perform full scan format
        prettierLast: false, // if true, will run Prettier after ESLint
        ignorePatterns: [
          "**/node_modules/**/*",
          "**/.git/**/*",
          "**/dist/**/*",
          ".cache/**/*",
          "public/**/*",
        ], // string or array of paths/files/globs to ignore
        prettier: {
          patterns: [], // string or array of paths/files/globs to include related only to Prettier
          ignorePatterns: [], // string or array of paths/files/globs to exclude related only to Prettier
          customOptions: {}, // see: https://prettier.io/docs/en/options.html
        },
        eslint: {
          patterns: [], // string or array of paths/files/globs to include related only to ESLint
          ignorePatterns: [], // string or array of paths/files/globs to exclude related only to ESLint
          formatter: "stylish", // set custom or third party formatter
          maxWarnings: undefined, // number of max warnings allowed, when exceed it will fail Gatsby build
          emitWarning: true, // if true, will emit lint warnings
          failOnError: false, // if true, any lint error will fail the build, you may set true only in your prod config
          failOnWarning: false, // same as failOnError but for warnings
          plugins: [], // an array of plugins to load for ESLint
          customOptions: {}, // see: https://eslint.org/docs/developer-guide/nodejs-api#cliengine
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images/`,
        name: 'images',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet'
  ],
}
