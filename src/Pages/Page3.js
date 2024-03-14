import React from "react";
import {Button} from "@mui/material";
import {SideBar} from "../Sidebar";
import {Card1} from "../Cards/Card1";
import {Card2} from "../Cards/Card2";
import { useNavigate } from "react-router-dom";

export const Page3 = () => {
    const navigate = useNavigate();
    return (
        <div className="App">
            <header className="App-header">
                <h1>NAAS</h1>
            </header>
            <div className="pageContent">
                <SideBar/>
                <div className="mainContent">
                    <div className="mainItems">
                        <Card1 />
                        <Card2/>
                        <div className="cardsButton">
                            <Button sx={{
                                borderRadius: '20px',
                                width: 800
                            }} variant="contained">+</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};