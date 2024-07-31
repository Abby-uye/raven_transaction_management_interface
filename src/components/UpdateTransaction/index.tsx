import React, {useState} from "react";
import styles from "./index.module.css"

interface UpdateTransactionProps {
    isOpen: boolean;
    onClose: () => void;

}
const UpdateTransaction:React.FC<UpdateTransactionProps> = ({ isOpen, onClose })=>{
    const [updateTransactionDirection, setTransactionDirection] = useState<string>('');
    const [updateStatus, setStatus] = useState<string>('');
    const [updateAmount, setAmount] = useState<string>('');
    const handleSubmit = () => {
        onClose();
    };
    return(
        <div className={`${styles.modalOverlay} ${isOpen ? styles.open : ''}`}>
            <div className={styles.modalContent}>
                <button onClick={onClose} className={styles.closeButton}>X</button>
                <h2>Update Transaction</h2>
                <span style={{display: "block",margin:0}}>Update transaction table</span>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}>
                    <div className={styles.formGroup}>
                        <label>Transaction Direction <span style={{color: "red"}}>*</span></label>
                        <input
                            type="text"
                            placeholder="Debit"
                            value={updateTransactionDirection}
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
                            value={updateStatus}
                            onChange={(e) => setStatus(e.target.value)}
                            required
                            className={styles.input}

                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Amount <span style={{color: "red"}}>*</span></label>
                        <input
                            type="text"
                            placeholder="Enter an amount"
                            value={updateAmount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                            className={styles.input}
                        />
                    </div>
                    <button className={styles.saveButton} type="submit">Save Changes</button>
                </form>
            </div>
        </div>
    );

}
export default UpdateTransaction