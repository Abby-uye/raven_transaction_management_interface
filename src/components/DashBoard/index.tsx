import React, {useEffect, useState} from "react";
import styles from "./index.module.css"
import DeleteTransaction from "../DeleteTransaction";
import AddNewTransaction from "../AddNewTransaction";
import UpdateTransaction from "../UpdateTransaction";
import NavBar from "./NavBar";
import addTransactionImage from "../../assets/add.png"
import editIcon from "../../assets/edit-03.png"
import deleteIcon from "../../assets/trash-01.png"
import {useGetTransactionsQuery} from "../../redux/slice";
import sidebarBurger from "../SidebarBurger";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faBox,
    faChartBar,
    faCheckCircle,
    faClipboardList,
    faCog,
    faExchangeAlt,
    faPiggyBank,
    faReceipt,
    faTachometerAlt,
    faUserFriends
} from '@fortawesome/free-solid-svg-icons';
import chevronLeft from "../../assets/chevron-left.png"
import vector from "../../assets/Vector.png"
import listFilter from "../../assets/list-filter.png"
import right from "../../assets/right.png"
import SidebarBurger from "../SidebarBurger";
import arrowUp from "../../assets/arrowUp.png"
import arrowdown from "../../assets/arrowDownpng.png"
import avatar from "../../assets/Avatar.png"
interface transactionDetails {
    direction : string,
    email: string,
    id: number,
    reference: string,
    created_at: string,
    updated_at: string,
    _value: number,
    currency: string,
}
const Dashboard: React.FC = () => {
    const authenticationToken = "RVSEC-8bb756a159b787007fa50b556b45d11d0b49c0c0c0a7b47b3364fa7d094009d2b404a106a71103b9aecb33f73b82f5be-1662632092469";
    localStorage.setItem("token", authenticationToken);

    const {data} = useGetTransactionsQuery({});
    console.log("The list of transactions: ", data);

    const transactionList = data?.data;
    console.log("The list of transactionsList: ", transactionList);

    const [listOfTransaction, setListOfTransaction] = useState<transactionDetails[]>([]);
    const formatDate = (dateString: any) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const period = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12; // Convert 24h to 12h format

        return `${day} ${month} ${year} ${formattedHours}:${minutes.toString().padStart(2, '0')} ${period}`;
    };
    const getImageForDirection = (direction:string) => {
        switch (direction) {
            case 'debit':
                return arrowUp;
            case 'credit':
                return arrowdown;

        }
    };
    const getBackgroundColor = (direction:string) => {
        switch (direction) {
            case 'debit':
                return 'bg-[#FFF5F5]';
            case 'credit':
                return 'bg-[#E8FFF6]';

        }
    };

    useEffect(() => {
            if (data) {
                const {transactions} = data?.data;
                setListOfTransaction(transactions);
            }

        },
        [data]);

    const transactions = listOfTransaction.slice(0, 15)
    console.log("The details of transactions: ", transactions);
    const reference = transactions.map(reference => reference.reference.slice(0,5)+"'...");
    const amounts = transactions.map(amount => amount._value);
    const transaction_date = transactions.map(date => formatDate(date.created_at));
    const updated_date = transactions.map(update => formatDate(update.updated_at));
    const naira = transactions.map(ngn => ngn.currency);
    const direction = transactions.map(transaction => transaction.direction)




    const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
    const [addTransactionModal, setAddTransactionModal] = useState<boolean>(false);
    const [isUpdateModalOpen, setUpdateModalOpen] = useState<boolean>(false);
    const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

    const emailValue = localStorage.getItem("email");
    const lastName = localStorage.getItem("lastName");
    const firstName = localStorage.getItem("firstName");
    const firstNameAbbrv = firstName ? firstName.charAt(0) : '';
    const lastNameAbbrv = lastName ? lastName.charAt(0) : '';










    const handleOpenUpdateModal = () => {
        setUpdateModalOpen(true);
    };

    const handleCloseUpdateModal = () => {
        setUpdateModalOpen(false);
    };
    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);


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

    // @ts-ignore
    return (
        <>
            <div>
                <div className={"iphone-14-pro-max:hidden"}>
                    <NavBar/>
                </div>

                <div className={"lg:hidden flex flex-row w-[430px] justify-between h-[100px] mt-[36px] "}>
                    <SidebarBurger isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
                        <p className={"font-aeonik h-25px"} style={{fontWeight:"400px", fontSize:"20px"}}>Transaction</p>
                    <img className={"w-[40px] h-[48px]"} src={avatar} alt={"profile image"}/>
                </div>
            </div>
            <div className={styles.dashboard}>
                <div className="flex flex-col w-[260px] iphone-14-pro-max:hidden h-[790px] bg-[#7000F6]">
                    <div className={styles.userProfile}>
                        <div className={styles.nameAbrv}>
                            {lastNameAbbrv + "" + firstNameAbbrv}
                        </div>

                        <div className={styles.userDetails}>
                            <span className={styles.name}>{lastName + " " + firstName}</span>
                            <span className={styles.email}>{emailValue}</span>
                        </div>
                    </div>

                    <div className="lg:flex pl-7 mt-7 space-y-7 font-aeonik text-base">

                        <div>
                            {[
                                {icon: faTachometerAlt, label: 'Overview'},
                                {icon: faUserFriends, label: 'Users'},
                                {icon: faClipboardList, label: 'Transactions'},
                                {icon: faExchangeAlt, label: 'Transfers'},
                                {icon: faBox, label: 'Deposits'},
                                {icon: faPiggyBank, label: 'Savings'},
                                {icon: faReceipt, label: 'Bill Payment'},
                                {icon: faChartBar, label: 'Report'},
                                {icon: faCheckCircle, label: 'Compliance'},
                                {icon: faCog, label: 'Settings'}
                            ].map((item, index) => (
                                <div key={index}
                                     className="flex items-center py-2 text-white hover:bg-purple-900 rounded-md px-2">
                                    <FontAwesomeIcon icon={item.icon} className="mr-3 text-[rgba(255, 255, 255, 0.72] h-[16px] w-16px]"/>
                                    <p className={"font-aeonik font-[500] text-[rgba(255, 255, 255, 0.72] text-[16px]"}>{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={"lg:ml-[40px] mt-[10px] iphone-14-pro-max:ml-[5px]"}>
                    <div className={"flex flex-row iphone-14-pro-max:gap-[100px] lg:justify-between lg:w-815px"}>
                        <div className={"w-317px h-53px"}>
                            <h3 className={"font-aeonik font-medium iphone-14-pro-max:text-[20px] iphone-14-pro-max:ml-[10px] lg:text-[32px]"}>Transactions</h3>
                            <p className={"font-aeonik font-medium text-[14px] iphone-14-pro-max:ml-[10px]"}>View all your transactions in the list
                                of product</p>
                        </div>

                        <div className={"mt-[10px] iphone-14-pro-max:mr-[10px]"}>
                            <img className={"iphone-14-pro-max:h-[56px] iphone-14-pro-max:w-[56px] "}
                                 onClick={handleNewTransactionModalOpen} src={addTransactionImage}
                                 alt={"add transaction"} width={35}/>
                        </div>

                    </div>

                    <div className={"flex flex-row gap-[35px] mt-[10px] lg:w-[815px] " +
                        "lg:[120px] iphone-14-pro-max:w-[430px] iphone-14-pro-max:h-[170px]" +
                        " mt-[20px] "}>
                        <div className={"bg-[#F9F9F9] w-[258.33px] lg-h-[120px] p-[16px] "}>
                            <div>
                                <h4 className={"font-aeonik font-[500px] text-[12px] text-[#223E3B]"}>
                                    Total Balance
                                </h4>
                            </div>

                            <div>
                                <p className={"font-aeonik font-[500px] text-[32px]"}>N87K
                                    <span className={"font-aeonik font-[400px] text-[13px]"}>+1 today</span></p>
                                <p className={"font-aeonik font-[400px] text-[13px] text-[#7000F6]"}>View details</p>

                            </div>
                        </div>

                        <div className={"bg-[#F9F9F9] lg:w-[258.33px] lg-h-[120px] p-[16px] "}>
                            <div>
                                <h4 className={"font-aeonik font-[500px] text-[12px] text-[#0C296A]"}>
                                    Total Credit
                                </h4>
                            </div>

                            <div>
                                <p className={"font-aeonik font-[500px] text-[32px]"}>234,120</p>
                                <p className={"font-aeonik font-[400px] text-[13px] text-[#008000]"}>View details</p>

                            </div>
                        </div>


                        <div
                            className={"bg-[#F9F9F9] lg:w-[258.33px] lg-h-[120px] lg:p-[16px] iphone-14-pro-max:hidden"}>

                            <div>
                                <h4 className={"font-aeonik font-[500px] text-[12px] text-[#223E3B]"}>
                                    Total Debit
                                </h4>
                            </div>

                            <div>
                                <p className={"font-aeonik font-[500px] text-[32px]"}>N923K
                                    <span className={"font-aeonik font-[400px] text-[13px]"}>+5% today</span></p>
                                <p className={"font-aeonik font-[400px] text-[13px] text-[#FF0000]"}>View details</p>

                            </div>
                        </div>
                    </div>

                    <div
                        className={"flex flex-row lg:w-[815px] justify-between mt-[35px]  iphone-14-pro-max:w-[430px] h-[72px]"}>
                        <form>
                            <input
                                type="text"
                                placeholder={"Search Transactions"}
                                className="bg-white w-[256px] iphone-14-pro-max:w-[325px] text-[#71717A] h-[40px] border pl-[10px] border-[#E4E4E7]"
                            />
                        </form>
                        <div className={"flex flex-row gap-[8px] iphone-14-pro-max:hidden w-[254px] h-[40px]"}>
                            <div className={"flex w-[102px] flex-row gap-[16px] border border-[#E4E4E7] p-[8px]"}>
                                <div className={"mr-[10px]"}><img className={"w-[16px] h-[16px] absolute "}
                                                                  src={listFilter} alt={"filter"}/></div>
                                <div className={"font-aeonik font-[500px] text-[14px] text-[#71717A]"}>
                                    Filters
                                </div>
                                <div className={"mt-[10px]"}>
                                    <img src={vector} alt={"vector"} className={"w-[8px] h-[4px] absolute"}/>
                                </div>
                            </div>

                            <div className={"flex w-[144px] flex-row gap-[10px] border border-[#E4E4E7] p-[8px]"}>
                                <div className={"pt-[4px]"}><img src={chevronLeft} alt={"left"}
                                                                 className={"w-[16px] h-[15px]"}/></div>
                                <p className={"font-plus-jakarta font-[500px] text-[14px]  "}>1- 10
                                    <span className={"text-[#71717A]"}>of 240</span></p>
                                <div className={"pt-[7px]"}><img className={"w-[6px] h-[8px] "} src={right}
                                                                 alt={"right"}/></div>
                            </div>
                        </div>
                        <div
                            className="border border-[#E4E4E7] lg:hidden rounded-[2px] w-[44px] mr-[10px] h-[40px] flex items-center justify-center">
                            <img className="w-[22px] h-[22px] " src={listFilter} alt="filter"/>
                        </div>
                    </div>
                    <div className={"lg:w-[815px] iphone-14-pro-max:hidden"}>
                        <div className="overflow-x-auto ">
                            <table className=" divide-y divide-gray-200 border border-gray-200">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3  text-left text-[14px] lg:w-158px] font-aeonik text-[#111827]-500 tracking-wider">Reference</th>
                                    <th className="px-6 py-3 text-left text-[14px] font-aeonik text-[#111827]-500 tracking-widerr">Amount</th>
                                    <th className="px-6 py-3 text-left text-[14px] font-aeonik text-[#111827]-500 tracking-wider">Transaction
                                        Date
                                    </th>
                                    <th className="px-6 py-3 text-left text-[14px] font-aeonik text-[#111827]-500 tracking-wider">Updated
                                        Last
                                    </th>
                                    <th className="px-6 py-3 text-left text-[14px] font-aeonik text-[#111827]-500 tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-left text-[14px] font-aeonik text-[#111827]-500 tracking-wider">Action</th>
                                </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-x divide-gray-200">
                                {reference.map((_, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-aeonik font-medium text-gray-900">
                                            <div className="flex items-center">
                                                <div
                                                    className={`${getBackgroundColor(direction[index])} flex items-center mr-[3px] w-[28px] h-[28px] rounded-2xl`}>
                                                    <img
                                                        src={getImageForDirection(direction[index])}
                                                        alt={"direction"}
                                                        className="mr-2 w-[12px] h-[12px] ml-[5px]"
                                                    />
                                                </div>

                                                <span
                                                    className=" whitespace-nowrap text-[14px] font-aeonik font-[400px] text-{#4B5563}">{reference[index]}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-[14px] font-aeonik font-[400px] text-{#4B5563}">
                                            {naira[index]} {amounts[index]}
                                        </td>

                                        <td className="px-6 py-4 whitespace-nowrap lg:w-[i68px] text-[14px] font-aeonik font-[400px] text-{#4B5563}">{transaction_date[index]}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-{#4B5563} text-[14px] font-aeonik font-[400px] lg:w-[i68px] text-gray-900">{updated_date[index]}</td>
                                        <td className=" whitespace-nowrap    ">
                                            <p className={"bg-[#E8FFF6] pt-[8px] pr-[12px] pb-[8px] pl-[12px] font-[400px] rounded-[72px] flex items-center " +
                                                "lg:w-[72px] mr-[10px] lg:h-[28px] font-aeonik text-[#1ACE37]  text-[12px] "}>Success</p>
                                        </td>
                                        <td className=" px-6 py-4whitespace-nowrap text-sm font-aeonik font-[400px] bg-font-medium text-{#4B5563}">

                                            <div className="flex space-x-2">
                                                <img
                                                    onClick={handleOpenUpdateModal}
                                                    className="w-[14px] h-[14px] cursor-pointer"
                                                    src={editIcon}
                                                    alt="edit icon"
                                                />
                                                <img
                                                    onClick={handleDeleteModalOpen}
                                                    className="w-[14px] h-[14px] cursor-pointer"
                                                    src={deleteIcon}
                                                    alt="delete icon"
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="lg:hidden flex flex-col gap-4 mt-5 p-4">
                        {transactions.map((transaction, index) => (
                            <div key={index} className="flex flex-row justify-between border p-4 rounded ">
                                <div className="flex flex-col  mb-2">
                                    <div className={"flex flex-row"}>
                                    <div
                                        className={`${getBackgroundColor(direction[index])} flex items-center justify-center mr-3 w-7 h-7 rounded-full`}>
                                        <img src={getImageForDirection(direction[index])} alt="direction"
                                             className="w-5 h-5"/>
                                    </div>
                                    <span
                                        className="text-[#020202] font-aeonik text-[12px] font-medium">{naira[index]} {amounts[index]}</span>
                                    </div>
                                    <div className="font-aeonik text-[#676767] text-[12px]">
                                        <span>{transaction_date[index]}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 font-aeonik text-sm text-gray-600">

                                <div className="flex justify-between">
                                     <span className={`text-[12px] bg-[#E8FFF6] w-[68px] h-[24px] pl-[12px] rounded-[72px] font-aeonik text-[#1ACE37]`}>Success</span>
                                    </div>
                                    <div className="font-aeonik text-[#676767] text-[12px]">
                                        <span>{updated_date[index]}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
                <DeleteTransaction isOpen={deleteModalOpen} onClose={handleDeleteModalClose}
                                   onConfirm={handleConfirmDelete}/>
                <AddNewTransaction isOpen={addTransactionModal} onClose={handleCloseTransactionModalClose}/>
                <UpdateTransaction
                    isOpen={isUpdateModalOpen}
                    onClose={handleCloseUpdateModal}/>
            </div>
        </>);
};

export default Dashboard;