import React from "react";
import logo from "../../../assets/spatch.png"
import questionIcon from "../../../assets/questionIcon.png"
import downArrowIcon from "../../../assets/downArrorIcon.png"


import styles from "./index.module.css"
const NavBar:React.FC = ()=>{
    const lastName = localStorage.getItem("lastName");
    const firstName = localStorage.getItem("firstName")

    return(
        <div className={styles.navBar}>
            <div className={styles.logo} >
                <img src={logo} alt={"logo"} width={90}/>
            </div>

            <div className={styles.sideNav}>
                <div>
                    <img width={20} src={  questionIcon} alt={"questionIcon"}/>
                </div>
                <div className={styles.dummyProfilePicture}>

                </div>

                <div className={styles.userName}>{firstName}</div>
                <div>
                    <img src={downArrowIcon} alt={"downArrowIcon"}/>
                </div>
            </div>
        </div>
    )
}
export default NavBar