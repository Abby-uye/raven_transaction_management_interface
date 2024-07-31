import styles from './index.module.css';
import {useState} from "react";
import React from 'react';
import logo from "../../assets/spatch.png";
import {useNavigate} from "react-router-dom";
const SignIn :React.FC = ()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const emailValue = localStorage.getItem("email");
    const  passwordValue = localStorage.getItem("password");


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();


        if (email.trim() === "") {
            alert("Email field cannot be empty");
            return;
        }

        if (password.trim() === "") {
            alert("Password field cannot be empty");
            return;
        }


        if (email === emailValue && password === passwordValue) {

            setEmail(email);
            setPassword(password);
            navigate("/dashboard");
        } else {
            alert("Incorrect login credentials");
        }
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required={true}
                        />
                        <label className={styles.formLabel} style={{marginTop:"20px"}} >Password <span style={{color: "red"}}>*</span></label>
                        <input
                            type="password"
                            name="password"
                            placeholder={"Enter password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
