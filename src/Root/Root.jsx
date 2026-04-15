import { Outlet } from "react-router-dom";
import Navbar from "../Components/Pages/Nav and Foot/Navbar";
import Footer from "../Components/Pages/Nav and Foot/Footer";
import { SearchProvider } from "../Components/Pages/Context/SearchContex";

const Root = () => {
  
    
  return (
 
  <SearchProvider>
      <Navbar ></Navbar>
      <div className="pt-24">
        <Outlet />

      </div>
      <Footer></Footer>
  </SearchProvider>
  


  );
};

export default Root;