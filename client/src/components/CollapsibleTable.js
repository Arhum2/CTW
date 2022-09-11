import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { FaTimes } from "react-icons/fa";


function Row({ onDelete, rowGroup }) {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {rowGroup.day}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>volunteer Name</TableCell>
                    <TableCell>Phone Number</TableCell>
                    <TableCell align="right">Senior Name</TableCell>
                    <TableCell align="right">Phone Number</TableCell>
                    <TableCell align="right">Time</TableCell>
                    <TableCell align="right">Day</TableCell>
                    <TableCell align="right">Phone Line</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rowGroup.data.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="left">{row.volunteerName}</TableCell>
                      <TableCell align="right">{row.volunteerPhoneNumber}</TableCell>
                      <TableCell align="right">{row.seniorName}</TableCell>
                      <TableCell align="right">{row.seniorPhoneNumber}</TableCell>
                      <TableCell align="right">{row.Time}</TableCell>
                      <TableCell align="right">{row.phoneNumber}</TableCell>
                      <td>
                        <FaTimes onClick={() => onDelete(row.id)} />
                      </td>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        volunteerName: PropTypes.string,
        volunteerPhoneNumber: PropTypes.string,
        seniorName: PropTypes.string,
        seniorPhoneNumber: PropTypes.string,
        Time: PropTypes.object,
        day: PropTypes.string,
        phoneNumber: PropTypes.string
      })
    )
  })
};

export default function CollapsibleTable({ rowGroups }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableBody>
          {rowGroups.map((row) => (
            <Row key={row.day} rowGroup={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
