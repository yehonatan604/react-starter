import { useState, useEffect, useCallback } from "react";
import useName from "../hooks/userName";

const Son1 = (props) => {
    const [name, handleName] = useName(props.name);
    const [num, setNum] = useState(0);

    const numUp = useCallback(() => {
        setNum((oldValue) => oldValue + 1);
    }, [setNum]);

    useEffect(() => {
        numUp();
        return () => {
            setNum(0);
        }
    }, [numUp]);


    return (
        <div>
            <h1>{name}</h1>
            <button onClick={() => handleName('Zohar')}>click</button>
            <h1>{num}</h1>
            <button onClick={numUp}>+</button>
        </div>
    );
}

export default Son1;