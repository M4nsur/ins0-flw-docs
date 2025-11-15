import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/tasks/tasks-api",
    },
    {
      type: "category",
      label: "Tasks",
      link: {
        type: "doc",
        id: "api/tasks/tasks",
      },
      items: [
        {
          type: "doc",
          id: "api/tasks/получить-список-задач",
          label: "Получить список задач",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/tasks/создать-задачу",
          label: "Создать задачу",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/tasks/получить-задачу-по-id",
          label: "Получить задачу по ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/tasks/частично-обновить-задачу",
          label: "Частично обновить задачу",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/tasks/удалить-задачу",
          label: "Удалить задачу",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
