import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import "./index.module.css";
export default function Home() {
  return (
    <Layout title="Главная" description="Документация Himma-flw">
      <main style={{ padding: "2rem" }}>
        <div className="mainPage">
          <h1>Himma-flw</h1>
          <h2>
            Исследовательская модульная система, предназначенная для
            экспериментального тестирования архитектурных подходов, технологий и
            методик разработки.
          </h2>
        </div>
      </main>
    </Layout>
  );
}
