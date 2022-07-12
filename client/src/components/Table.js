import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { FaTimes } from 'react-icons/fa'


const TableUI = ({ calls, onDelete }) => {
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
          {calls?.map((row,i) => (
            <TableRow
              key={i}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" key={calls.volunteerName}>
                {row.volunteerName}
              </TableCell>
              <TableCell key={calls.seniorName} align="right">{row.seniorName}</TableCell>
              <TableCell key={calls.Date} align="right">{row.Date}</TableCell>
              <TableCell key={calls.Time} align="right">{row.Time}</TableCell>
              <TableCell key={calls.phoneNumber} align="right">{row.phoneNumber}</TableCell>
              <td><FaTimes onClick={() => onDelete(calls.id)}/></td>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableUI;
