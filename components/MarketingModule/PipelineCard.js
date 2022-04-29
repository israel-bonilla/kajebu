import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import styles from '../../styles/Marketing/PipelineCard.module.scss';

const PipelineCard = ({ name, visitors, image, pages }) => {
  return (
    <div className={styles.container}>
      <h2>{name}</h2>
      <span>
        <FontAwesomeIcon icon={faUserFriends} color="gray" />
        {visitors} Visitors
      </span>
      <div className={styles.image}>
        {/* <Image src={image} alt={name + " image"} width={300} height={225} /> */}
        <img src={image} alt={name + " image"} width="300" height="225" />
      </div>
      <p>{pages} Pages</p>
    </div>
  )
}

export default PipelineCard
