import Son1 from "./Son1";
import Son2 from "./Son2";

const Father = () => {
    return (
        <>
            <Son1 name={"Tomer"} />
            <Son2 name={'Koral'} />
        </>
    );
}

export default Father;