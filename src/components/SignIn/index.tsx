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
        <div className="flex flex-col max-h-screen relative md:flex-row md:justify-between min-h-screen bg-white">
            <div className="md:w-[384px] bg-[#F0EEFF]  hidden lg:block"></div>
            <div>
                <img className="w-[107px] absolute left-[27px] top-[56px] h-[24px]
                 " src={logo} alt="logo"/>
            </div>

            <div className="
                 md:w-[335px]
              absolute  top-[100px] md:left-[580px]
              gap-[40px] md:h-[528px] left-[24px]"
            >
                <p className=" font-aeonik font-[500px] mb-6 text-custom-black md:w-[335px] text-[30px] "
                >Sign in</p>
                <form className="space-y-4" onSubmit={handleSubmit}>

                    <div className="mb-2">
                        <label className="block text-custom-colourtext font-plus-jakarta mb-1"
                               style={{fontWeight: 500, fontSize: 16, lineHeight: "24px"}}>Email Address<span
                            className="text-red-500">*</span></label>
                        <input
                            type="email"
                            placeholder="Enter Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-72 h-10 pl-3 rounded-md
                                    text-custom-placeholder-color
                                     font-plus-jakarta shadow-md
                                        outline-none"
                            style={{border: "1px solid #E4E4E7"}}
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-custom-colourtextn font-plus-jakarta mb-1"
                               style={{fontWeight: 500, fontSize: 16, lineHeight: "24px"}}>Password<span
                            className="text-red-500">*</span></label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className=" w-72 h-10 shadow-md pl-3
                                    rounded-md text-gray-800 placeholder-custom-placeholder-color
                                    font-plus-jakarta outline-none
                                     mb-7"

                            style={{border: "1px solid #E4E4E7"}}
                        />
                    </div>
                    <button
                        className="outline-none border-none

                               w-72 h-10
                                bg-custom-purple text-white
                                 font-bold rounded "
                        type="submit"
                        style={{backgroundColor: "#7000F6", fontWeight: 500}}
                    >
                       Sign in
                    </button>
                </form>
            </div>

        </div>
    );
};
export default SignIn
