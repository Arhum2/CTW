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
      <h2>Calls</h2>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Volunteer Name</TableCell>
            <TableCell align="right">Monday</TableCell>
            <TableCell align="right">Tuesday</TableCell>
            <TableCell align="right">Wednesday</TableCell>
            <TableCell align="right">Thursday</TableCell>
            <TableCell align="right">Friday</TableCell>
            <TableCell align="right">Phone Number</TableCell>
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
                <td colSpan='2'>{row.seniorName} @ {row.Time}</td>
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
