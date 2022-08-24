import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { FaTimes } from "react-icons/fa";

const TableUI = ({ dayOfWeek, calls, onDelete }) => {
  console.log(calls)
  return (
    <TableContainer component={Paper}>
      <h3>{dayOfWeek}</h3>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Volunteer Name</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Senior</TableCell>
            <TableCell align="right">Phone number</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Day</TableCell>
            <TableCell align="right">Phone Line</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {calls?.filter(row => row.day.toLowerCase() === dayOfWeek.toLowerCase()).map((row, i) => (
            <TableRow
              key={i}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.volunteerName}
              </TableCell>
              <TableCell align="right">{row.volunteerPhoneNumber}</TableCell>
                <TableCell align="right">{row.seniorName}</TableCell>
                <TableCell align="right">{row.seniorPhoneNumber}</TableCell>
                <TableCell align="right">{row.Time}</TableCell>
                <TableCell align="right">{row.day}</TableCell>
                <TableCell align="right">{row.phoneNumber}</TableCell>
              <td>
                <FaTimes onClick={() => onDelete(row.id)} />
              </td>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};



export default TableUI;
