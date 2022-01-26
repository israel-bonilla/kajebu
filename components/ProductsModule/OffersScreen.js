import { faDesktop, faMoneyCheckAlt, faTicketAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from '../../styles/Products/OffersScreen.module.scss'
import OffersTable from "./OffersTable"

const OffersScreen = () => {
  const offersData = [
    {
      image: "http://links.israelb.xyz/kajebu/products/violin-coaching.webp",
      title: "Violin Coaching",
      products: 1,
      price: 187,
      netRevenue: 1309,
    },
    {
      image: "http://links.israelb.xyz/kajebu/products/violin-mastery.webp",
      title: "Violin Mastery",
      products: 1,
      price: 35,
      subscription: true,
      netRevenue: 1085,
    },
    {
      image: "http://links.israelb.xyz/kajebu/products/violin-mentorship.webp",
      title: "Violin Mentorship",
      products: 1,
      price: 229,
      netRevenue: 2061,
    },
    {
      image: "http://links.israelb.xyz/kajebu/products/violinist-group.webp",
      title: "Violinist Group",
      products: 1,
      price: 19,
      netRevenue: 722,
    },
  ];

  return (
    <div className={styles.container}>
      <h1>Offers</h1>
      {/* Options */}
      <div className={styles.options}>
        <FontAwesomeIcon icon={faTicketAlt} /><span>Coupons</span>
        <FontAwesomeIcon icon={faMoneyCheckAlt} /><span>Payments</span>
        <FontAwesomeIcon icon={faDesktop} /><span>Sales Pages</span>
      </div>

      {/* 3 Stat Cards */}
      <div className={styles.stats}>
        <div className={styles.statCard}>
          <p className={styles.statValue}>4</p>
          <p className={styles.statName}>Purchases</p>
          <p className={styles.statPeriod}>Last 30 Days</p>
        </div>

        <div className={styles.statCard}>
          <p className={styles.statValue}>$340</p>
          <p className={styles.statName}>Net Revenue</p>
          <p className={styles.statPeriod}>Last 30 Days</p>
        </div>

        <div className={styles.statCard}>
          <p className={styles.statValue}>${offersData.map(offer => offer.netRevenue).reduce((acc, revenue) => acc + revenue, 0)}</p>
          <p className={styles.statName}>Net Revenue</p>
          <p className={styles.statPeriod}>All Time</p>
        </div>
      </div>

      {/* Table of Products/Price/Net Revenue/Options */}
      <div>
        <OffersTable data={offersData} />
      </div>
    </div>
  )
}

export default OffersScreen
