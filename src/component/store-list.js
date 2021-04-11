import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import { useHistory } from "react-router";
import apple from "../asset/apple.png";
import microsoft from "../asset/microsoft.png";
import staples from "../asset/staples.png";
import samsungCurvedMonitor from "../asset/samsung-curved-monitor.jpg";
import samsungLedMontior from "../asset/samsung-led-monitor.JPG";

const stores = [
    {
        name: "Microsoft Store",
        address: "2000 McGill College Ave, Montreal, Quebec H3A 3H3",
        image: microsoft,
        location: {
            lat: 45.50370606699054, 
            lng: -73.57394297448062,
        },
        items: [
            {id: "fjsklfsd", name: "Samsung Curved Monitor", price: 499.99, image: samsungCurvedMonitor}, // TODO better ids
            {id: "fsdfsfss", name: "Samsung LED Monitor", price: 398.99, image: samsungLedMontior},
        ],
        processingTime: 0
    },
    {
        name: "Apple Sainte-Catherine",
        address: "1321 Saint-Catherine St W, Montreal, Quebec H3G 1P7",
        image: apple,
        location: {
            lat: 45.49990710485809,
            lng: -73.57538127003237,
        },
        items: [

        ],
        processingTime: 300000
    },
    {
        name: "Bureau en Gros",
        address: "4205 Rue Jean-Talon O, Montréal, QC H4P 1V5",
        image: staples,
        location: {
            lat: 45.5013501622553,
            lng: -73.64811043177039,
        },
        items: [

        ],
        processingTime: 0
    }
];

export default function StoreList() {

    const history = useHistory();

    return (
        <div>
            <List>
                {stores.map(store => (
                    <ListItem key={store.name} button onClick={() => history.push(`/store`, {store})} divider>
                        <ListItemAvatar>
                            <Avatar src={store.image} />
                        </ListItemAvatar>
                        <ListItemText primary={store.name} secondary={store.address} />
                    </ListItem>
                ))}
            </List>
        </div>
    )

}