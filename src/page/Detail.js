import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const Detail = (props) => {
    return (
        <div>
            <h1>DETAIL PAGE1</h1>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <Button  variant="contained" color="primary" to='/'>
                    &lt;
                </Button>
            </Link>
            <p>I am a detail</p>
        </div>
    )
}

export default Detail;