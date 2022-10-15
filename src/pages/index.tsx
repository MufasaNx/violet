import type { NextPage } from "next";
import Head from "next/head";
import CrossChain from "../components/CrossChain/CrossChain";
import styles from "../styles/Home.module.scss";
import { WalletOutline } from "mdi-material-ui";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Violet - Cross-chain Crypto Wallet</title>
        <meta name="description" content="A Simple Cross-chain Crypto Wallet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.heroSection}>
          <button className={styles.connectWalletButton}>
            <WalletOutline /> Connect Wallet
          </button>
          <div>
            <h1 className={styles.title}>
              Welcome to <a href="#">Violet!</a>
            </h1>
            <p className={styles.description}>A Simple Cross-chain Crypto Wallet</p>
          </div>
          <CrossChain />
        </div>
      </main>
    </div>
  );
};

export default Home;
