import React from "react";
import {
    Card,
    CardContent,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";

function createTableData(id, owner) {
    return { id, owner };
}

const rows = [
    createTableData('1', ''),
    createTableData('2', ''),
    createTableData('3', ''),
    createTableData('4', ''),
    createTableData('5', '')
];

export const TableOwners = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 600, marginTop: '20px' }} size="small" aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell >Owner</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}
                            // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell> {row.owner}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};