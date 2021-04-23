import { Avatar, Container, List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import { useHistory } from "react-router";
import apple from "../asset/apple.png";
import bestbuy from "../asset/bestbuy.png";
import cable from "../asset/cable.png";
import controllerphone from "../asset/controllerphone.png";
import galaxyFlip from "../asset/galazy_flip.png";
import gamingchair from "../asset/gamingchair.png";
import ink from "../asset/ink.png";
import inkcolor from "../asset/inkcolor.png";
import iPadAir from "../asset/ipad_air.png";
import iPadMini from "../asset/ipad_mini.png";
import iPhone12 from "../asset/iphone_12.png";
import macBookAir from "../asset/macbook_air.png";
import microsoft from "../asset/microsoft.png";
import quickcharge from "../asset/quickcharge.png";
import samsungCurvedMonitor from "../asset/samsung-curved-monitor.jpg";
import samsungLedMontior from "../asset/samsung-led-monitor.JPG";
import samsungMysticBlack from "../asset/samsung_mystic_black.png";
import samsungMysticBronze from "../asset/samsung_mystic_bronze.png";
import seagrass from "../asset/seagrass.png";
import sonycam from "../asset/sonycam.png";
import thesource from "../asset/source.png";
import staples from "../asset/staples.png";
import vlogcam from "../asset/vlogcam.png";
import wallcharger from "../asset/wallcharger.png";
import workchair from "../asset/workchair.png";
import xbox from "../asset/xbox.png";

// STORE LIST
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
            { id: "00051201", name: "Samsung Curved Monitor", price: 499.99, image: samsungCurvedMonitor }, // TODO better ids
            { id: "12548711", name: "Samsung LED Monitor", price: 398.99, image: samsungLedMontior },
            { id: "09992231", name: "Galaxy Z Fold2 5G (Mystic Bronze)", price: 2319.99, image: samsungMysticBronze },
            { id: "09992232", name: "Galaxy Z Fold2 5G (Mystic Black)", price: 2319.99, image: samsungMysticBlack },
            { id: "09924543", name: "Galaxy Z Flip 5G", price: 1579.99, image: galaxyFlip },
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
            { id: "15672922", name: "iPhone 12", price: 979.99, image: iPhone12 }, // TODO better ids
            { id: "09924910", name: "iPad Air", price: 779.99, image: iPadAir },
            { id: "09924915", name: "iPad Mini", price: 339.99, image: iPadMini },
            { id: "09924978", name: "MacBook Air", price: 1299.99, image: macBookAir },
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
            { id: "10909999", name: "DXRacer RW106 Racing Series Gaming Chair, White", price: 389.99, image: gamingchair },
            { id: "13425555", name: "Gry Mattr Work Chair - Black", price: 299.99, image: workchair },
            { id: "19099222", name: "TRU RED Reman Ink Cartridge, Canon PG-245 Black, Standard Yield", price: 20.39, image: ink },
            { id: "19099223", name: "TRU RED Reman Ink Cartridge, Canon CL-246 Color, Standard Yield", price: 25.99, image: inkcolor },
        ],
        processingTime: 0
    },
    {
        name: "Best Buy",
        address: "4205 Rue Jean-Talon O, Montréal, QC H4P 1V5",
        image: bestbuy,
        location: {
            lat: 45.53198950527003,
            lng: -73.65066060696232,
        },
        items: [
            { id: "18582032", name: "Sony Cyber-shot ZV-1 Content Creator Vlogger 20.1MP 2.9x Optical Zoom Digital Camera - Black", price: 900.24, image: vlogcam },
            { id: "59682039", name: "Sony Cyber-shot HX80 18.2MP 30x Optical Zoom Digital Camera - Black", price: 500.24, image: sonycam },
            { id: "42975800", name: "HP DeskJet 3755 Wireless All-In-One Inkjet Printer - Seagrass", price: 96.24, image: seagrass },
        ],
        processingTime: 400000
    },
    {
        name: "The Source",
        address: "500 McGill College Ave, Montréal, QC H3A 3J5",
        image: thesource,
        location: {
            lat: 45.46400338614056,
            lng: -73.83130720069802,
        },
        items: [
            { id: "42842822", name: "VITAL 18W USB Type-C™ PD Wall Charger - Black", price: 24.99, image: wallcharger },
            { id: "54385789", name: "VITAL 1.2m (4’) USB Type-C™-to-USB Charge & Sync Fabric Cable - Blue", price: 24.99, image: cable },
            { id: "42374700", name: "VITAL Rubberized Wireless Charger with Qualcomm® Quick Charge™ Technology", price: 20.99, image: quickcharge },
            { id: "10809064", name: "Xbox Series S", price: 380.79, image: xbox },
            { id: "42342244", name: "Xtreme Gaming Controller Phone Mount", price: 9.99, image: controllerphone },
        ],
        processingTime: 200000
    }
];

export default function StoreList() {

    const history = useHistory();

    return (
        <Container maxWidth='lg'>
            <List>
                {stores.map(store => (
                    <ListItem key={store.name} button onClick={() => history.push(`/store`, { store })} divider>
                        <ListItemAvatar>
                            <Avatar src={store.image} />
                        </ListItemAvatar>
                        <ListItemText primary={store.name} secondary={store.address} />
                    </ListItem>
                ))}
            </List>
        </Container>
    )

}