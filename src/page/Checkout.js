import { Avatar, Button, Container, Divider, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Typography } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { orders } from "../App";
import { QuantitySelector } from "../component/quantity-selector";

const TAX_RATE = 0.15;

const lineItemTotal = (item) => {
    return item.info.price * item.quantity;
}

const subtotalOn = (items) => {
    return Object.values(items).reduce((total, item) => total += lineItemTotal(item), 0);
}

const taxOn = (subTotal) => {
    return (subTotal * TAX_RATE);
}

const beautify = (amount) => {
    return amount.toFixed(2);
}

export default function Checkout(props) {

    const history = useHistory();
    const [items, setItems] = useState(props.location.state.items);
    const [subtotal, setSubtotal] = useState(0);
    const [tax, setTax] = useState(0);
    const handleIncrement = useCallback((identifier, quantity) => (
        setItems({
            ...items, 
            [identifier]: {...items[identifier], quantity: quantity}
        })), [items]);

    const handleDelete = (name) => {
        const temp = Object.keys(items).filter(item => item !== name);
        if (temp.length) {
            setItems(temp.reduce((obj, item) => {
                obj[item] = items[item];
                return obj;
            }, {}));
        } else {
            history.goBack();
        }
    }

    useEffect(() => {
        setSubtotal(subtotalOn(items));
    }, [items]);

    useEffect(() => {
        setTax(taxOn(subtotal));
    }, [subtotal]);

    return (
        <Container>
            <List>
                {Object.keys(items).map(name => (
                    <ListItem key={name} divider>
                        <ListItemAvatar>
                            <Avatar src={items[name].info.image} />
                        </ListItemAvatar>
                        <ListItemText primary={name} secondary={items[name].info.price} />
                        <QuantitySelector onIncrement={handleIncrement} identifier={name} initialValue={items[name].quantity} />
                        <ListItemText primary={beautify(lineItemTotal(items[name]))} />
                        <ListItemSecondaryAction>
                            <IconButton onClick={() => handleDelete(name)}>
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
            <Grid container>
                <Grid  item xs={11}>
                    <Typography align="right" variant="h6">Subtotal:</Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography align="right" variant="h6">{beautify(subtotalOn(items))}</Typography>
                </Grid>
                <Grid item xs={11}>
                    <Typography align="right" variant="h6">Tax:</Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography align="right" variant="h6">{beautify(tax)}</Typography>
                </Grid>
                <Grid item xs={11}>
                    <Typography align="right" variant="h6">Total:</Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography align="right" variant="h6">{beautify(subtotal + tax)} </Typography>
                </Grid>
            </Grid>
            <Button onClick={() => {
                    orders.dispatch({type: "order/add-order", payload: { store: props.location.state.store, items}});
                    const orderNumber = orders.getState().orders.length - 1;
                    history.push("/detail", {orderNumber});
                }}
            >
                Confirm Order
            </Button>
        </Container>
    )
}