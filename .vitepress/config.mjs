import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SVGO",
  description:
    "A Node.js library and command-line application to optimize vectors",
  base: process.env.CI ? "/svgo.dev/" : "/",
  srcDir: "src",
  srcExclude: ["parts/*.md"],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: "/logo-light.svg",
      dark: "/logo-dark.svg",
      alt: "SVGO",
    },
    siteTitle: false,
    search: {
      provider: "local",
    },

    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide" },
    ],

    outline: "deep",
    sidebar: [
      {
        text: "Reference",
        items: [
          { text: "Getting Started", link: "/guide" },
          {
            text: "Plugins",
            link: "/preset-default",
            items: [
              {
                text: "Add Attributes to Elements",
                link: "/plugins/add-attributes-to-svg-element",
              },
              {
                text: "Add Classes to Elements",
                link: "/plugins/add-classes-to-svg-element",
              },
              {
                text: "Cleanup Attributes",
                link: "/plugins/cleanup-attrs",
              },
              { text: "Convert Path Data", link: "/plugins/convert-path-data" },
              { text: "Merge Paths", link: "/plugins/merge-paths" },
              { text: "Remove XLink", link: "/plugins/remove-xlink" },
              {
                text: "Remove XML Declaration",
                link: "/plugins/remove-xml-proc-inst",
              },
              {
                text: "Remove XML Namespace",
                link: "/plugins/remove-xmlns",
              },
              { text: "Reuse Paths", link: "/plugins/reuse-paths" },
              { text: "Sort Attributes", link: "/plugins/sort-attrs" },
              {
                text: "Sort Defs Children",
                link: "/plugins/sort-defs-children",
              },
            ],
          },
          { text: "Plugins Architecture", link: "/plugins-api" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/svg/svgo" },
      { icon: "discord", link: "https://discord.com/invite/z8jX8NYxrE" },
    ],
  },
});
