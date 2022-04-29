import { faChartBar, faCheckCircle, faEllipsisH, faEye, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import styles from '../../styles/Products/OffersTable.module.scss';

const OffersTable = ({ data }) => {
  return <table className={styles.container}>
    <tr>
      <th>Title</th>
      <th>Products</th>
      <th>Price</th>
      <th>Net Revenue</th>
      <th></th>
    </tr>
    {data && data.map(({ image, title, products, price, netRevenue, subscription }) => (
      <tr key={title}>
        <td>
          {/* <Image src={image} width={66} height={44} /> */}
          <img src={image} alt="" width="66" height="44" />
          <span>{title}</span>
        </td>
        <td>{products}</td>
        <td>${`${price}.00`} USD {subscription && "monthly subscription"}</td>
        <td>${`${netRevenue}.00`} USD</td>
        <td>
          <FontAwesomeIcon icon={faCheckCircle} size="md" color="#46A790" />
          <FontAwesomeIcon icon={faEye} size="md" color="gray" />
          <FontAwesomeIcon icon={faPen} size="md" color="gray" />
          <FontAwesomeIcon icon={faChartBar} size="md" color="gray" />
          <FontAwesomeIcon icon={faEllipsisH} size="md" color="gray" />
        </td>
      </tr>
    ))}
  </table>;
};

export default OffersTable;
