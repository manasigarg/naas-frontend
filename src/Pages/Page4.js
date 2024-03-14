import React from "react";
import {Button, TextField} from "@mui/material";
import {SideBar} from "../Sidebar";
import {Card1} from "../Cards/Card1";
import {CardCirculation} from "../Cards/CardCirculation";
import {CardOwners} from "../Cards/CardOwners";
import { useNavigate } from "react-router-dom";

export const Page4 = () => {
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
                        <Card1/>
                        <CardCirculation/>
                        <CardOwners/>
                        <div className="btnGroup">
                            <Button sx={{borderRadius: '20px',
                                width: 225
                            }} variant="contained">Back</Button>
                            <Button sx={{borderRadius: '20px',
                                width: 225
                            }} variant="contained" onClick={() => navigate("/page5")}>Mint</Button>
                            <Button sx={{borderRadius: '20px',
                                width: 225
                            }} variant="contained">Link</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};