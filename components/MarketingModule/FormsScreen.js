import { faFileAlt } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const FormsScreen = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ fontWeight: '500', margin: 20 }}>Forms</h1>
      <FontAwesomeIcon icon={faFileAlt} size="10x" color="gray" />
    </div>
  )
}

export default FormsScreen
