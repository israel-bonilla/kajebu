import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons"
import { faEllipsisH, faPen } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const EventsScreen = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ fontWeight: '500', margin: 20 }}>Events</h1>
      <FontAwesomeIcon icon={faCalendarAlt} size="10x" color="gray" />
      <div style={{marginTop: 20}}>
        <div>
          <input type="text" placeholder="Search Events" />
        </div>
        <div>
          <h2>Upcoming Events</h2>
        </div>

        <div>
          <div>Lorem Ipsum Webinar 1</div>
          <div>
            <p>March 18, 2022 10:00 AM (CST)</p>
            <FontAwesomeIcon icon={faPen} color="gray" />
            <FontAwesomeIcon icon={faEllipsisH} color="gray" />
          </div>
        </div>

        <div>
          <div>Lorem Ipsum Webinar 2</div>
          <div>
            <p>April 04, 2022 10:00 AM (CST)</p>
            <FontAwesomeIcon icon={faPen} color="gray" />
            <FontAwesomeIcon icon={faEllipsisH} color="gray" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventsScreen
