import React, { useState } from "react";
import DialogComp from "../DialogComp";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  makeStyles,
  Paper,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import userTableColumns from "../../constants/user-table-columns";
import './CustomerList.css';
const useStyles = makeStyles({
  container: {
    margin: "auto",
    marginTop: "150px",
    width: "70%",
  },
  button: {
    float: "right",
    marginBottom: 20,
  },
});

function Customerslist(props) {
  const classes = useStyles();
  const [arr, setArr] = useState([
    {
      firstName: "Rahul",
      lastName: "cool",
      contact: "9876543210",
      email: "rahul@gmail.com",
    },
    {
      firstName: "Manish",
      lastName: "dwig",
      contact: "9876543210",
      email: "dwig@gmail.com",
    },
    {
      firstName: "Mani",
      lastName: "thammana",
      contact: "9876543210",
      email: "thammana@gmail.com",
    },
  ]);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleAdd = (data) => {
    setArr([...arr, data]);
    handleClose();
  };

  return (
    <div className={classes.container}>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={handleOpen}
      >
        <AddIcon /> Add customer
      </Button>
      <TableContainer
        component={Paper}
        style={{ border: "2px solid gray", borderRadius: "12px" }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {userTableColumns.map((column) => (
                <TableCell>
                  <b>{column.columnText}</b>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {arr.map((ele, i) => {
              return (
                <TableRow key={i} hover>
                  <TableCell>{ele.firstName}</TableCell>
                  <TableCell>{ele.lastName}</TableCell>
                  <TableCell>{ele.contact}</TableCell>
                  <TableCell>{ele.email}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {open && (
        <DialogComp
          open={open}
          handleClose={handleClose}
          handleAdd={handleAdd}
        />
      )}
    </div>
  );
}

export default Customerslist;
