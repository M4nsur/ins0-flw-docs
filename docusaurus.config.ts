import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Himma-flw",
  tagline: "Документация",
  favicon: "img/favicon.ico",

  url: "https://m4nsur.github.io",
  baseUrl: "/himma-flw-docs/",

  organizationName: "M4nsur",
  projectName: "himma-flw-docs",

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
            sidebarOptions: { groupPathsBy: "tag" },
          },
          tasksApi: {
            specPath: "openapi/tasks-api.yaml",
            outputDir: "docs/api/tasks",
            sidebarOptions: { groupPathsBy: "tag" },
          },
          pomodoroApi: {
            specPath: "openapi/pomodoro-api.yaml",
            outputDir: "docs/api/pomodoro",
            sidebarOptions: { groupPathsBy: "tag" },
          },
        },
      },
    ],
  ],

  themes: ["docusaurus-theme-openapi-docs"],

  themeConfig: {
    toc: {
      position: "left",
    },
    navbar: {
      items: [
        {
          href: "/",
          label: "Главная",
          position: "left",
        },
        {
          to: "/docs/frontend/overview",
          label: "Frontend Docs",
          position: "left",
        },
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "API Reference",
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
            { label: "Habits API", to: "/docs/api/habits/habits-pomodoro-api" },
            { label: "Tasks API", to: "/docs/api/tasks/tasks-api" },
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
  },
};

export default config;
