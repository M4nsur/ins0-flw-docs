import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/habits/habits-api",
    },
    {
      type: "category",
      label: "Habits",
      items: [
        {
          type: "doc",
          id: "api/habits/get-all-habits",
          label: "Get all habits",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/habits/create-habit",
          label: "Create habit",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/habits/get-habit-by-id",
          label: "Get habit by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/habits/update-habit",
          label: "Update habit",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/habits/delete-habit",
          label: "Delete habit",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Completions",
      items: [
        {
          type: "doc",
          id: "api/habits/get-completion-history",
          label: "Get completion history",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/habits/mark-habit-as-completed",
          label: "Mark habit as completed",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/habits/get-completion-by-date",
          label: "Get completion by date",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/habits/delete-completion",
          label: "Delete completion",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Statistics",
      items: [
        {
          type: "doc",
          id: "api/habits/get-habit-statistics",
          label: "Get habit statistics",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
