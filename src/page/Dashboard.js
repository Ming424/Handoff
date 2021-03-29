import Button from '@material-ui/core/Button';
import logo from '../asset/logo.png';
const Dashboard = (props) => {
    return (
        <div>
            <h1>DASHBOARD PAGE</h1>
            <Button variant="contained" color="primary">
              Hello World
            </Button>
        
            <>
            <img src={logo} style={{height:'100px'}} alt="LOGO" />
            </>
        </div>
    )
}

export default Dashboard;