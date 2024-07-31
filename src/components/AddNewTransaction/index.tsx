import React, {useState} from "react";
import styles from "./index.module.css"

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
        <div className={`${styles.sidebarOverlay} ${isOpen ? styles.open : ''}`}>
            <div className={styles.addNewTransactionContent}>
                <button onClick={onClose} className={styles.closeButton}>X</button>
                <h2>Add New Transaction</h2>
                <p>Add a new transaction to the table</p>
                <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                    <div className={styles.formGroup}>
                        <label>Transaction Direction <span style={{color: "red"}}>*</span></label>
                        <input
                            type="text"
                            placeholder="Debit"
                            value={transactionDirection}
                            onChange={(e) => setTransactionDirection(e.target.value)}
                            required
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Status <span style={{color: "red"}}>*</span></label>
                        <input
                            type="text"
                            placeholder="Pending"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            required
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Amount <span style={{color:"red"}}>*</span> </label>
                        <input
                            type="text"
                            placeholder="Enter an amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                            className={styles.input}
                        />
                    </div>
                    <button className={styles.addButton} type="submit">Add Transaction</button>
                </form>
            </div>
        </div>
    )
}
export default AddNewTransaction