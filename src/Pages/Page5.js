import React from "react";
import {SideBar} from "../Sidebar";
import {Card1} from "../Cards/Card1";
import {CardMint} from "../Cards/CardMint";

export const Page5 = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>NAAS</h1>
            </header>
            <div className="pageContent">
                <SideBar/>
                <div className="mainContent">
                    <div className="mainItems">
                        <Card1/>
                        <CardMint/>
                    </div>
                </div>
            </div>
        </div>
    );
};