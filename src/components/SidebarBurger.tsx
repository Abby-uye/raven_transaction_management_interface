import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import component from "../assets/Component 2.png"

interface SidebarBurgerProps {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
}

const SidebarBurger: React.FC<SidebarBurgerProps> = ({ isSidebarOpen, toggleSidebar }) => {
    return (
        <div className="relative">
            <button
                className="lg:hidden "
                onClick={toggleSidebar}
            >
                <img src={component} alt={"navicon"} className="text-xl w-[48px] ml-[10px] h-[48px]" />
            </button>
        </div>
    );
};

export default SidebarBurger;