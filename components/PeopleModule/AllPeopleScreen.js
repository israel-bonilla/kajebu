import { faUsers } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const AllPeopleScreen = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ fontWeight: '500', margin: 20 }}>All People</h1>
      <FontAwesomeIcon icon={faUsers} size="10x" color="gray" />

      {/* filter + search input + actions */}
      {/* Table of people */}
    </div>
  )
}

export default AllPeopleScreen
