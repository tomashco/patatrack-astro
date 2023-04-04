import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import compress from 'astro-compress';
import CMSCollections from './src/collections.js';
import { readingTimeRemarkPlugin } from './src/utils/frontmatter.mjs';
import { loadEnv } from 'vite';
const { CLOUDINARY_CLOUD_NAME } = loadEnv(import.meta.env.CLOUDINARY_CLOUD_NAME, process.cwd(), '');
const { CLOUDINARY_API_KEY } = loadEnv(import.meta.env.CLOUDINARY_API_KEY, process.cwd(), '');

import { SITE } from './src/config.mjs';
import NetlifyCMS from 'astro-netlify-cms';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const whenExternalScripts = (items = []) =>
  SITE.googleAnalyticsId ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : [];

export default defineConfig({
  site: SITE.origin,
  base: SITE.basePathname,
  trailingSlash: SITE.trailingSlash ? 'always' : 'never',

  output: 'static',

  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
  },

  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    sitemap(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    mdx(),
    NetlifyCMS({
      config: {
        backend: {
          // name: 'github',
          name: 'git-gateway',
          repo: SITE.repo,
          branch: 'main',
        },
        publish_mode: 'editorial_workflow',
        disableIdentityWidgetInjection: true,
        collections: CMSCollections,
        media_library: {
          name: 'cloudinary',
          config: {
            cloud_name: CLOUDINARY_CLOUD_NAME,
            api_key: CLOUDINARY_API_KEY,
          },
        },
      },
    }),
    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ['dataLayer.push'] },
      })
    ),

    compress({
      css: true,
      html: {
        removeAttributeQuotes: false,
      },
      img: false,
      js: true,
      svg: false,

      logger: 1,
    }),
  ],

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
