import React from "react";
import {Card, CardContent, Typography} from "@mui/material";
import MintStepper from "../MintStepperForm";

export const CardMint = () => {
    return (
        <Card variant="outlined"
              style={{
                  width: 800,
                  marginTop: 20,
                  borderRadius: '20px'
              }}
        >
            <CardContent>
                <Typography
                    style={{ fontSize: 18 }}
                >
                    Mint:
                </Typography>
                <MintStepper/>
            </CardContent>
        </Card>
    );
};