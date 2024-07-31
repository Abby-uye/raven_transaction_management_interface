
import styles from './index.module.css';
import React,{ useState } from 'react';
import logo from "../../assets/spatch.png";
const CreateAnAccount: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const tokens = "RVSEC-8bb756a159b787007fa50b556b45d11d0b49c0c0c0a7b47b3364fa7d094009d2b404a106a71103b9aecb33f73b82f5be-1662632092469"
    localStorage.setItem("token", tokens);
    const storage = localStorage.getItem("token")
    console.log(storage);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

    };
    return (
        <div className={styles.appLogo}>
            <div className={styles.signUpDiv}>
                <div className={styles.logoDiv}>
                    <img width={100} src={logo} alt={"logo"}/>
                </div>
                <div className={styles.creatAccountContainer}>
                    <p className={styles.createAccount}>Create Account</p>
                    <form className={styles.createAccountForm} onSubmit={handleSubmit}>
                        <div className={styles.formElements}>
                            <label className={styles.formLabel}>First name <span style={{color: "red"}}>*</span></label>
                            <input
                                type="text"
                                name="firstName"
                                placeholder={"Enter first name"}
                                required
                            />

                            <label className={styles.formLabel}>Last name <span style={{color: "red"}}>*</span></label>
                            <input
                                type="text"
                                name="lastName"
                                placeholder={"Enter last name"}
                                required

                            />
                            <label className={styles.formLabel}>Email Address <span
                                style={{color: "red"}}>*</span></label>
                            <input
                                type="text"
                                name="email"
                                placeholder={"Enter email"}
                            />
                            <label className={styles.formLabel}>Password <span style={{color: "red"}}>*</span></label>
                            <input
                                type="password"
                                name="password"
                                placeholder={"Enter password"}
                                required

                            />
                        </div>
                        <button className={styles.submitButton} onClick={handleSubmit} type="submit" style={{backgroundColor:"#7000F6"}}>Create Account
                        </button>
                    </form>
                </div>
            </div>

            <div className={styles.purpleDiv}></div>
        </div>
    );
};

export default CreateAnAccount;
