import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TopItem from './TopItem';

const TopItems = () => {
    const [topFood,setTopFood]=useState()
    useEffect(()=>{
        const topfood=async()=>{
            const food=await axios.get('http://localhost:3000/topfood')
            setTopFood(food.data)
        }
        topfood()
    },[])
    return (
        <div  className='grid mx-10 mb-7 mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
           {
            topFood?.map(food=><TopItem key={food._id} food={food}></TopItem>)
           } 
        </div>
    );
};

export default TopItems;