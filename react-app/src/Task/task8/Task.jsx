 
import React, { useState } from "react";
import Buttons from "./component/Buttons"; 
import Count from "./component/Count";

const Task = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <Count count={count} />
            <Buttons count={count} setCount={setCount} /> 
        </div>
    );
};

export default Task;
