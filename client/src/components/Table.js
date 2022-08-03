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

const TableUI = ({ calls, onDelete }) => {
  return (
    <TableContainer component={Paper}>
      <h2>Monday</h2>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Volunteer Name</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Senior</TableCell>
            <TableCell align="right">Phone number</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Phone Line</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {calls?.map((row, i) => (
            <TableRow
              key={i}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.volunteerName}
              </TableCell>
              <TableCell align="right">
                <TableCell colSpan='2'>
                  {row.seniorName} 
                  {row.Time}
                </TableCell>
              </TableCell>
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
