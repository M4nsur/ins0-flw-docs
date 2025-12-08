import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";

export default function Home() {
  return (
    <Layout title="Главная" description="Документация ins0-flw">
      <main className={styles.container}>
        {/* Hero */}
        <section className={styles.hero}>
          <h1 className={styles.title}>Himma-flw Documentation</h1>
          <p className={styles.subtitle}>
            Исследовательская модульная система для тестирования архитектурных
            подходов, технологий и методик разработки.
          </p>
        </section>

        {/* Navigation cards */}
        <section className={styles.cardsGrid}>
          <Link className={styles.card} to="/docs/api/habits/create-habit">
            <h3>API Reference</h3>
            <p>Документация API модулей: Tasks, Habits, Pomodoro.</p>
          </Link>

          <Link className={styles.card} to="/docs/frontend/overview">
            <h3>Frontend Docs</h3>
            <p>
              Архитектура фронтенда, структура проекта, FSD, UI и методы
              разработки.
            </p>
          </Link>

          <Link
            className={styles.card}
            to="https://github.com/M4nsur/himma-flw"
          >
            <h3>GitHub — Frontend</h3>
            <p>Исходный код клиентской части.</p>
          </Link>

          <Link
            className={styles.card}
            to="https://github.com/M4nsur/himma-flw-api"
          >
            <h3>GitHub — Backend API</h3>
            <p>Серверная часть системы Himma-flw.</p>
          </Link>
        </section>
      </main>
    </Layout>
  );
}
