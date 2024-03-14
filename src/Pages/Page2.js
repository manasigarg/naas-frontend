import React from "react";
import {Button, TextField} from "@mui/material";
import {SideBar} from "../Sidebar";
import { useNavigate } from "react-router-dom";

export const Page2 = () => {
    const navigate = useNavigate();
    return (
        <div className="App">
            <header className="App-header">
                <h1>NAAS</h1>
            </header>
            <div className="pageContent">
                <SideBar/>
                <div className="createNFTContainer">
                    <p className="label">Click the "+" button below to create an NFT</p>
                    <div className="nftButton"><Button sx={{
                        borderRadius: '20px',
                        width: 800
                    }} variant="contained" onClick={() => navigate("/page3")}>+</Button></div>
                </div>
            </div>
        </div>
    );
};