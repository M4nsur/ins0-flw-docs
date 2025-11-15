import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/pomodoro/pomodoro-api",
    },
    {
      type: "category",
      label: "Pomodoro",
      items: [
        {
          type: "doc",
          id: "api/pomodoro/get-all-pomodoro-sessions",
          label: "Get all pomodoro sessions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pomodoro/start-pomodoro-session",
          label: "Start pomodoro session",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/pomodoro/get-session-by-id",
          label: "Get session by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/pomodoro/complete-pomodoro-session",
          label: "Complete pomodoro session",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/pomodoro/delete-session",
          label: "Delete session",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
