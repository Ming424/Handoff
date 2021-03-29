import Button from '@material-ui/core/Button';
import logo from '../asset/logo.png';
import { Link } from "react-router-dom";
const Dashboard = (props) => {
    return (
        <div>
            <h1>DASHBOARD PAGE</h1>
            
            <Link to='/detail' style={{ textDecoration: 'none' }}>
                <Button  variant="contained" color="primary" to='/detail'>
                    &gt;
                    GO TO DETAIL PAGE TEST
                </Button>
            </Link>
        
            <>
            <div>
            <img src={logo} style={{height:'100px'}} alt="LOGO" />
            </div>
            </>
        </div>
    )
}

export default Dashboard;