import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Himma-flw ",
  tagline: "Документация ",
  favicon: "img/favicon.ico",

  url: "https://m4nsur.github.io",
  baseUrl: "/himma-flw-docs/",

  organizationName: "M4nsur", // GitHub username
  projectName: "himma-flw-docs", // репозиторий с документацией

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "ru",
    locales: ["ru"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/docs",
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/M4nsur/himma-flw-docs/tree/main/docs/",
          docItemComponent: "@theme/ApiItem",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "api",
        docsPluginId: "classic",
        config: {
          habitsApi: {
            specPath: "openapi/habits-api.yaml",
            outputDir: "docs/api/habits",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          tasksApi: {
            specPath: "openapi/tasks-api.yaml",
            outputDir: "docs/api/tasks",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          pomodoroApi: {
            specPath: "openapi/pomodoro-api.yaml",
            outputDir: "docs/api/pomodoro",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
        },
      },
    ],
  ],

  themes: ["docusaurus-theme-openapi-docs"],

  themeConfig: {
    navbar: {
      title: "Himma-flw",
      logo: {
        alt: "Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          label: "📘 Введение",
          position: "left",
        },
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "🔌 API Reference",
        },
        {
          href: "https://github.com/M4nsur/himma-flw",
          label: "GitHub",
          position: "right",
        },
      ],
    },

    footer: {
      style: "dark",
      links: [
        {
          title: "API Reference",
          items: [
            {
              label: "🔌 Habits API",
              to: "/docs/api/habits/habits-pomodoro-api",
            },
            { label: "✅ Tasks API", to: "/docs/api/tasks/tasks-api" },
          ],
        },
        {
          title: "Ссылки",
          items: [
            {
              label: "GitHub Docs",
              href: "https://github.com/M4nsur/himma-flw-docs",
            },
            {
              label: "Frontend",
              href: "https://github.com/M4nsur/himma-flw",
            },
            {
              label: "Backend API",
              href: "https://github.com/M4nsur/himma-flw-api",
            },
          ],
        },
      ],
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "json", "yaml", "go", "typescript"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
