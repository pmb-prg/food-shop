import styles from "./Banner.module.css";
import Link from "next/link";
function Banner() {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <h2>Food Shop</h2>
            <p>Food delivery and Takeout!</p>
            <span>
                BotoFood is an online food ordering and delivery platform launched by
                Uber in 2014. Meals are delivered by couriers using cars, scooters,
                bikes, or on foot.
            </span>
            <Link href="/menu">See All</Link>
        </div>
        <div className={styles.right}>
            <img src="/images/banner.png" alt="Food image"/>
        </div>
    </div>
  )
}

export default Banner