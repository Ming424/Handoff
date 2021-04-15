import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Card, CardContent, Table, TableContainer, TableHead, TableRow, TableCell, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { orders } from '../App';
import BackButton from '../component/backButton';

const orderFor = (orderNumber) => {
    const state = orders.getState();
    return state[orderNumber];
}

const computeStatus = (readyAt, status) => {
    if (status) {
        return "Picked up"
    }
    return isProcessing(readyAt) ? "Ready" : "Processing"
}

const isProcessing = (readyAt) => {
    return readyAt < Date.now();
}

const Detail = (props) => {
    
    const [user] = useState({
        location: {lat: 45.46501895077987, lng: -73.63730895767137}
    })
    
    const [order] = useState(orderFor(props.location.state.orderNumber));

    const useStyles = makeStyles((theme) => ({
        root: {
            padding: 0,
            margin: "0px auto",
            overflowY: "hidden",
            boxSizing: "border-box",
            border: "none",
            boxShadow: "none"
        },
        header: {
            padding: "10px 10px 5px 10px"
        },
        table: {
            maxWidth: 500,
            margin: "0px auto",
            padding: 5
        },
        itemList: {
            maxWidth: 500,
            margin: "0px auto",
            padding: 5,
            overflowY: "scroll"
        },
        itemImage: {
            maxHeight: 75,
            maxWidth: 100
        },
        item: {
            padding: 10
        },
        pickup: {
            display: "none"
        },
        pickupOpen: {
            display: "block"
        }
    }));

    const classes = useStyles();
    const history = useHistory();

    return order ? (
        <Card   className={classes.root}>
            <BackButton />
                <CardContent className={classes.header}>
                    <Typography style={{ textTransform: "capitalize" }} variant="h4">
                        Order Detail
                    </Typography>
                </CardContent>
                <CardContent>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableCell>Store Information</TableCell>
                            <TableCell>Order Information</TableCell>
                        </TableHead>
                        <TableRow>
                            <TableCell className={classes.item}>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {order.store.name} <br/>
                                    {order.store.address} <br/>
                                </Typography>
                            </TableCell>
                            <TableCell className={classes.item}>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Order number: {props.location.state.orderNumber} <br/>
                                    Pickup status: {computeStatus(order.readyAt, order.status)} <br/>
                                    Pickup time: {order.readyAt.toLocaleString()} <br/>
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </Table>
                </CardContent>
                <TableContainer style={{ maxHeight: "250px" }}>
                    <Table className={classes.itemList}>
                    {
                        Object.values(order.items).map(item => (
                            <TableRow key={item.info.id}>
                                <TableCell>
                                    <img src={item.info.image} alt="item" className={classes.itemImage}/>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {item.info.name} <br/>
                                        Quantity: {item.quantity} <br/>
                                        Item number: {item.info.id}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                    </Table>
                </TableContainer>

                <CardContent>
                    <Button disabled={!isProcessing(order.readyAt)} variant="contained" color="primary" onClick={() => {
                        history.push("/confirmation", {
                            store: order.store.name,
                            storeLocation: order.store.location,
                            userLocation: user.location,
                            orderNumber: order.orderNumber,
                        });
                    }}
                        style={{marginRight: "20px"}}
                    >
                        Pick up now
                    </Button>
                    <Button variant="contained" color="default" onClick={() => {
                        history.push("/scheduling", {
                            store: order.store.name,
                            storeLocation: order.store.location,
                            userLocation: user.location,
                            orderNumber: order.orderNumber,
                        });
                    }}
                        style={{marginRight: "20px"}}
                    >
                        Pick up later
                    </Button>
                </CardContent>
        </Card>
    ) : null;
}

export default Detail;