import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const EmailCampaignsScreen = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ fontWeight: '500', margin: 20 }}>Email Campaigns</h1>
      <FontAwesomeIcon icon={faEnvelopeOpenText} size="10x" color="gray" />
      {/* Table */}
    </div>
  )
}

export default EmailCampaignsScreen
