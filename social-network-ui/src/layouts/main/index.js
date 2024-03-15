import React from "react";
import Header from "../main/header";
import Footer from "../main/footer";


const Main = ({children}) => {
    return (
        <>
            <Header />
            <>{children}</>
            <Footer />
        </>
    );
}

export default Main;