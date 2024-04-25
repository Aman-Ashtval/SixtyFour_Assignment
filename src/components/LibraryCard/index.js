import {memo} from "react";

import { BiSolidCreditCardFront } from "react-icons/bi";

import "./index.css"

// random color class
const randomColorList = ["text-warning", "text-danger", "text-success", "text-primary"];

const LibraryCard = props => {
    const{title, creatingDate} = props.cardDetails

    // getting random color for card icon
    const randomColorIndex = Math.floor(Math.random() * randomColorList.length);
    const randomColor = randomColorList[randomColorIndex]

    return (
        <li className="library-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">                    
                    <BiSolidCreditCardFront size={25} className={`${randomColor}`} />
                    <p className="library-card-title">{title}</p>
                    <p className="creating-date">{creatingDate}</p>
                </div>
                <div className="flip-card-back">
                    <h4 className="text-danger text-center ">
                        <i>Click Me</i>
                    </h4>
                </div>
            </div>
        </li>
    );
}

const MemoizedComponent = memo(LibraryCard);

export default MemoizedComponent