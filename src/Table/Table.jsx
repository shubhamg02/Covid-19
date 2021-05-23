import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable({rows}) {
  const classes = useStyles();

  console.log('Rows ',rows);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{fontWeight: '900'}}>Name</TableCell>
            <TableCell align="right" style={{fontWeight: '900'}}>Contact no</TableCell>
            <TableCell align="right" style={{fontWeight: '900'}}>Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.data.contact}>
              <TableCell component="th" scope="row">
                {row.data.name}
              </TableCell>
              <TableCell align="right">{row.data.contact}</TableCell>
              <TableCell align="right">{row.data.location}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
