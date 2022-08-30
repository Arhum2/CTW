import * as React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";




function Row({ rowGroup }) {


  const [open, setOpen] = React.useState(false);
return(
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
                  <Typography variant="h6" gutterBottom component="div">
                    History
                  </Typography>
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
                      {rowGroup.data.map((rowData) => (
                        <TableRow key={rowGroup.day}>
                          <TableCell component="th" scope="row">
                            {rowGroup.day}
                          </TableCell>
                          <TableCell>{rowGroup.volunteerName}</TableCell>
                          <TableCell>{rowGroup.volunteerPhoneNumber}</TableCell>
                          <TableCell>{rowGroup.seniorName}</TableCell>
                          <TableCell>{rowGroup.seniorPhoneNumber}</TableCell>
                          <TableCell>{rowGroup.Time}</TableCell>
                          <TableCell>{rowGroup.day}</TableCell>
                          <TableCell>{rowGroup.phoneNumber}</TableCell>
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
            volunteerName: PropTypes.string.isRequired,
            volunteerPhoneNumber: PropTypes.string.isRequired,
            seniorName: PropTypes.string.isRequired,
            seniorPhoneNumber: PropTypes.string.isRequired,
            Time: PropTypes.object.isRequired,
            day: PropTypes.string,
            phoneNumber: PropTypes.string.isRequired,
          })
        )
      })
    };

  

const row = [
  {
    volunteerName: "john",
    volunteerPhoneNumber: "11091700",
    seniorName: "doe",
    seniorPhoneNumber: "1234",
    Time: "time",
    day: "Monday",
    phoneNumber: "45345",
  },
  // createData("Monday", callData),
  // createData("Tuesday", callData),
  // createData("Wednesday", callData),
  // createData("Thursday", callData),
  // createData("Friday", callData),
];


export default function CollapsibleTable({ rowGroups }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableBody>
          {rowGroups.map((row) => (
            <Row key={rowGroup.day} rowGroup={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
