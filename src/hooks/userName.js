import { useEffect, useState } from "react";

const useName = (fName) => {
    const [name, setName] = useState(fName);

    const handleName = (lName) => {
        setName((oldValue) => `${oldValue} ${lName}`);
    }

    useEffect(() => {
        //handleName();
    }, []);

    return [name, handleName];
}

export default useName;