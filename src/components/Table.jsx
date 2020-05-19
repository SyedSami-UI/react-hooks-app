import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import TableRow from '@material-ui/core/TableRow';

import ItemTableRow from './TableRow';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


export default function ItemTable(props) {
    const classes = useStyles();

    React.useEffect(() => {
        
    }, [props]);

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Item</TableCell>
                        <TableCell>By</TableCell>
                        <TableCell >Rate</TableCell>
                        <TableCell >Quantity</TableCell>
                        <TableCell >Sub Total</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        props.rows.map((rowItem, index) => {
                            console.log(rowItem);
                            return (<ItemTableRow key={rowItem.rowIndex} data={rowItem.rowData} rowIndex={rowItem.rowIndex} {...props}></ItemTableRow>)
                        })
                    }
                    
                </TableBody>
            </Table>
        </TableContainer>
    );
}