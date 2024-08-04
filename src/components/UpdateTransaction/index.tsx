import React, {useState} from "react";
import styles from "./index.module.css"
import cancel from "../../assets/cancelButton.png"

interface AddNewTransactionProps {
    isOpen: boolean;
    onClose: () => void;
}
const UpdateTransaction:React.FC<AddNewTransactionProps> = ({ isOpen, onClose })=>{
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
                className={`fixed right-0 top-0 w-362px h-full bg-white p-6 border border-gray-300 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <button
                    onClick={onClose}
                    className="rounded-full bg-custom-grayed w-6 h-6 flex items-center outline-none border-none justify-center"
                >
                    <img
                        className="w-4 h-4"
                        src={cancel}
                        alt="cancelButton"
                    />
                </button>
                <h2 className="text-4xlg font-extrabold mb-4 font-aeonik"
                >Update Transaction</h2>
                <p className={"text-custom-gray mb-4 text-xs font-aeonik co"}>Add a new transaction to the table</p>

                <div className="flex flex-col space-y-4">
                    <label className="block text-gray-700 mb-2">Transaction Description <span
                        className="text-red-500">*</span></label>
                    <select className="w-72 h-10 pl-4 pr-18 border border-gray-300 outline-none rounded-md ">
                        <option>Debit</option>
                        <option>Credit</option>
                    </select>
                    <label className="block text-gray-700 mb-2">Status<span
                        className="text-red-500">*</span></label>
                    <select
                        className="w-72 h-10 pl-4 pr-8 border border-gray-300 outline-none rounded-md ">
                        <option>Success</option>
                        <option>Pending</option>
                        <option>Failed</option>
                    </select>


                </div>


                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Amount <span
                            className="text-red-500">*</span></label>
                        <input
                            type="text"
                            placeholder="Enter an amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                            className="w-72 h-10 border border-custom-gray rounded-md text-gray-800   outline-none"
                        />
                    </div>
                    <button
                        className="w-72 h-10  bg-custom-purple text-white outline-none border-none  font-bold rounded mt-40"
                        type="submit"
                        style={{backgroundColor:"#7000F6"}}
                    >
                       Save Changes
                    </button>
                </form>
            </div>
        </div>
    )
}
export default UpdateTransaction