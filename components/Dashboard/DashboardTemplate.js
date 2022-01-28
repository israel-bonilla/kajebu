import Sidebar from "../Sidebar/Sidebar"
import Header from "./Header"
import styles from '../../styles/Dashboard/DashboardTemplate.module.scss'
import Head from "next/head"

const DashboardTemplate = ({ Screen }) => {
  return (
    <>
      <Head>
        <title>Kajebu Business Platform</title>
        <meta name="description" content="Online Knowledge Business Suite" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <Sidebar className={styles.sidebar} />
        <section className={styles.right}>
          <Header />
          <Screen />
        </section>
      </div>
    </>
  )
}

export default DashboardTemplate
