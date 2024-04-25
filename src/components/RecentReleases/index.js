import {v4 as uuidv4} from 'uuid'

import { GoDotFill } from "react-icons/go";

import "./index.css"

// recent releases list
const recentReleasesList = [
    {
        id: uuidv4(),
        date: "Febrary 12, 2024",
        title: "Industrial Production",
        description: "Index of Industrial Production (IIP) grew by 3.8% YoY in december, as compared to 5.1% YoY growth in the same mont last year. Electricity has seen slowest growth of 1.2% YoY in December as compared to 1.4% YoY growth in the same month last year."
    },
    {
        id: uuidv4(),
        date: "Febrary 12, 2024",
        title: "CPI Inflation",
        description: "Index of Industrial Production (IIP) grew by 3.8% YoY in december, as compared to 5.1% YoY growth in the same mont last year. Electricity has seen slowest growth of 1.2% YoY in December as compared to 1.4% YoY growth in the same month last year."
    },
    {
        id: uuidv4(),
        date: "Febrary 12, 2024",
        title: "CPI Inflation",
        description: "Index of Industrial Production (IIP) grew by 3.8% YoY in december, as compared to 5.1% YoY growth in the same mont last year. Electricity has seen slowest growth of 1.2% YoY in December as compared to 1.4% YoY growth in the same month last year."
    },
    {
        id: uuidv4(),
        date: "Febrary 12, 2024",
        title: "CPI Inflation",
        description: "Index of Industrial Production (IIP) grew by 3.8% YoY in december, as compared to 5.1% YoY growth in the same mont last year. Electricity has seen slowest growth of 1.2% YoY in December as compared to 1.4% YoY growth in the same month last year."
    },
]

const RecentReleases = () => {

    const renderRecentReleasesCards = cardDetails => {
        const {id, date, title, description} = cardDetails;

        return (
            <div key={id} className="recent-card-bg">
                <button type="button" className='dot-button'>
                    <GoDotFill/>
                </button>
                <p className='recent-date'>{date}</p>
                <p className='recent-title'>{title}</p>
                <p className='recent-desription'>{description}</p>
            </div>
        );
    }

    return <>
        <div className="d-flex justify-content-between align-items-center">
            <p className="recent-p">Recent Releases</p>
            <select className="select">
                <option>India</option>
                <option>America</option>
                <option>Japan</option>
                <option>China</option>
            </select>
        </div>        
        <hr className="hr-line" />
        {
            recentReleasesList.map(each => renderRecentReleasesCards(each))
        }
    </>
}

export default RecentReleases