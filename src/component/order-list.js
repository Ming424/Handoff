import { Accordion, AccordionDetails, AccordionSummary, Button, Chip, Container, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import { ExpandMore } from '@material-ui/icons';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { orders } from "../App";

// ORDER OVERVIEW ITEMS
const OrderCard = (props) => {

  const history = useHistory();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
  return (
    <Card>
      <CardHeader
        title={props.store.name}
        subheader={props.orderAmount}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            Order Number: {props.orderNumber} <br />
            Order Status : {props.orderStatus} <br />
            Pickup Time: {props.pickUpTime.toLocaleString()} <br />
            Address: {props.store.address} <br />
        </Typography>
        <br></br>
        {(props.orderStatus === "Ready") && <Button variant="contained" color="primary" onClick={() => {
          history.push("/detail", { orderNumber: props.orderNumber });
        }}
          style={{ marginRight: "20px" }}
        >
          See detail
                    </Button>}
      </CardContent>
    </Card>
  )
}

function OrderCategory(props) {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Grid container>
          <Grid item xs={11}>
            <Typography align="left">{props.status}</Typography>
          </Grid>
          <Grid item xs={1}>
            <Chip label={props.orders.length} color="primary" size="small" />
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        {props.orders.map(order => (
          <OrderCard
            key={order.orderNumber}
            store={order.store}
            orderAmount={order.price}
            orderNumber={order.orderNumber}
            orderStatus={props.status}
            pickUpTime={order.readyAt}
          />
        ))}
      </AccordionDetails>
    </Accordion>
  )
}


export default function OrdersList() {

  const [history] = useState(orders.getState());

  return (
    <Container>
      <OrderCategory orders={history.filter(order => !order.status && order.readyAt <= Date.now())} status="Ready" />
      <OrderCategory orders={history.filter(order => !order.status && order.readyAt > Date.now())} status="Processing" />
      <OrderCategory orders={history.filter(order => order.status)} status="Picked Up" />
    </Container>
  );
}