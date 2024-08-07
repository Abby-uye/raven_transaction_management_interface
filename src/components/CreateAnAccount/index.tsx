import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/spatch.png";

const CreateAnAccount: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const tokens = "RVSEC-8bb756a159b787007fa50b556b45d11d0b49c0c0c0a7b47b3364fa7d094009d2b404a106a71103b9aecb33f73b82f5be-1662632092469";
    localStorage.setItem("token", tokens);
    const storage = localStorage.getItem("token");
    console.log(storage);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (firstName === "") {
            alert("First name field cannot be empty");
            return;
        }

        if (lastName === "") {
            alert("Last name field cannot be empty");
            return;
        }

        if (password === "") {
            alert("Password field cannot be empty");
            return;
        }

        if (email === "") {
            alert("Email field cannot be empty");
            return;
        }

        setFirstName(firstName);
        localStorage.setItem("firstName", firstName);

        setLastName(lastName);
        localStorage.setItem("lastName", lastName);

        setPassword(password);
        localStorage.setItem("password", password);

        setEmail(email);
        localStorage.setItem("email", email);

        if (password !== "" && firstName !== "" && lastName !== "" && email !== "") {
            navigate("/sign_in");
        }
    };

    return (
        <div className="flex flex-col max-h-screen relative md:flex-row md:justify-between min-h-screen bg-white">
            <div >
                <img className="w-[107px] absolute left-[24px] top-[56px] h-[24px]
                 " src={logo} alt="logo"/>
            </div>

                <div className=" sm:left-[240px]
                 lg:w-[335px]
              absolute  top-[100px] lg:left-[380px]
              gap-[40px] lg:h-[528px]"
                     >
                        <p className="text-2xl font-aeonik mb-6 text-custom-black lg:w-[335px] "
                        style={{fontWeight:500,fontSize:40}}
                        >Create Account</p>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="mb-2">
                                <label className="block text-custom-colourtext font-plus-jakarta mb-1" style={{fontWeight:500,fontSize:16,lineHeight:"24px"}}>First name<span
                                    className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    placeholder="Enter First name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                    className="lg:w-[311px] placeholder-custom-placeholder-color
                                    sm:w-[382px]
                                    sm:h-[56px] pl-3 drop-shadow-md
                                    font-plus-jakarta rounded-md text-custom-placeholder-color outline-none"
                                    style={{border:"1px solid #E4E4E7"}}
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block  text-custom-colourtext font-plus-jakarta mb-1" style={{fontWeight:500,fontSize:16,lineHeight:"24px"}}>Last name<span
                                     className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    placeholder="Enter Last name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                    className="lg:w-[311px]  pl-3 shadow-md
                                    sm:w-[382px] text-custom-placeholder-color
                                    sm:h-[56px]
                                     font-plus-jakarta placeholder-custom-placeholder-color outline-none"
                                    style={{border:"1px solid #E4E4E7"}}/>

                            </div>
                            <div className="mb-2">
                                <label className="block text-custom-colourtext font-plus-jakarta mb-1" style={{fontWeight:500,fontSize:16,lineHeight:"24px"}}>Email Address<span
                                    className="text-red-500">*</span></label>
                                <input
                                    type="email"
                                    placeholder="Enter Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="lg:w-[311px] pl-3 rounded-md
                                    sm:w-[382px]
                                    text-custom-placeholder-color
                                     font-plus-jakarta shadow-md placeholder-custom-placeholder-color
                                       sm:h-[56px]  outline-none"
                                    style={{border:"1px solid #E4E4E7"}}
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block text-custom-colourtextn font-plus-jakarta mb-1" style={{fontWeight:500,fontSize:16,lineHeight:"24px"}}>Password<span
                                    className="text-red-500">*</span></label>
                                <input
                                    type="password"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="lg:w-[311px] shadow-md pl-3
                                    sm:w-[382px]
                                    rounded-md text-gray-800 placeholder-custom-placeholder-color
                                     sm:h-[56px]  font-plus-jakarta outline-none
                                     mb-7"

                                    style={{border:"1px solid #E4E4E7"}}
                                />
                            </div>
                            <button
                                className="lg:w-[311px] outline-none border-none
                                sm:w-[382px]
                                sm:h-[56px]
                                bg-custom-purple text-white
                                 font-bold rounded "
                                type="submit"
                                style={{backgroundColor: "#7000F6",fontWeight:500}}
                            >
                                Create Account
                            </button>
                        </form>
                    </div>


            <div className="lg:w-[384px] bg-[#F0EEFF]  hidden lg:block"></div>
        </div>
    );
};

export default CreateAnAccount;
