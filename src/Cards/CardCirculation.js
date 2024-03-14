import React from "react";
import {Card, CardContent, Typography} from "@mui/material";

export const CardCirculation = () => {
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
                    Circulation:
                </Typography>
                <div>

                </div>
            </CardContent>
        </Card>
    );
};