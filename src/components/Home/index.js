import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Header from "../Header"
import CardSlider from "../CardSlider"
import RecentReleases from '../RecentReleases';

import "./index.css"

// slider cards details
const cardList = [
    {
        id: uuidv4(),
        title: "State of Markets",
        description: "The Market capitalisation of indian stocks crossed US$4.5 trillion in january",
        imageUrl: 'https://img.freepik.com/free-photo/stock-market-chart-technology-blue-background_53876-124650.jpg?t=st=1713937354~exp=1713940954~hmac=b8f2c1c5c770f38c938103b655c4cb4007c18ff852699d8dfed024ad7bd74bbf&w=996',
    },
    {
        id: uuidv4(),
        title: "The Central Capex Surge",
        description: "The Lats few years have seen very substantial step up in capital",
        imageUrl: 'https://img.freepik.com/premium-photo/representing-financial-growth-soaring-trends-transparent-background-png-generative-ai_896194-4649.jpg?w=1060',
    },
    {
        id: uuidv4(),
        title: "Direct Taxes and Buisness Cycle",
        description: "The share of direct taxes in total tex collection of the central goverment is",
        imageUrl: 'https://img.freepik.com/free-photo/round-alarm-clock-with-stack-increasing-coins-against-blue-background_23-2147943422.jpg?t=st=1713940513~exp=1713944113~hmac=11f56c2347f72c87b5059e37a54e54f7abc74440c1cc9fba6c6ccdec945f9ff2&w=996',
    },
    {
        id: uuidv4(),
        title: "Banking Monitor",
        description: "Credit growth has remained broadly stable in recent weeks at just",
        imageUrl: 'https://img.freepik.com/free-vector/banking-industry-concept-illustration_114360-13934.jpg?t=st=1713943953~exp=1713947553~hmac=d6a4aa7765fc913cc572349ab8aaccee1a4ed0526455002497b429eb23031104&w=996',
    },
    {
        id: uuidv4(),
        title: "State of Markets",
        description: "The Market capitalisation of indian stocks crossed US$4.5 trillion in january",
        imageUrl: 'https://img.freepik.com/free-photo/stock-market-chart-technology-blue-background_53876-124650.jpg?t=st=1713937354~exp=1713940954~hmac=b8f2c1c5c770f38c938103b655c4cb4007c18ff852699d8dfed024ad7bd74bbf&w=996',
    },
    {
        id: uuidv4(),
        title: "The Central Capex Surge",
        description: "The Lats few years have seen very substantial step up in capital",
        imageUrl: 'https://img.freepik.com/premium-photo/representing-financial-growth-soaring-trends-transparent-background-png-generative-ai_896194-4649.jpg?w=1060',
    },
    {
        id: uuidv4(),
        title: "Direct Taxes and Buisness Cycle",
        description: "The share of direct taxes in total tex collection of the central goverment is",
        imageUrl: 'https://img.freepik.com/free-photo/round-alarm-clock-with-stack-increasing-coins-against-blue-background_23-2147943422.jpg?t=st=1713940513~exp=1713944113~hmac=11f56c2347f72c87b5059e37a54e54f7abc74440c1cc9fba6c6ccdec945f9ff2&w=996',
    },
    {
        id: uuidv4(),
        title: "Banking Monitor",
        description: "Credit growth has remained broadly stable in recent weeks at just",
        imageUrl: 'https://img.freepik.com/free-vector/banking-industry-concept-illustration_114360-13934.jpg?t=st=1713943953~exp=1713947553~hmac=d6a4aa7765fc913cc572349ab8aaccee1a4ed0526455002497b429eb23031104&w=996',
    },
    {
        id: uuidv4(),
        title: "State of Markets",
        description: "The Market capitalisation of indian stocks crossed US$4.5 trillion in january",
        imageUrl: 'https://img.freepik.com/free-photo/stock-market-chart-technology-blue-background_53876-124650.jpg?t=st=1713937354~exp=1713940954~hmac=b8f2c1c5c770f38c938103b655c4cb4007c18ff852699d8dfed024ad7bd74bbf&w=996',
    },
    {
        id: uuidv4(),
        title: "The Central Capex Surge",
        description: "The Lats few years have seen very substantial step up in capital",
        imageUrl: 'https://img.freepik.com/premium-photo/representing-financial-growth-soaring-trends-transparent-background-png-generative-ai_896194-4649.jpg?w=1060',
    },
    {
        id: uuidv4(),
        title: "Direct Taxes and Buisness Cycle",
        description: "The share of direct taxes in total tex collection of the central goverment is",
        imageUrl: 'https://img.freepik.com/free-photo/round-alarm-clock-with-stack-increasing-coins-against-blue-background_23-2147943422.jpg?t=st=1713940513~exp=1713944113~hmac=11f56c2347f72c87b5059e37a54e54f7abc74440c1cc9fba6c6ccdec945f9ff2&w=996',
    },
    {
        id: uuidv4(),
        title: "Banking Monitor",
        description: "Credit growth has remained broadly stable in recent weeks at just",
        imageUrl: 'https://img.freepik.com/free-vector/banking-industry-concept-illustration_114360-13934.jpg?t=st=1713943953~exp=1713947553~hmac=d6a4aa7765fc913cc572349ab8aaccee1a4ed0526455002497b429eb23031104&w=996',
    },
    {
        id: uuidv4(),
        title: "State of Markets",
        description: "The Market capitalisation of indian stocks crossed US$4.5 trillion in january",
        imageUrl: 'https://img.freepik.com/free-photo/stock-market-chart-technology-blue-background_53876-124650.jpg?t=st=1713937354~exp=1713940954~hmac=b8f2c1c5c770f38c938103b655c4cb4007c18ff852699d8dfed024ad7bd74bbf&w=996',
    },
    {
        id: uuidv4(),
        title: "The Central Capex Surge",
        description: "The Lats few years have seen very substantial step up in capital",
        imageUrl: 'https://img.freepik.com/premium-photo/representing-financial-growth-soaring-trends-transparent-background-png-generative-ai_896194-4649.jpg?w=1060',
    },
    {
        id: uuidv4(),
        title: "Direct Taxes and Buisness Cycle",
        description: "The share of direct taxes in total tex collection of the central goverment is",
        imageUrl: 'https://img.freepik.com/free-photo/round-alarm-clock-with-stack-increasing-coins-against-blue-background_23-2147943422.jpg?t=st=1713940513~exp=1713944113~hmac=11f56c2347f72c87b5059e37a54e54f7abc74440c1cc9fba6c6ccdec945f9ff2&w=996',
    },
    {
        id: uuidv4(),
        title: "Banking Monitor",
        description: "Credit growth has remained broadly stable in recent weeks at just",
        imageUrl: 'https://img.freepik.com/free-vector/banking-industry-concept-illustration_114360-13934.jpg?t=st=1713943953~exp=1713947553~hmac=d6a4aa7765fc913cc572349ab8aaccee1a4ed0526455002497b429eb23031104&w=996',
    },
    {
        id: uuidv4(),
        title: "State of Markets",
        description: "The Market capitalisation of indian stocks crossed US$4.5 trillion in january",
        imageUrl: 'https://img.freepik.com/free-photo/stock-market-chart-technology-blue-background_53876-124650.jpg?t=st=1713937354~exp=1713940954~hmac=b8f2c1c5c770f38c938103b655c4cb4007c18ff852699d8dfed024ad7bd74bbf&w=996',
    },
    {
        id: uuidv4(),
        title: "The Central Capex Surge",
        description: "The Lats few years have seen very substantial step up in capital",
        imageUrl: 'https://img.freepik.com/premium-photo/representing-financial-growth-soaring-trends-transparent-background-png-generative-ai_896194-4649.jpg?w=1060',
    },
    {
        id: uuidv4(),
        title: "Direct Taxes and Buisness Cycle",
        description: "The share of direct taxes in total tex collection of the central goverment is",
        imageUrl: 'https://img.freepik.com/free-photo/round-alarm-clock-with-stack-increasing-coins-against-blue-background_23-2147943422.jpg?t=st=1713940513~exp=1713944113~hmac=11f56c2347f72c87b5059e37a54e54f7abc74440c1cc9fba6c6ccdec945f9ff2&w=996',
    },
    {
        id: uuidv4(),
        title: "Banking Monitor",
        description: "Credit growth has remained broadly stable in recent weeks at just",
        imageUrl: 'https://img.freepik.com/free-vector/banking-industry-concept-illustration_114360-13934.jpg?t=st=1713943953~exp=1713947553~hmac=d6a4aa7765fc913cc572349ab8aaccee1a4ed0526455002497b429eb23031104&w=996',
    },
    {
        id: uuidv4(),
        title: "State of Markets",
        description: "The Market capitalisation of indian stocks crossed US$4.5 trillion in january",
        imageUrl: 'https://img.freepik.com/free-photo/stock-market-chart-technology-blue-background_53876-124650.jpg?t=st=1713937354~exp=1713940954~hmac=b8f2c1c5c770f38c938103b655c4cb4007c18ff852699d8dfed024ad7bd74bbf&w=996',
    },
    {
        id: uuidv4(),
        title: "The Central Capex Surge",
        description: "The Lats few years have seen very substantial step up in capital",
        imageUrl: 'https://img.freepik.com/premium-photo/representing-financial-growth-soaring-trends-transparent-background-png-generative-ai_896194-4649.jpg?w=1060',
    },
    {
        id: uuidv4(),
        title: "Direct Taxes and Buisness Cycle",
        description: "The share of direct taxes in total tex collection of the central goverment is",
        imageUrl: 'https://img.freepik.com/free-photo/round-alarm-clock-with-stack-increasing-coins-against-blue-background_23-2147943422.jpg?t=st=1713940513~exp=1713944113~hmac=11f56c2347f72c87b5059e37a54e54f7abc74440c1cc9fba6c6ccdec945f9ff2&w=996',
    },
    {
        id: uuidv4(),
        title: "Banking Monitor",
        description: "Credit growth has remained broadly stable in recent weeks at just",
        imageUrl: 'https://img.freepik.com/free-vector/banking-industry-concept-illustration_114360-13934.jpg?t=st=1713943953~exp=1713947553~hmac=d6a4aa7765fc913cc572349ab8aaccee1a4ed0526455002497b429eb23031104&w=996',
    },
    {
        id: uuidv4(),
        title: "State of Markets",
        description: "The Market capitalisation of indian stocks crossed US$4.5 trillion in january",
        imageUrl: 'https://img.freepik.com/free-photo/stock-market-chart-technology-blue-background_53876-124650.jpg?t=st=1713937354~exp=1713940954~hmac=b8f2c1c5c770f38c938103b655c4cb4007c18ff852699d8dfed024ad7bd74bbf&w=996',
    },
    {
        id: uuidv4(),
        title: "The Central Capex Surge",
        description: "The Lats few years have seen very substantial step up in capital",
        imageUrl: 'https://img.freepik.com/premium-photo/representing-financial-growth-soaring-trends-transparent-background-png-generative-ai_896194-4649.jpg?w=1060',
    },
    {
        id: uuidv4(),
        title: "Direct Taxes and Buisness Cycle",
        description: "The share of direct taxes in total tex collection of the central goverment is",
        imageUrl: 'https://img.freepik.com/free-photo/round-alarm-clock-with-stack-increasing-coins-against-blue-background_23-2147943422.jpg?t=st=1713940513~exp=1713944113~hmac=11f56c2347f72c87b5059e37a54e54f7abc74440c1cc9fba6c6ccdec945f9ff2&w=996',
    },
    {
        id: uuidv4(),
        title: "Banking Monitor",
        description: "Credit growth has remained broadly stable in recent weeks at just",
        imageUrl: 'https://img.freepik.com/free-vector/banking-industry-concept-illustration_114360-13934.jpg?t=st=1713943953~exp=1713947553~hmac=d6a4aa7765fc913cc572349ab8aaccee1a4ed0526455002497b429eb23031104&w=996',
    },
    {
        id: uuidv4(),
        title: "State of Markets",
        description: "The Market capitalisation of indian stocks crossed US$4.5 trillion in january",
        imageUrl: 'https://img.freepik.com/free-photo/stock-market-chart-technology-blue-background_53876-124650.jpg?t=st=1713937354~exp=1713940954~hmac=b8f2c1c5c770f38c938103b655c4cb4007c18ff852699d8dfed024ad7bd74bbf&w=996',
    },
    {
        id: uuidv4(),
        title: "The Central Capex Surge",
        description: "The Lats few years have seen very substantial step up in capital",
        imageUrl: 'https://img.freepik.com/premium-photo/representing-financial-growth-soaring-trends-transparent-background-png-generative-ai_896194-4649.jpg?w=1060',
    },
    {
        id: uuidv4(),
        title: "Direct Taxes and Buisness Cycle",
        description: "The share of direct taxes in total tex collection of the central goverment is",
        imageUrl: 'https://img.freepik.com/free-photo/round-alarm-clock-with-stack-increasing-coins-against-blue-background_23-2147943422.jpg?t=st=1713940513~exp=1713944113~hmac=11f56c2347f72c87b5059e37a54e54f7abc74440c1cc9fba6c6ccdec945f9ff2&w=996',
    },
    {
        id: uuidv4(),
        title: "Banking Monitor",
        description: "Credit growth has remained broadly stable in recent weeks at just",
        imageUrl: 'https://img.freepik.com/free-vector/banking-industry-concept-illustration_114360-13934.jpg?t=st=1713943953~exp=1713947553~hmac=d6a4aa7765fc913cc572349ab8aaccee1a4ed0526455002497b429eb23031104&w=996',
    },
    {
        id: uuidv4(),
        title: "State of Markets",
        description: "The Market capitalisation of indian stocks crossed US$4.5 trillion in january",
        imageUrl: 'https://img.freepik.com/free-photo/stock-market-chart-technology-blue-background_53876-124650.jpg?t=st=1713937354~exp=1713940954~hmac=b8f2c1c5c770f38c938103b655c4cb4007c18ff852699d8dfed024ad7bd74bbf&w=996',
    },
    {
        id: uuidv4(),
        title: "The Central Capex Surge",
        description: "The Lats few years have seen very substantial step up in capital",
        imageUrl: 'https://img.freepik.com/premium-photo/representing-financial-growth-soaring-trends-transparent-background-png-generative-ai_896194-4649.jpg?w=1060',
    },
    {
        id: uuidv4(),
        title: "Direct Taxes and Buisness Cycle",
        description: "The share of direct taxes in total tex collection of the central goverment is",
        imageUrl: 'https://img.freepik.com/free-photo/round-alarm-clock-with-stack-increasing-coins-against-blue-background_23-2147943422.jpg?t=st=1713940513~exp=1713944113~hmac=11f56c2347f72c87b5059e37a54e54f7abc74440c1cc9fba6c6ccdec945f9ff2&w=996',
    },
    {
        id: uuidv4(),
        title: "Banking Monitor",
        description: "Credit growth has remained broadly stable in recent weeks at just",
        imageUrl: 'https://img.freepik.com/free-vector/banking-industry-concept-illustration_114360-13934.jpg?t=st=1713943953~exp=1713947553~hmac=d6a4aa7765fc913cc572349ab8aaccee1a4ed0526455002497b429eb23031104&w=996',
    },    
]

const Home = () => {

    const[crousalNo, setCrousalNo] = useState([<CardSlider key={uuidv4()} cardList={cardList} />]);

    const addMoreSlider = () => setCrousalNo(prevState => [...prevState, <CardSlider key={uuidv4()} cardList={cardList} />])

    return (
        <div className='home-bg'>
            <Header />
            <div className="container-fluid my-container">
                <div className="row">
                    <div className='col-12 col-xl-8'>
                        <div className="col-style">
                            {
                                crousalNo.map(slider => slider )
                            }
                            <button type='button' className='view-more-btn' onClick={addMoreSlider}>View More</button>
                        </div>
                    </div>
                    <div className='col-12 col-xl-4 mt-4 mt-xl-0'>
                        <div className='col-style p-4'>
                            <RecentReleases />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home