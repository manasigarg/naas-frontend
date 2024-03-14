import React from "react";
import {Button, Card, CardContent, Typography} from "@mui/material";
import {TableOwners} from "../Tables/TableOwners";

export const CardOwners = () => {
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
                    Owners:
                </Typography>
                <Button sx={{
                    borderRadius: '20px',
                    marginTop: '20px',
                    width: 700
                }} variant="outlined">Search...</Button>
                <TableOwners/>
            </CardContent>
        </Card>
    );
};