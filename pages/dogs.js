import * as superagent from "superagent";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Dogs() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dogs!</title>
        <meta name="description" content="I couldn't resist" />
      </Head>

      <main className={styles.main}>
        <h1
          className={styles.title}
          style={{ padding: "20px", marginTop: "50px" }}
        >
          The Dogs
        </h1>
        <img src="dogs.jpg" style={{ width: "45%" }} />

        <div
          className={styles.grid}
          style={{ marginTop: 0, maxWidth: "1200px" }}
        >
          <a href="/" className={styles.card}>
            <h2 style={{ margin: 0 }}> &larr;&nbsp;Take&nbsp;me&nbsp;back</h2>
          </a>

          <a
            href="https://sentry.io/organizations/FILL-IN-ORG-SLUG/performance/summary/?project=FILL-IN-PROJ-ID-NUM&query=&showTransactions=recent&statsPeriod=24h&transaction=%2Fdogs"
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
