import React from "react";

//Components
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component";
const DefaultLayout=()=>{
    return (
        <>
            <Navbar/>
            <HeroCarousal/>
        </>
    );
};
export default DefaultLayout;