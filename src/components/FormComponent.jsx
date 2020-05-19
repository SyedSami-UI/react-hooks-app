import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import AddIcon from '@material-ui/icons/Add';

import ItemTable from './Table';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        margin: '100px 50px 100px 50px',
        border: '1px solid #CFCFCF'
    },
    headerBg: {
        backgroundColor: '#F0F0F0',
        borderBottom: '1px solid #CFCFCF'
    },
    actionSection: {
        borderTop: '1px solid #CFCFCF',
        justifyContent: 'flex-end'
    },
    addButtonBg: {
        backgroundColor: '#057F20'
    }
});

export default function FormComponent() {
    const classes = useStyles();

    const [rowData, setRowData] = React.useState([]);

    React.useEffect(() => {
        console.log(rowData);

    }, [rowData]);

    const handleAddNew = () => {
        let newRowData = {
            rowIndex: Object.keys(rowData).length + 1,
            rowData: []
        }
        setRowData(rowData => [...rowData, newRowData]);
    };

    const deleteRow = (index) => {
        console.log(index);
        setRowData(rowData.filter((e) => (e.rowIndex !== index)));
    }

    const updateRowData = (data, index) => {
        let newArr = [...rowData];
        let objIndex = newArr.findIndex((obj => obj.rowIndex === index));
        newArr[objIndex].rowData = data;
        setRowData(newArr);
    }

    const handleSubmit = () => {
        console.log(rowData);
    }

    return (
        <Card className={classes.root} variant="outlined">
            <CardHeader className={classes.headerBg} title="Items">
            </CardHeader>
            <CardContent>
                {
                    Object.keys(rowData).length === 0
                        ?
                        <h1>No Data Available. Start adding new row.</h1>
                        :
                        <ItemTable rows={rowData} deleteHandler={deleteRow} updateDataHandler={updateRowData}></ItemTable>
                }

            </CardContent>
            <CardActions className={classes.actionSection}>
                {
                    Object.keys(rowData).length > 0 &&
                    <Button onClick={handleSubmit} size="small" variant="contained" color="primary">
                        <span>Submit</span>
                    </Button>
                }

                <Button onClick={handleAddNew} size="small" variant="contained" color="primary" className={classes.addButtonBg}>
                    <AddIcon ></AddIcon> <span>New</span>
                </Button>
            </CardActions>
        </Card>
    );
}