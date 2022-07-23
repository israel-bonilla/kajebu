import { faEnvelopeOpenText, faRetweet, faSearch } from "@fortawesome/free-solid-svg-icons"
import { faEnvelopeOpen, faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "../../styles/Marketing/EmailCampaignsScreen.module.scss"

const EmailCampaignsScreen = () => {
  const CampaignRow = ({ icon, name, details, stats }) => (
    <div className={styles.campaignRow}>
      <FontAwesomeIcon icon={icon} className={styles.campaignRowIcon} />
      <div className={styles.campaignRowMiddle}>
        <p>{name}</p>
        <p>{details}</p>
      </div>
      {stats && (
        <div className={styles.campaignStats}>
          <div>
            <p>0</p>
            <p>Sends</p>
          </div>
          <div>
            <p>-</p>
            <p>Opened</p>
          </div>
          <div>
            <p>-</p>
            <p>Clicked</p>
          </div>
        </div>
      )}
    </div>
  );
  
  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h1>Email Campaigns</h1>
        <FontAwesomeIcon icon={faQuestionCircle} size="lg" color="gray" />
      </div>

      {/* Nav */}
      <div className={styles.nav}>
        <ul className={styles.tabs}>
          <li>All</li>
          <li>Draft</li>
          <li>Scheduled</li>
          <li>Sent</li>
          <li>Sequence</li>
        </ul>

        <div className={styles.search}>
          <FontAwesomeIcon icon={faSearch} size="sm" color="gray" />
          <input type="text" placeholder="Search Email Campaigns..." />
        </div>
      </div>

      {/* Campaigns */}
      <div className={styles.campaignRows}>
        {
          [
            {
              icon: faRetweet,
              name: "Freebie Email Sequence",
              details: "1 email over 0 days",
              stats: true,
            },
            {
              icon: faRetweet,
              name: "Sales Page OVO Email Sequence",
              details: "8 emails over 14 days",
              stats: true,
            },
            {
              icon: faEnvelopeOpen,
              name: "Email Broadcast",
              details: "Updated January 1, 2030",
              stats: false,
            },
          ]
          .map(cr => <CampaignRow key={cr.name} icon={cr.icon} name={cr.name} details={cr.details} stats={cr.stats} />)
        }
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <FontAwesomeIcon icon={faQuestionCircle} color="blue" />
        <p>Learn More about <span style={{ color: "blue" }}>Email Campaigns</span></p>
      </div>
    </div>
  )
}

export default EmailCampaignsScreen
