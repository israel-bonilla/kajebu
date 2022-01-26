import ProductCard from "./ProductCard"
import styles from '../../styles/Products/AllProductsScreen.module.scss'

const AllProductsScreen = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Products</h1>
      {/* List of products */}
      <div className={styles.products}>
        <ProductCard image="http://links.israelb.xyz/kajebu/products/violin-coaching.webp" name="Violin Coaching" members={7} />
        <ProductCard image="http://links.israelb.xyz/kajebu/products/violin-mastery.webp" name="Violin Mastery" members={31} />
        <ProductCard image="http://links.israelb.xyz/kajebu/products/violin-mentorship.webp" name="Violin Mentorship" members={9} />
        <ProductCard image="http://links.israelb.xyz/kajebu/products/violinist-group.webp" name="Violinist Group" members={38} />
      </div>
    </div>
  )
}

export default AllProductsScreen
