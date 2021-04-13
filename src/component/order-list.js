import { Accordion, AccordionDetails, AccordionSummary, Button, Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useHistory } from "react-router-dom";
import { orders } from '../App';

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
        {(props.orderStatus == "Ready") && <Button variant="contained" color="primary" onClick={() => {
          history.push("/detail", { orderNumber: props.orderNumber });
        }}
          style={{ marginRight: "20px" }}
        >
          Pick up now
                    </Button>}
      </CardContent>
    </Card>
  )
}

export default function OrdersList() {

  const [pickedUp] = React.useState(orders.getState().filter(order => order.status));
  const [ready] = React.useState(orders.getState().filter(order => !order.status && order.readyAt <= Date.now()));
  const [processing] = React.useState(orders.getState().filter(order => !order.status && order.readyAt > Date.now()));

  return (
    <Container>
      <Accordion>
        <AccordionSummary>
          <Typography>Ready ({ready.length})</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {ready.map(order => (
            <OrderCard
              key={order.orderNumber}
              store={order.store}
              orderAmount={Object.values(order.items).reduce((total, current) => 
                total += current.info.price * current.quantity, 0)}
              orderNumber={order.orderNumber}
              orderStatus="Ready"
              pickUpTime={order.readyAt}
            />
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <Typography>Processing ({processing.length})</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {processing.map(order => (
            <OrderCard
              key={order.orderNumber}
              store={order.store}
              orderAmount={Object.values(order.items).reduce((total, current) => 
                total += current.info.price * current.quantity, 0)}
              orderNumber={order.orderNumber}
              orderStatus="Ready"
              pickUpTime={order.readyAt}
            />
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <Typography>Picked Up ({pickedUp.length})</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {pickedUp.map(order => (
            <OrderCard
              key={order.orderNumber}
              store={order.store}
              orderAmount={Object.values(order.items).reduce((total, current) => 
                total += current.info.price * current.quantity, 0)}
              orderNumber={order.orderNumber}
              orderStatus="Ready"
              pickUpTime={order.readyAt}
            />
          ))}
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}