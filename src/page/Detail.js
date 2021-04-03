import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Card, CardContent, Table, TableContainer, TableHead, TableRow, TableCell, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import samsungCurved from "../asset/samsung-curved-monitor.jpg";
import samsungLED from "../asset/samsung-led-monitor.JPG";

const Detail = (props) => {
    const [toggleOpen] = useState(false);

    const [user] = useState({
        location: {lat: 45.46501895077987, lng: -73.63730895767137}
    })

    const [order] = useState({
        orderNum:"8904535",
        storeName:"Miscrosoft Store", 
        storeAddress:"Microsoft Store Rive-Sud",
        location: {lat: 45.46506489842774, lng: -73.46695018950182},
        pickupTime: "2:00 PM, Feb 24, 2021",
        status: "Ready",
        travelTime: "23",
        trafficStatus: "Fluent",
        items: [
        {
          name:"Samsung Curved Monitor", 
          img: samsungCurved,
          itemNum:"12345", 
          quantity:"1", 
        },
        {
          name:"Samsung LED Monitor", 
          img:samsungLED, 
          itemNum:"12346", 
          quantity:"1", 
        },
      ]
    });

    const useStyles = makeStyles((theme) => ({
        root: {
            padding: 0,
            margin: "0px auto",
            overflowY: "hidden",
            boxSizing: "border-box"
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

    return (
        <div>
            <Card variant="outlined" className={classes.root}>
                <CardContent className={classes.header}>
                    <Typography style={{ textTransform: "capitalize" }} variant="h4">
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <Button to='/' style={{minWidth: 0}}>
                                &lt;
                            </Button>
                        </Link>
                        Detail Page
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
                                    {order.storeName} <br/>
                                    {order.storeAddress} <br/>
                                </Typography>
                            </TableCell>
                            <TableCell className={classes.item}>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Order number: {order.orderNum} <br/>
                                    Pickup status: {order.status} <br/>
                                    Pickup time: {order.pickupTime} <br/>
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </Table>
                </CardContent>
                <TableContainer style={{ maxHeight: "250px" }}>
                    <Table className={classes.itemList}>
                    {
                        order.items.map(item => (
                            <TableRow key={item.itemNum}>
                                <TableCell>
                                    <img src={item.img} alt="item" className={classes.itemImage}/>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {item.name} <br/>
                                        Quantity: {item.quantity} <br/>
                                        Item number: {item.itemNum}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                    </Table>
                </TableContainer>

                <CardContent>
                    <Button variant="contained" color="primary" onClick={() => {
                        history.push("/confirmation", {
                            store: order.storeName,
                            storeLocation: order.location,
                            userLocation: user.location
                        });
                    }}
                        style={{marginRight: "20px"}}
                    >
                        Pick up now
                    </Button>
                    <Button variant="contained" color="primary">
                        Pick up later
                    </Button>
                </CardContent>
                <div className={toggleOpen ? classes.pickupOpen : classes.pickup}>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Traffic status: {order.trafficStatus} <br/>
                        Estimated travel time: {order.travelTime} <br/>
                    </Typography>
                </div>
            </Card>
        </div>
    )
}

export default Detail;