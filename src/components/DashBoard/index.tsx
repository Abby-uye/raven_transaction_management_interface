import React, {useEffect, useState} from "react";
import styles from "./index.module.css"
import DeleteTransaction from "../DeleteTransaction";
import AddNewTransaction from "../AddNewTransaction";
import UpdateTransaction from "../UpdateTransaction";
import NavBar from "./NavBar";
import addTransactionImage from "../../assets/add.png"
import editIcon from "../../assets/edit-03.png"
import deleteIcon from "../../assets/trash-01.png"
import  { useGetTransactionsQuery} from "../../redux/slice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBox,
    faChartBar, faCheckCircle, faClipboardList,
    faCog, faExchangeAlt,
    faPiggyBank, faReceipt,
    faTachometerAlt, faUserFriends
} from '@fortawesome/free-solid-svg-icons';


const Dashboard: React.FC = () => {
    const authenticationToken = "RVSEC-8bb756a159b787007fa50b556b45d11d0b49c0c0c0a7b47b3364fa7d094009d2b404a106a71103b9aecb33f73b82f5be-1662632092469";
    localStorage.setItem("token", authenticationToken);

    const {data: transactions} = useGetTransactionsQuery({});
    console.log("The list of transactions: ", transactions);
    const [referenceList, setReferenceList] = useState<string[]>([]);

    const [amount, setAmountList] = useState<string[]>([]);

    const [currency, setCurrencyList] = useState<string[]>([]);
    const [transactionDateList,setTransactionDateList] = useState<string[]>([])
    const[ updatedLastDateList ,setUpdatedLastDateList] = useState<string[]>([])
    const [transactionDirction,setTransactionDirection] =useState<String[]>([])
    const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
    const [addTransactionModal, setAddTransactionModal] = useState<boolean>(false);
    const [isUpdateModalOpen, setUpdateModalOpen] = useState<boolean>(false);
    const formatDate = (isoString: string): string => {
        const date = new Date(isoString);
        return date.toISOString().replace('T', ' ').slice(0, 19);
    };
    const handleOpenUpdateModal = () => {
        setUpdateModalOpen(true);
    };

    const handleCloseUpdateModal = () => {
        setUpdateModalOpen(false);
    };


    const handleDeleteModalOpen = () => {
        setDeleteModalOpen(true);
    };

    const handleDeleteModalClose = () => {
        setDeleteModalOpen(false);
    };

    const handleConfirmDelete = () => {

        handleDeleteModalClose();
    };
    const handleNewTransactionModalOpen = () => setAddTransactionModal(true);
    const handleCloseTransactionModalClose = () => setAddTransactionModal(false);
    useEffect(() => {
        const handleDisplayTransactionList = async () => {
            const authenticationToken = "RVSEC-8bb756a159b787007fa50b556b45d11d0b49c0c0c0a7b47b3364fa7d094009d2b404a106a71103b9aecb33f73b82f5be-1662632092469";
            try {
                const response = await fetch('https://integrations.getravenbank.com/v1/accounts/transactions', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${authenticationToken}`
                    }
                });

                if (!response.ok) {
                    throw new Error('failed to fetch transactions');
                }

                const data = await response.json();
                const transactions = data.data.transactions.slice(0, 15)
                const references = transactions.map((transaction: { reference: string }) => transaction.reference);
                const amount = transactions.map((transaction: { _value: string }) => transaction._value);
                const currency = transactions.map((transaction: { currency: string }) => transaction.currency);
                const transactionDates = transactions.map((transaction:{created_at:string})=>formatDate(transaction.created_at))
                const updatedDates = transactions.map((transaction:{updated_at:string})=>formatDate(transaction.updated_at))
                const directions = transactions.map((transaction: { direction: string }) => transaction.direction);
                setReferenceList(references);
                setAmountList(amount)
                setCurrencyList(currency)
                setTransactionDateList(transactionDates)
                setUpdatedLastDateList(updatedDates)
                setTransactionDirection(directions)

            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
        };

        handleDisplayTransactionList();
    }, []);

    return (
        <>
            <NavBar/>
            <div className={styles.dashboard}>
                <div className={styles.sideBar}>
                    <div className={styles.userProfile}>
                        <div className={styles.nameAbrv}>
                            TU
                        </div>

                        <div className={styles.userDetails}>
                            <span className={styles.name}>Test User</span>
                            <span>email</span>
                        </div>
                    </div>

                    <div className={styles.sideBarItems}>

                        <div className={styles.sideIcons}>
                            <FontAwesomeIcon icon={faTachometerAlt} />
                            <p>Overview</p>
                        </div>
                        <div className={styles.sideIcons}>
                            <div>
                                <FontAwesomeIcon icon={faUserFriends} />
                            </div>

                            <p>Users</p>
                        </div>
                        <div  className={styles.sideIcons}>
                            <div>
                                <FontAwesomeIcon icon={faClipboardList} />
                            </div>
                            <p>Transactions</p>
                        </div>
                        <div className={styles.sideIcons}>
                            <div>
                                <FontAwesomeIcon icon={faExchangeAlt} />
                            </div>

                            <p>Transfers</p>
                        </div>
                        <div className={styles.sideIcons}>
                            <div>  <FontAwesomeIcon icon={faBox} /></div>
                            <p>Deposits</p>
                        </div>
                        <div className={styles.sideIcons}>
                            <div>
                               < FontAwesomeIcon icon={faPiggyBank}/>
                            </div>

                            <p>Savings</p>
                        </div>
                        <div className={styles.sideIcons}>
                            <div>
                                <FontAwesomeIcon icon={faReceipt} />
                            </div>
                            <p>Bill Payment</p>
                        </div>
                        <div className={styles.sideIcons}>
                            <div>
                            <FontAwesomeIcon icon={faChartBar} />
                            </div>
                            <p>Report</p>
                        </div>
                        <div className={styles.sideIcons}>
                            <div><FontAwesomeIcon icon={faCheckCircle} /></div>
                            <p>Compliance</p>
                        </div>
                        <div className={styles.sideIcons}>
                            <div><FontAwesomeIcon icon={faCog} /></div>
                            <p>Settings</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className={styles.transactionContainer}>
                        <div className={styles.transaction}>
                            <h3>Transactions</h3>
                            <p>View all your transaction in the list of product</p>
                        </div>

                        <div>
                            <img onClick={handleNewTransactionModalOpen} src={addTransactionImage}
                                 alt={"add transaction"} width={30}/>
                        </div>


                    </div>

                    <div className={styles.box}>
                        <div className={styles.ashCont}>
                            <div>
                                <h4>
                                    Total Balance
                                </h4>
                            </div>

                            <div className={styles.money}>
                                <p>N87K <span>+1 today</span></p>
                                <p style={{color:"#7000F6"}}>View details</p>

                            </div>
                        </div>

                        <div className={styles.ashCont}>
                            <div>
                                <h4>
                                    Total Credit
                                </h4>
                            </div>

                            <div className={styles.money}>
                                <p>234,120</p>
                                <p style={{color:"#008000"}}>View details</p>

                            </div>
                        </div>


                        <div className={styles.ashCont}>

                            <div>
                                <h4>
                                    Total Debit
                                </h4>
                            </div>

                            <div className={styles.money}>
                                <p>N923K <span>+5% today</span></p>
                                <p style={{color:"#FF0000"}}>View details</p>

                            </div>

                        </div>

                    </div>

                    <div className={styles.transactionTable}>
                        <div>
                            <h3>Reference</h3>
                        </div>

                        <div>
                            <h3>Amount</h3>
                        </div>

                        <div>
                            <h3>Transaction Date</h3>
                        </div>

                        <div>
                            <h3>Updated Last</h3>
                        </div>

                        <div>
                            <h3>Status</h3>
                        </div>

                        <div>
                            <h3>Action</h3>
                        </div>
                    </div>

                    <div className={styles.transactionValues}>

                        <ul>
                            {referenceList.map((reference, index) => (
                                <li key={index}>
                                    <span>{reference}</span>
                                </li>
                            ))}
                        </ul>

                        <ul>
                            {currency.map((currency, index) => (
                                <li key={index}>
                                    <span>{currency}</span>
                                </li>
                            ))}</ul>

                        <ul>
                            <div className={styles.amountList}>

                                {amount.map((amount, index) => (
                                    <li key={index}>
                                        <span>{amount}</span>
                                    </li>
                                ))}
                            </div>
                        </ul>
                        <ul>
                            <div className={styles.transactionDateList}>

                                {transactionDateList.map((transactionDate, index) => (
                                    <li key={index}>
                                        <span>{transactionDate}</span>
                                    </li>
                                ))}
                            </div>
                        </ul>
                        <ul>
                            <div className={styles.updatedTransactionDateList}>

                                {updatedLastDateList.map((updateDate, index) => (
                                    <li key={index}>
                                        <span>{updateDate}</span>
                                    </li>
                                ))}
                            </div>
                        </ul>

                        <ul>
                            <div className={styles.updatedTransactionDateList}>

                                {updatedLastDateList.map((updateDate, index) => (
                                    <li key={index}>
                                        <div className={styles.actions}>
                                            <img onClick={handleOpenUpdateModal} className={styles.action}
                                                 src={editIcon} alt={"edit icon "}/>
                                            <img onClick={handleDeleteModalOpen} className={styles.action}
                                                 src={deleteIcon} alt={"delete icon"}/>

                                        </div>
                                    </li>
                                ))}
                            </div>
                        </ul>

                    </div>
                </div>
                <DeleteTransaction isOpen={deleteModalOpen} onClose={handleDeleteModalClose} onConfirm={handleConfirmDelete}/>
                <AddNewTransaction isOpen={addTransactionModal} onClose={handleCloseTransactionModalClose}/>
                <UpdateTransaction
                    isOpen={isUpdateModalOpen}
                    onClose={handleCloseUpdateModal}

                />
            </div>


        </>
    );
};

export default Dashboard;

