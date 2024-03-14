import React from "react";
import {Card, CardContent, Typography} from "@mui/material";

export const Card2 = () => {
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
                    Name: CAPTAIN AMERICA
                </Typography>
                <Typography
                    style={{ fontSize: 18 }}
                >
                    Contract Address:
                </Typography>
                <Typography
                    style={{ fontSize: 18 }}
                >
                    In-Circulation: 45
                </Typography>
            </CardContent>
        </Card>
    );
};