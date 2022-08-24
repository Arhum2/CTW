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




function Row({ calls }) {
    const [callData, setCallData] = useState()
    useEffect(()=>{
      if(!calls) return;
      setCallData(calls);
    },[calls]);
  const [open, setOpen] = React.useState(false);
if(!calls) return;
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
              {callData.day}
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
                      {callData.data.map((rowData) => (
                        <TableRow key={callData.day}>
                          <TableCell component="th" scope="row">
                            {callData.day}
                          </TableCell>
                          <TableCell>{callData.volunteerName}</TableCell>
                          <TableCell>{callData.volunteerPhoneNumber}</TableCell>
                          <TableCell>{callData.seniorName}</TableCell>
                          <TableCell>{callData.seniorPhoneNumber}</TableCell>
                          <TableCell>{callData.Time}</TableCell>
                          <TableCell>{callData.day}</TableCell>
                          <TableCell>{callData.phoneNumber}</TableCell>
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

    function createData(day) {
        for(let i = 0; i < callData.day[day].length; i++) {
            return {
                day,
                data: callData.day[day],
            };
        }
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
        ).isRequired,
      })
    };

  

const rows = [
  createData("Monday"),
  createData("Tuesday"),
  createData("Wednesday"),
  createData("Thursday"),
  createData("Friday"),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableBody>
          {rows.map((row) => (
            <Row key={row.day} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
