import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';

import productList from './data/productdata';
import salesRepList from './data/salesreps';

const useStyles = makeStyles({
    deleteRed: {
       color: 'red'
    },
});


export default function ItemTableRow(props) {

    const classes = useStyles();

    const [state, setState] = React.useState({
        productTitle: '',
        salesRep: '',
        rate: 0,
        quantity: 0,
        subTotal: 0
    });

    React.useEffect(() => {
        props.updateDataHandler(state,props.rowIndex);
    }, [state]);

    React.useEffect(() => {
        let subTotal = parseInt(state.rate) * parseInt(state.quantity);
        setState(state => ({ ...state, subTotal: subTotal }));
    }, [state.rate]);

    React.useEffect(() => {
        let subTotal = parseInt(state.rate) * parseInt(state.quantity);
        setState(state => ({ ...state, subTotal: subTotal }));
    }, [state.quantity]);


    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    return (

        <TableRow >
            <TableCell component="th" scope="row">
                <Select
                    native
                    value={state.productTitle}
                    onChange={handleChange}
                    inputProps={{
                        name: 'productTitle'
                    }}
                >
                    <option aria-label="None" value="" />
                    {
                        productList.map((product, index) => {
                            return <option value={product.title}>{product.title}</option>
                        })
                    }

                </Select>

            </TableCell>
            <TableCell >
                <Select
                    native
                    value={state.salesRep}
                    onChange={handleChange}
                    inputProps={{
                        name: 'salesRep'
                    }}
                >
                    <option aria-label="None" value="" />
                    {
                        salesRepList.map((rep, index) => {
                            return <option value={rep.name}>{rep.name}</option>
                        })
                    }

                </Select>
            </TableCell>
            <TableCell ><TextField name="rate" onChange={handleChange} variant="outlined" value={state.rate} /></TableCell>
            <TableCell ><TextField name="quantity" onChange={handleChange} variant="outlined" value={state.quantity} /></TableCell>
            <TableCell ><TextField name="subTotal" variant="outlined" value={state.subTotal} InputProps={{
                readOnly: true,
            }} /></TableCell>
            <TableCell align="right" ><RemoveCircleIcon onClick={() => props.deleteHandler(props.rowIndex)} className={classes.deleteRed}></RemoveCircleIcon></TableCell>
        </TableRow>
    )



}