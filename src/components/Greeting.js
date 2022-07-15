import {useState} from 'react';
import Output from "./Output";

const Greeting = () => {
    const [changedText, setChangeText] = useState(false);

    const changedTextHandler = () => {
        setChangeText(!changedText);
    };

    return (
        <div>
            <h2>Hello World</h2>
            {!changedText && <Output>It's good to see you</Output>}
            {changedText && <Output>Changed</Output>}
            <button onClick={changedTextHandler}>Change Text</button>
        </div>
    )
};

export default Greeting;