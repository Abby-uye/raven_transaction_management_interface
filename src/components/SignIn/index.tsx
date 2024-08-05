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

 return(
     <div className="flex flex-col max-h-screen lg:relative lg:flex-row lg:justify-between min-h-screen bg-white">
         <div className="lg:w-[384px] bg-[#F0EEFF]   hidden lg:block"></div>
         <div className=" iphone-14-pro-max:absolute left-[24px] top-[56px] lg:absolute lg:ml-10">
             <img className="w-24 iphone-14-pro-max:w-[107px] iphone-14-pro-max:h-[24px]
                 " src={logo} alt="logo"/>
         </div>


         <div className=" iphone-14-pro-max:left-[24px]
                 lg:w-[335px] iphone-14-pro-max:top-[144px]
                lg:top-[100px] lg:left-[580px]
              absolute gap-[40px]"
         >
             <p className="text-2xl font-aeonik mb-6 text-custom-black lg:w-[335px] "
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
                         className="w-72 h-10  pl-3 rounded-md
                                    iphone-14-pro-max:w-[382px]
                                    text-custom-placeholder-color
                                     font-plus-jakarta shadow-md placeholder-custom-placeholder-color
                                       iphone-14-pro-max:h-[56px]  outline-none"
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
                         className="w-72 h-10 shadow-md pl-3
                                    iphone-14-pro-max:w-[382px]
                                    rounded-md text-gray-800 placeholder-custom-placeholder-color
                                     iphone-14-pro-max:h-[56px]  font-plus-jakarta outline-none
                                     mb-7"

                         style={{border: "1px solid #E4E4E7"}}
                     />
                 </div>
                 <button
                     className="w-72 h-10  outline-none border-none
                                iphone-14-pro-max:w-[382px]
                                iphone-14-pro-max:h-[56px]
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
