import React from "react";
import { Outlet } from "react-router-dom";


import Footer from "./Header_And_Footer/Footer";
import Header from "./Header_And_Footer/Header";

export default function Layout(){
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}