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
            div className="fixed left-0 right-0 w-[424px] border rounded-2xl h-[280px] bg-white flex  z-50">
            <div className={styles.modalContent}>
                <div className={"rounded-2xl w-[24px]   h-[24px]"}>
                    <img onClick={onClose} className={styles.times} src={x} alt={"times"}/>
                </div>

                <h2 className={"font-aeonik font-[500px] text-[24px] text-[#1B1B1B] "}>Delete Transaction?</h2>
                <p className={"font-aeonik font-[500px] text-[16px] text-[#676767] "}>Are you sure you want to delete this transaction?
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