import React, { useState } from 'react'
import { addidasData } from '../../csvjson';
import './Listing.css'
import Card from './Card';


function Listing() {
    const [cards, setcards] = useState(addidasData.slice(0, 12));
    const [classActive, setClassActive] = useState(false);
    const [cart, setCart] = useState([])

    

    return <div className="cardSection p-5">
        <div className="container">
            <div className="d-flex flex-wrap">
                {
                    cards.map((card, index) => {
                        return <Card data={card} key={index} classActive={setClassActive}  />
                    })
                }
            </div>
        </div>
    </div>
        
}

export default Listing
