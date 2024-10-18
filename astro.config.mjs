import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";
import robotsTxt from "astro-robots-txt";
import icon from "astro-icon";
import expressiveCode from "astro-expressive-code";

import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/ remark-reading-time.mjs";

import svelte from "@astrojs/svelte";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://liruifengv.com/",
  integrations: [sitemap(), robotsTxt({
    sitemap: [
      "https://https://liruifengv.com/sitemap-index.xml",
      "https://https://liruifengv.com/sitemap-0.xml",
    ],
  }), solidJs(), icon(), svelte(), tailwind(), expressiveCode({
    themes: ["material-theme-darker"],
    plugins: [{
      name: "custom-style",
      baseStyles: () => `
            .frame.is-terminal:not(.has-title) .header {display: none;}
            .frame .header {border-bottom: 2px solid #313131;}
            .frame.is-terminal .header::before {display: none;}
            .frame.is-terminal:not(.has-title) {
              --button-spacing: 0.4rem;
            }
            .frame.is-terminal:not(.has-title) code, .frame.is-terminal:not(.has-title) pre {
              border-radius: 4px
            }
            .frame.is-terminal .header {
              justify-content: initial;
              font-weight: initial;
              padding-left: 1rem;
              color: #fff;
            }
            `,
      hooks: {}
    }],
    useThemedScrollbars: false,
    useThemedSelectionColors: false,
    styleOverrides: {
      uiLineHeight: "inherit",
      codeFontSize: "0.875rem",
      codeLineHeight: "1.25rem",
      borderRadius: "4px",
      borderWidth: "0px",
      codePaddingInline: "1rem",
      codeFontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;'
    }
  })],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  output: "server",
  adapter: netlify({ edgeMiddleware: true }),
  vite: {
    assetsInclude: "**/*.riv",
  },
});