import React from 'react';
import Header from "../components/Header";

const HomeLayout = ({children}) => {
    return (
        <div id="Wrapper">
            <Header/>
            <div id="Content">
                {children}
            </div>
        </div>);
}

export default HomeLayout;