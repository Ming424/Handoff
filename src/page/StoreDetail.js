import { Avatar, Button, Container, List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import { useCallback, useState } from "react";
import { useHistory } from "react-router";
import BackButtom from '../component/backButton';
import { QuantitySelector } from "../component/quantity-selector";

// STORE ITEMS LIST
const hasItems = (items) => {
    for (let name in items) {
        if (items[name].quantity) {
            return true;
        }
    }
    return false;
}

export default function StorePage(props) {

    const history = useHistory();
    const [items, setItems] = useState({}); // {name1: {info, quantity}, name2: ...}
    const handleIncrement = useCallback((identifier, quantity) =>
        setItems({
            ...items, [identifier]: {
                info: props.location.state.store.items.find(item => item.name === identifier),
                quantity: quantity
            }
        }), [props.location.state.store.items, items]);

    const handleClick = (item) => history.push("/item", { item });

    return (
        <Container>
            <BackButtom />
            <List>
                {props.location.state.store.items.map(item => (
                    <ListItem key={item.name}>
                        <ListItemAvatar onClick={() => handleClick(item)}>
                            <Avatar src={item.image} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={item.name}
                            secondary={item.price}
                        />
                        <QuantitySelector onIncrement={handleIncrement} identifier={item.name} />
                    </ListItem>
                ))}
            </List>
            <Button variant="contained" color="primary" disabled={!hasItems(items)} onClick={() => history.push("/checkout", { store: props.location.state.store, items })}>Checkout</Button>
        </Container>
    );
}