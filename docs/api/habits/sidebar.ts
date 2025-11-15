import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/habits/habits-pomodoro-api",
    },
    {
      type: "category",
      label: "Habits",
      link: {
        type: "doc",
        id: "api/habits/habits",
      },
      items: [
        {
          type: "doc",
          id: "api/habits/получить-список-привычек",
          label: "Получить список привычек",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/habits/создать-привычку",
          label: "Создать привычку",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/habits/получить-привычку-по-id",
          label: "Получить привычку по ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/habits/обновить-привычку-частично",
          label: "Обновить привычку (частично)",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/habits/удалить-привычку",
          label: "Удалить привычку",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Habit Completions",
      link: {
        type: "doc",
        id: "api/habits/habit-completions",
      },
      items: [
        {
          type: "doc",
          id: "api/habits/получить-историю-выполнения-привычки",
          label: "Получить историю выполнения привычки",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/habits/отметить-выполнение-привычки",
          label: "Отметить выполнение привычки",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/habits/получить-выполнение-за-дату",
          label: "Получить выполнение за дату",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/habits/удалить-отметку-выполнения",
          label: "Удалить отметку выполнения",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Statistics",
      link: {
        type: "doc",
        id: "api/habits/statistics",
      },
      items: [
        {
          type: "doc",
          id: "api/habits/получить-статистику-по-привычке",
          label: "Получить статистику по привычке",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/habits/получить-данные-для-графиков",
          label: "Получить данные для графиков",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/habits/contribution-calendar-для-привычки",
          label: "Contribution calendar для привычки",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Pomodoro",
      link: {
        type: "doc",
        id: "api/habits/pomodoro",
      },
      items: [
        {
          type: "doc",
          id: "api/habits/получить-список-pomodoro-сессий",
          label: "Получить список Pomodoro-сессий",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/habits/начать-pomodoro-сессию",
          label: "Начать Pomodoro-сессию",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/habits/завершить-pomodoro-сессию",
          label: "Завершить Pomodoro-сессию",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
