import { faUsers } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const AffiliatesScreen = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ fontWeight: '500', margin: 20 }}>Affiliates</h1>
      <FontAwesomeIcon icon={faUsers} size="10x" color="gray" />
    </div>
  )
}

export default AffiliatesScreen