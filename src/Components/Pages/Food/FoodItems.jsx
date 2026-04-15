import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import Fooditem from './Fooditem';
import { SearchContext } from '../Context/SearchContex';

const FoodItems = () => {
    const { searchText } = useContext(SearchContext);
    const foodDatas=useLoaderData()
   

    const filteredFoods = foodDatas.filter((food) =>
    food.name.toLowerCase().includes((searchText || "").toLowerCase())
    );
    return (
        <div className='grid mx-10 mb-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
           
          {filteredFoods.length > 0 ? (filteredFoods?.map(food=><Fooditem key={food._id} food={food}></Fooditem>)):
           (
      <p className="text-center col-span-full text-gray-500 text-xl">
        No food found
      </p>
    )}
        </div>
    );
};

export default FoodItems;