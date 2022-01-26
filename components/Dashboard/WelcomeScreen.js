import DashboardStatCard from "./DashboardStatCard"
import styles from '../../styles/Dashboard/WelcomeScreen.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarAlt, faComments, faLightbulb } from "@fortawesome/free-regular-svg-icons"
import { faEnvelopeOpenText, faWallet } from "@fortawesome/free-solid-svg-icons"

const WelcomeScreen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <img src="" alt="" />
        <h1 style={{fontWeight: 500}}>Welcome Back.</h1>        
      </div>

      <div className={styles.cards}>
        <DashboardStatCard name="Opt-ins" value={4} icon={faEnvelopeOpenText} />
        <DashboardStatCard name="Sales" value="$1,410" icon={faWallet} />
        <DashboardStatCard name="Comments" value={2} icon={faComments} />
        <DashboardStatCard name="Members" value={103} icon={faCalendarAlt} />
      </div>

      <div className={styles.guide}>
        <img src="" alt="" />
        <div className={styles.guideInfo}>
            <FontAwesomeIcon icon={faLightbulb} color="orange" size="md" />
            <span style={{marginLeft: 5}}>Guides</span>
            <p className={styles.guideTitle}>Getting Started with Your Products</p>
            <p className={styles.guideDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod cumque dolor minus amet, perspiciatis dolores.</p>
            <a>Read more</a>
        </div>
      </div>
    </div>
  )
}

export default WelcomeScreen
