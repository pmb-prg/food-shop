import Link from "next/link"
import styles from "./MenuPage.module.css"
import Card from "../modules/Card"

function MenuPages({data}) {
  return (
    <div className={styles.container}>
      <h2>Menu</h2>
      <div className={styles.subContainer}>
        {data.map((i) =>(
            <Card key={i.id} { ... i}/>
        ))}
      </div>
    </div>
  )
}

export default MenuPages