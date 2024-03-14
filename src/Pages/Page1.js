import React from "react";
import {Button, TextField} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Page1 = () => {
    const navigate = useNavigate();
    return (
        <div>
            <header className="App-header">
                <h1>NAAS</h1>
            </header>
            <div className="login">
                <div className="loginDiv">
                    <div className="loginPageTextfield"><TextField sx={{
                        width: 400,
                        background: 'white'
                    }} size="small" id="username" label="User Name or Email" variant="outlined"/></div>
                    <div className="loginPageTextfield"><TextField sx={{
                        width: 400,
                        background: 'white'
                    }} size="small" id="password" label="Password" variant="outlined"/></div>
                    <div className="loginPageButton"><Button sx={{
                        borderRadius: '20px',
                        width: 400
                    }} variant="contained" onClick={() => navigate("/page2")}>Login</Button></div>
                    <div className="loginPageHr">
                        <hr></hr>
                    </div>
                    <div className="loginPageButton"><Button sx={{
                        borderRadius: '20px',
                        width: 400
                    }} variant="contained">Sign Up</Button></div>
                </div>
            </div>
        </div>
    );
};