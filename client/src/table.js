import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export const MuiTable = () => {
  return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell>Volunteer name</TableCell>
                <TableCell>Senior name</TableCell>
                <TableCell>Phone number</TableCell>
                <TableCell>Time</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                <TableCell>Mike</TableCell>
                <TableCell>linda</TableCell>
                <TableCell>647 773 5708</TableCell>
                <TableCell>4:00</TableCell>
                </TableRow>
            </TableBody>
            </Table>
        </TableContainer>
  )}

export default MuiTable
