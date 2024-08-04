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
        <div className="flex flex-col  lg:flex-row min-h-screen bg-white">

            <div  style={{position:"absolute",top:"56px",left:"117.19px"}}>
                <img className="w-24" src={logo} alt="logo"/>
            </div>
            <div className="lg:w-[384px] bg-[#F0EEFF]  hidden lg:block"></div>


            <div className="max-w-md  w-[335px] top-[155px] lg:left-[580px] gap-[40px]" style={{position: "absolute"}}>
                <p className="text-2xl font-aeonik  text-custom-black lg:w-[335px] "
                   style={{fontWeight: 500, fontSize: 40}}
                >Sign in</p>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-custom-colourtext font-plus-jakarta mb-2"
                               style={{fontWeight: 500, fontSize: 16, lineHeight: "24px"}}>Email<span
                            className="text-red-500">*</span></label>
                        <input
                            type="email"
                            placeholder="Enter Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-[330px] h-10  pl-3 rounded-md text-custom-placeholder-color shadow-md placeholder-custom-placeholder-color  outline-none"
                            style={{border: "1px solid #E4E4E7"}}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-custom-colourtextn font-plus-jakarta mb-2"
                               style={{fontWeight: 500, fontSize: 16, lineHeight: "24px"}}>Password<span
                            className="text-red-500">*</span></label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-[330px] h-10 shadow-md pl-3  rounded-md text-gray-800 placeholder-custom-placeholder-color pl-3 outline-none"

                            style={{border: "1px solid #E4E4E7"}}
                        />
                    </div>
                </form>
                <button
                    className="w-[335px] h-10  outline-none border-none bg-custom-purple text-white  font-bold rounded mt-10 "
                    type="submit"
                    style={{backgroundColor: "#7000F6"}}
                >
                    Sign in
                </button>
            </div>


        </div>
    );
};
export default SignIn
