import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../../styles/Dashboard/DashboardStatCard.module.scss'

const DashboardStatCard = ({ name, value, icon }) => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p className={styles.name}>{name} - Last 30 days</p>
        <p className={styles.value}>{value}</p>
      </div>
      {icon && <FontAwesomeIcon icon={icon} size="2x" />}
    </div>
  )
}

export default DashboardStatCard
