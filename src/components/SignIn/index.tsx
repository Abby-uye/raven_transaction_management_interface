import styles from './index.module.css';
import {useState} from "react";
import React from 'react';
import logo from "../../assets/spatch.png";
const SignIn :React.FC = ()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

    };
    return (
        <div className={styles.mainCont}>
            <div className={styles.logoDiv}>
                <img src={logo} alt={"logo"} width={100} className={styles.logoImage}/>
            </div>
            <div className={styles.creatAccountContainer}>
                <p className={styles.createAccount}>Sign In</p>
                <form className={styles.createAccountForm} onSubmit={handleSubmit}>
                    <div className={styles.formElements}>
                        <label className={styles.formLabel}>Email Address <span style={{color: "red"}}>*</span></label>
                        <input
                            type="email"
                            name="email"
                            placeholder={"Enter email"}
                        />
                        <label className={styles.formLabel} style={{marginTop:"20px"}} >Password <span style={{color: "red"}}>*</span></label>
                        <input
                            type="password"
                            name="password"
                            placeholder={"Enter password"}
                            required

                        />
                    </div>
                    <button style={{backgroundColor:"#7000F6"}} className={styles.submitButton} onClick={handleSubmit} type="submit">Sign In</button>
                </form>
            </div>
        </div>
    );
}
export default SignIn
