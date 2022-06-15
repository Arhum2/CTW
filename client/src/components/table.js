import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const TableUI = ({ call }) => {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Volunteer Name</TableCell>
              <TableCell align="right">Senior Name</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Time</TableCell>
              <TableCell align="right">Phone Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {call?.map((row) => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {call.row.name}
                </TableCell>
                <TableCell align="right">{call.row.volunteerName}</TableCell>
                <TableCell align="right">{call.row.seniorName}</TableCell>
                <TableCell align="right">{call.row.Date}</TableCell>
                <TableCell align="right">{call.row.Time}</TableCell>
                <TableCell align="right">{call.row.phoneNumber}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

export default TableUI