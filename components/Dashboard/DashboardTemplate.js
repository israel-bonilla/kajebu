import Sidebar from "../Sidebar/Sidebar"
import Header from "./Header"
import styles from '../../styles/Dashboard/DashboardTemplate.module.scss'

const DashboardTemplate = ({ Screen }) => {
  return (
    <div className={styles.container}>
      <Sidebar className={styles.sidebar} />
      <section className={styles.right}>
        <Header />
        <Screen />
      </section>
    </div>
  )
}

export default DashboardTemplate
