//import React from 'react';

import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";
import ScrollToTop from "../utils/ScrollToTop/ScrollToTop";

const Main = () => {
    return (
        <div>
            <ScrollToTop></ScrollToTop>
            <NavBar></NavBar>
            <div className="px-[150px]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;