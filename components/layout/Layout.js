import Link from "next/link"
import styles from "./Layout.module.css"
function Layout({children}) {
  return (
    <>
        <header className={styles.header}>
            <div className={styles.left}>
                <Link href="/">Food Shop</Link>
            </div>
            <div className={styles.right}>
                <Link href="/menu">Menu</Link>
                <Link href="/categories">Caegories</Link>

            </div>
        </header>
        <div className={styles.container}>{children}</div>
        <footer className={styles.footer}>
            <a href="https://pmbpg.ir" target="_blank" rel="noreferrer">PMBPG</a>
            <p>Next.js | Food Shop Project &copy;</p>
        </footer>
    </>
  )
}

export default Layout