import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Habits & Tasks - FSD Полигон",
  tagline: "Документация экспериментального проекта на Feature-Sliced Design",
  favicon: "img/favicon.ico",

  // 👉 Правильные GitHub Pages настройки
  url: "https://m4nsur.github.io",
  baseUrl: "/himma-flw-docs/",

  organizationName: "M4nsur", // GitHub username
  projectName: "himma-flw-docs", // репозиторий с документацией

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "ru",
    locales: ["ru", "en"],
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
              categoryLinkSource: "tag",
            },
          },

          tasksApi: {
            specPath: "openapi/tasks-api.yaml",
            outputDir: "docs/api/tasks",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
        },
      },
    ],
  ],

  themes: ["docusaurus-theme-openapi-docs"],

  themeConfig: {
    navbar: {
      title: "Habits & Tasks",
      logo: {
        alt: "Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "📚 Документация",
        },
        {
          to: "/docs/api",
          label: "🔌 API Reference",
          position: "left",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://github.com/M4nsur/himma-flw-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Документация",
          items: [
            { label: "🚀 Введение", to: "/docs/intro" },
            { label: "🏗️ Архитектура", to: "/docs/architecture/overview" },
            { label: "🔌 API Reference", to: "/docs/api" },
          ],
        },
        {
          title: "Frontend",
          items: [
            { label: "⚛️ Setup", to: "/docs/frontend/setup" },
            { label: "🧪 Эксперименты", to: "/docs/experiments/overview" },
          ],
        },
        {
          title: "Backend",
          items: [
            { label: "🐹 Go Backend", to: "/docs/backend/overview" },
            { label: "🔐 Аутентификация", to: "/docs/backend/auth" },
          ],
        },
        {
          title: "Ссылки",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/M4nsur/himma-flw-docs",
            },
            {
              label: "FSD Методология",
              href: "https://feature-sliced.design/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Habits & Tasks Project. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "json", "yaml", "go", "typescript"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
