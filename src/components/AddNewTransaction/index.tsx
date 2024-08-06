import React, {useState} from "react";
import styles from "./index.module.css"
import cancel from "../../assets/cancelButton.png"

interface AddNewTransactionProps {
    isOpen: boolean;
    onClose: () => void;
}
const AddNewTransaction:React.FC<AddNewTransactionProps> = ({ isOpen, onClose })=>{
    const [transactionDirection, setTransactionDirection] = useState<string>('');
    const [status, setStatus] = useState<string>('');
    const [amount, setAmount] = useState<string>('');

    const handleSubmit = () => {
        console.log({
            transactionDirection,
            status,
            amount,
        });
        onClose();
    };

    return (
        <div  className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 z-50' : 'opacity-0 pointer-events-none'}`}>
            <div
                className={`fixed right-0 top-0 w-362px iphone-14-pro-max:w-full h-full bg-white p-6 border border-gray-300 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <button
                    onClick={onClose}
                    className="rounded-full bg-custom-grayed w-[32px] h-[32px] flex items-center outline-none border-none justify-center"
                >
                    <img
                        className="w-[32px] h-[32px] "
                        src={cancel}
                        alt="cancelButton"
                    />
                </button>
                <h2 className="text-[24px] text[#0A090B] font-[500px] mt-[15px] font-aeonik"
                >Add New Transaction</h2>
                <p className={"text-[#7F7D83] font-[400px] mb-4 text-[14px] font-aeonik "}>Add a new transaction to the table</p>

                <div className="flex flex-col ">
                    <label className="font-plus-jakarta font-[500px] mt-[15px] text-[16px] text-[#09090B] ">Transaction Description <span
                        className="text-red-500">*</span></label>
                    <select className="w-72 h-10 font-plus-jakarta font-[500px] text-[16px] pl-4 pr-18 border text-[#71717A] border-gray-300 outline-none rounded-md ">
                        <option>Debit</option>
                        <option>Credit</option>
                    </select>
                    <label className="font-plus-jakarta font-[500px] mt-[15px] text-[16px] text-[#09090B] ">Status<span
                        className="text-red-500">*</span></label>
                    <select
                        className="w-72 h-10 pl-4 pr-8  font-plus-jakarta font-[500px] text-[16px] border border-gray-300 text-[#71717A] outline-none rounded-md ">
                        <option>Success</option>
                        <option>Pending</option>
                        <option>Failed</option>
                    </select>


                </div>


                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}>

                <div className="mb-4 flex flex-col">
                        <label className="font-plus-jakarta font-[500px] text-[16px] text-[#09090B] mt-[15px] ">Amount <span
                            className="text-red-500">*</span></label>
                        <input
                            type="text"
                            placeholder="Enter an amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                            className="w-72 h-10 font-plus-jakarta  font-[500px] text-[16px] border  rounded-md text-[#71717A]  pl-[10px] outline-none"
                        />
                    </div>
                    <button
                        className="w-72 h-10 outline-none border-none bg-custom-purple text-white  font-bold rounded mt-[85px]"
                        type="submit"
                            style={{backgroundColor:"#7000F6"}}
                            >
                        Add Transaction
                    </button>
                </form>
            </div>
        </div>
    )
}
export default AddNewTransaction