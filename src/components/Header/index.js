import {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineSearch, MdOutlineDesktopWindows, MdCalendarToday, MdNotificationsNone } from "react-icons/md";
import { AiOutlineQuestionCircle,AiFillDollarCircle } from "react-icons/ai";
import { IoMdCalendar, IoMdSettings } from "react-icons/io";
import { LuBuilding2 } from "react-icons/lu";
import { FaHeadphones } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";

import LibraryCard from "../LibraryCard";

import "./index.css"

// sideBar button list
const buttonList = [
    {
        id: 1,
        icon: <MdOutlineSearch />
    },
    {
        id: 2,
        icon: <MdOutlineDesktopWindows />
    },
    {
        id: 3,
        icon: <AiOutlineQuestionCircle />
    },
    {
        id: 4,
        icon: <IoMdCalendar/>
    },
    {
        id: 5,
        icon: <LuBuilding2 />
    },
    {
        id: 6,
        icon: <AiFillDollarCircle />
    },
    {
        id: 7,
        icon: <FaHeadphones />
    },
]

// library cards list
const libraryCardList = [
    {
        id: uuidv4(),
        title: "My Saved Library1",
        creatingDate: "dd-mm-yy"
    },
    {
        id: uuidv4(),
        title: "My Saved Library2",
        creatingDate: "dd-mm-yy"
    },
    {
        id: uuidv4(),
        title: "My Saved Library3",
        creatingDate: "dd-mm-yy"
    },
    {
        id: uuidv4(),
        title: "My Saved Library4",
        creatingDate: "dd-mm-yy"
    },
    {
        id: uuidv4(),
        title: "My Saved Library5",
        creatingDate: "dd-mm-yy"
    },
]

const Header = () => {
    const date = new Date();
    const monthDate = date.getDate();
    const monthName = date.toLocaleString('default', { month: 'long' });

    const [showSideBar, setSideBar] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());

    // update time every second
    useEffect(() =>{
        const intervalId = setInterval(() =>{
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    },[])

    const onToggleSideBar = () => setSideBar(prevState => !prevState);

    //return user greeting massage based on time
    const getGreetingMsg = () => {
        const dateString = new Date();
        const hours = dateString.getHours();
        if(hours < 12){
            return "Good Morning, Aman Kumar";
        }else if(hours > 12 && hours < 18){
            return "Good Afternoon, Aman Kumar"
        }else{
            return "Good Evening, Aman Kumar"
        }
    }

    // side bar code is started from here
    const renderSideBar = () => <div className="sidebar-bg">
        <button type="button" className="side-bar-toggle-btn mb-5" onClick={onToggleSideBar}>
            <GiHamburgerMenu />
        </button>
        <div className="d-flex flex-column">
            {
                buttonList.map(each => {
                    const {id, icon} = each
                    return (
                        <button key={id} type="button" className="side-bar-buttons">
                            {icon}
                        </button>
                    );
                })
            }
        </div>        
        <button type="button" className="side-bar-buttons mb-0" >
            <IoMdSettings/>
        </button>
    </div>

    return (
        <>
        <div className="header-bg">
                {
                showSideBar ? renderSideBar() : <button type="button" className="open-side-bar-btn" onClick={onToggleSideBar}>
                    <GiHamburgerMenu />
                </button>
                }     
            <div className="user-info-container">
                <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center">
                    <div className="mt-3">
                        <h4  className="user-name">{getGreetingMsg()}</h4>
                        <p className="retail-plan-p">You are subscribed to Retail plan.</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <p className="date-time-p">
                            <MdCalendarToday size={22} className="mr-2"/>
                            Today, &nbsp;
                            {`${monthDate} ${monthName}`}
                        </p>
                        <p className="date-time-p ml-3">
                            <FaRegClock size={22} className="mr-2" />
                            {currentTime.getMinutes() <10 ? `${currentTime.getHours()}:0${currentTime.getMinutes()}` : `${currentTime.getHours()}:${currentTime.getMinutes()}`}
                        </p>
                        <button type="button" className="notification-btn">
                            <MdNotificationsNone/>
                        </button>                        
                    </div>
                </div>
                <ul className="library-card-list d-none d-lg-flex mt-3">
                    {
                        libraryCardList.map(each => <LibraryCard key={each.id} cardDetails={each} />)
                    }
                </ul>
            </div>
        </div>
        <ul className="library-card-list d-lg-none mt-3">
        {
            libraryCardList.map(each => <LibraryCard key={each.id} cardDetails={each} />)
        }
    </ul>
    </>
    );
}

export default Header