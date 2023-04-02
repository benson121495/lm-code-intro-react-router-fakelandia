import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import React from "react";




export const Mainlayout : React.FC = () => 

    <>

        <Header />
        < main className="p-6" style= { { flex:"1" } } >
            <Outlet />
        </ main >
        < Footer />

    </>;