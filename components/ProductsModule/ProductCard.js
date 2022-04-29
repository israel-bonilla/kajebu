import { faUserFriends } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import styles from '../../styles/Products/ProductCard.module.scss'

const ProductCard = ({ image, name, members }) => {
  return (
    <div className={styles.container}>
      {/* <Image src={image} alt="Product Image" width={250} height={167} className={styles.image} /> */}
      <img src={image} alt={`Product image for ${name}`} width="250" height="167" className={styles.image} />
      <p className={styles.name}>{name}</p>
      <FontAwesomeIcon icon={faUserFriends} color="gray" className={styles.icon} /><span className={styles.members}>{members} Members</span>
    </div>
  )
}

export default ProductCard
