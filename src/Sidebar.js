import React from "react";
import {Paper, Stack, styled} from "@mui/material";

export const SideBar = () => {
    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <div className="sideBar">
            <div>
                <Stack spacing={2}>
                    <Item>My NFTs</Item>
                    <Item>Stats</Item>
                    <Item>Connect Wallet</Item>
                </Stack>
            </div>
        </div>
    );
};