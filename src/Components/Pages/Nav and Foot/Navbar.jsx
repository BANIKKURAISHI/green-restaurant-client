import React, { use, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { SearchContext } from '../Context/SearchContex';

const Navbar = () => {
   const { searchText, setSearchText } = useContext(SearchContext); 
   console.log("navbar:", searchText);

  const {user,singOut}=use(AuthContext)
    const links=[
        <NavLink  to="/"> 
  {({ isActive }) => (
    <span className={isActive ? "btn text-purple-500 mr-4 border-b-purple-500 text-2xl hover:bg-gray-300" : "btn text-2xl  text-blue-500 mr-4 border-b-blue-500 hover:bg-gray-300 "}>Home</span>
  )}
</NavLink>,
<NavLink  to="/fooditems">
  {({ isActive }) => (
    <span className={isActive ? "btn text-purple-500 mr-4 border-b-purple-500 text-2xl  hover:bg-gray-300 " : "btn text-2xl  text-blue-500 mr-4 border-b-blue-500 hover:bg-gray-300 "}>Food Items</span>
  )}
</NavLink>,
(user && (
<NavLink   to="/addCart">
  {({ isActive }) => (
    <span className={isActive ? "btn text-purple-500 mr-4 border-b-purple-500 text-2xl  hover:bg-gray-300 " : "btn text-2xl  text-blue-500 mr-4 border-b-blue-500 hover:bg-gray-300 "}>Add Cart</span>
  )}
</NavLink>)

)


    ]




    return (
        <div className=''>
    <div className="max-lg:collapse fixed top-0 z-50   bg-base-200 lg:shadow-sm w-full rounded-sm">
  <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
  <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
  <div className="collapse-title navbar">
    <div className="navbar-start">
      <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <button className="text-4xl font-bold text-blue-700">GREEN</button>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
       {
        links
       }
      </ul>
    </div>
    <div className="navbar-end">
      <input  value={searchText}
      onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search your favorite food" className="input mr-3 border-b-blue-500 text-white  w-64 lg:w-auto" />
      <div>
        {
    user ?(<><div className='flex flex-row-reverse gap-0.5'>
      <div className="avatar text-center ">
      <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
      <img src={user?.photoURL} />
      </div>
      
      </div>
      <div className=''>
        <h1>{user?.displayName}</h1>
      <button onClick={()=>singOut()}>Log out</button> 
      </div>
    </div>
    </> ):
   (<><NavLink   to="/login">
  {({ isActive }) => (
    <span className={isActive ? "btn text-purple-500 mr-3 border-b-purple-500 text-2xl  hover:bg-gray-300 " : "btn text-2xl  text-blue-500 mr-4 border-b-blue-500 hover:bg-gray-300 "}>Sign in</span>
  )}
</NavLink>
<NavLink   to="/register">
  {({ isActive }) => (
    <span className={isActive ? "btn text-purple-500 mr-4 border-b-purple-500 text-2xl  hover:bg-gray-300 " : "btn text-2xl  text-blue-500 mr-4 border-b-blue-500 hover:bg-gray-300 "}>Sign up</span>
  )}
</NavLink></> )
  }
      </div>
    </div>
  </div>

  <div className="collapse-content lg:hidden z-1">
    <ul className="menu">
    {links}
    </ul>
  </div>


  
</div>  
        </div>
    );
};

export default Navbar;