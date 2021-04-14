import Button from '@material-ui/core/Button';

import { Link } from "react-router-dom";
import StoreList from '../component/store-list';
const Dashboard = (props) => {
    return (
        <div>
            <h1>DASHBOARD PAGE</h1>
            <StoreList />
        </div>
    )
}

export default Dashboard;