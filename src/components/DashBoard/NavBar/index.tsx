import React from "react";
import logo from "../../../assets/spatch.png"
import questionIcon from "../../../assets/questionIcon.png"
import downArrowIcon from "../../../assets/Icon.png"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styles from "./index.module.css"
import {faUser} from "@fortawesome/free-solid-svg-icons";

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
                    <FontAwesomeIcon icon={faUser} style={{ fontSize: '20px', color: '#556' }} />
                </div>

                <div className={styles.userName}>{firstName}</div>
                <div className={styles.arrow}>
                    <img src={downArrowIcon} alt={"downArrowIcon"} width={11}/>
                </div>
            </div>
        </div>
    )
}
export default NavBar