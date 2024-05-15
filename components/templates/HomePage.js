import Attributes from "../modules/Attributes"
import Banner from "../modules/Banner"
import Definition from "../modules/Definition"
import Companies from "../modules/Companies"
import styles from "./HomePage.module.css"
import Instruction from "../modules/Instruction"
function HomePage() {
  return (
    <div className={styles.container}>
        <Banner />
        <Attributes />
        <Definition />
        <Companies />
        <Instruction />
    </div>
  )
}

export default HomePage