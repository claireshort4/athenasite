/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `notodai`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-image", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "static/images/icon.png"
    },
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./static/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
  // {
  //   resolve: `gatsby-source-filesystem`,
  //   options: {
  //     name: `content`,
  //     path: `${__dirname}/src/content`,
  //   },
  // },
  {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              loadingStrategy: 'lazy', //Optional: Enable support for lazy-load offscreen iframes. Default is disabled.
              containerClass: "embedVideo-container", //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
              iframeId: true, //Optional: if true, iframe's id will be set to what is provided after 'video:' (YouTube IFrame player API requires iframe id)
            },
          },
          `gatsby-plugin-mdx`,
          {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `pages`,
              path: `./src/pages/blog`,
            },
          },
          {
            resolve: "gatsby-plugin-react-svg",
            options: {
              rule: {
                include: /static/
              }
            }
          }
        ],
      },
  },
  "gatsby-remark-responsive-iframe", //Optional: Must be loaded after gatsby-remark-embed-video
  ]
};