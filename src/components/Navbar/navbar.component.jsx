import React from "react";
import {BiChevronRight,BiSearch} from "react-icons/bi";

const NavSm=()=>{
    return (
        <>
        <div className="text-white flex justify-between items-center">
            <div>
            <h3 className="text-xl font-bold">It All Starts Here</h3>
            <span className="text-gray-400 text-xs flex items-center">chirala <BiChevronRight/> </span>
            </div>
            <div className="w-7 h-7">
                <BiSearch className="w-full h-full"/>
            </div>
        </div>
        </>
    );
};
const NavMd=()=>{
    return (
  <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
   <BiSearch/>
   <input type="search" className="w-full bg-transparent border-none focus:outline-none" placeholder="Search for Movies,Events,Plays,Sports,Activity"/>
  </div>
    );
};
const NavLg=()=>{};


const Navbar=()=>{
 return <>
    <nav className="bg-bms-700 p-4">
     <div className="md:hidden">
         {/*Mobile Screen*/}
         <NavSm/>
     </div>
     <div className="hidden md:flex lg:hidden">
         {/*Tab Screen*/}
         <NavMd/>
     </div>
     <div className="hidden lg:flex">
         {/*PC Screen*/}
     </div>
 </nav>
 </>
};

export default Navbar;