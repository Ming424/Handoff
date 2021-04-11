import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Add, Remove } from "@material-ui/icons";

const isInteger = (value) => {
    return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value));
}

export function QuantitySelector(props) {

    const [count, setCount] = useState(props.initialValue ?? 0);

    const handleIncrement = () => {
        setCount(prev => prev + 1);
        props.onIncrement(props.identifier, count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(prev => prev - 1);
            props.onIncrement(props.identifier, count - 1);
        }
        else {
            setCount(0);
            props.onIncrement(props.identifier, 0)
        }
    };

    const handleBlur = (event) => {
        if (isInteger(event.target.value)) {
            setCount(event.target.value);
            props.onIncrement(props.identifier, event.target.value);
        } else {
            setCount(0);
        }
    }

    return (
        <div>
            <Button onClick={handleDecrement}>
                <Remove />
            </Button>
            <input value={count} 
                onChange={(event) => setCount(event.target.value)}
                onBlur={(event) => handleBlur(event)}
                style={{width: 0x40}}
            />
            <Button onClick={handleIncrement}>
                <Add />
            </Button>   
        </div>
    );
}