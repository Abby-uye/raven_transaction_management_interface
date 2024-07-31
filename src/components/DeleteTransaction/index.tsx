import React from 'react';
import styles from './index.module.css';
import x from "../../assets/x.png"
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}
const DeleteTransaction:React.FC<ModalProps> = ({ isOpen, onClose, onConfirm })=>{

    if (!isOpen) return null;

    return (
        <
            div className={styles.deleteTransactionModal}>
            <div className={styles.modalContent}>
                <img onClick={onClose} className={styles.times} src={x} alt={"times"}/>
                <h2>Delete Transaction?</h2>
                <p>Are you sure you want to delete this transaction?
                    <span style={{display:"block"}}>This action cannot be undone.</span>
                </p>
                <div className={styles.deleteButton}>
                    <button onClick={onConfirm} className={styles.confirmDeleteButton}>Yes, Delete</button>
                    <button onClick={onClose} className={styles.cancelDeleteButton}>No, this is a Mistake</button>
                </div>
            </div>
        </div>
    );
}
export default DeleteTransaction