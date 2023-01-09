import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Cards = ({residents}) => {
    

    const [rickLocation, setRickLocation] = useState({})
    useEffect(()=>{
         axios.get(residents).then(res => setRickLocation(res.data))
    },[])
    console.log (rickLocation)
    return (
        <div className='cards'>
            <h2 className='title-cards' >{rickLocation?.name}</h2>
            <img className='img-cards' src={rickLocation?.image} alt="" />
            <p className='item-card' >status:{rickLocation?.status}</p>
            <p className='item-card' >origin:{rickLocation?.origin?.name}</p>
            <p className='item-card' >episode:{rickLocation?.episode?.length}</p>


        </div>
    );
};

export default Cards;