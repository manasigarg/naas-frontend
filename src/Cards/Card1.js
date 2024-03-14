import React from "react";
import {Card, CardContent, Typography} from "@mui/material";
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'

export const Card1 = () => {
    return (
        <Link underline='none' component={RouterLink} to="/page4">
        <Card variant="outlined"
              style={{
                  width: 800,
                  borderRadius: '20px'
              }}
        >
            <CardContent>
                <Typography
                    style={{ fontSize: 18 }}
                >
                    Name: IRONMAN
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
        </Link>
    );
};