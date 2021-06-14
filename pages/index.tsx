import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Stare here" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>I'm a Next.js app!</h1>

        <p className={styles.description}>
          I'm using Sentry's newest SDK,{" "}
          <code className={styles.code} style={{ fontSize: "100%" }}>
            @sentry/nextjs
          </code>
        </p>

        <div className={styles.grid} style={{ maxWidth: "1000px" }}>
          <a href="/dogs" className={styles.card}>
            <h2 style={{ margin: 0 }}>Show me the dogs &rarr;</h2>
          </a>

          <a
            href="https://sentry.io/organizations/FILL-IN-ORG-SLUG/performance/summary/?project=FILL-IN-PROJ-ID-NUM&query=&showTransactions=recent&statsPeriod=24h&transaction=%2F"
            className={styles.card}
          >
            <h2 style={{ margin: 0 }}>See transactions &rarr;</h2>
          </a>
        </div>
      </main>
      <script src="/fetch.js"></script>
    </div>
  );
}
