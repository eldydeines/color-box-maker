import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from 'uuid';

const BoxList = () => {

    const INITIAL_STATE = [
        { id: uuid(), width: 250, height: 250, color: "red" },
        { id: uuid(), width: 300, height: 300, color: "green" }
    ];

    const [boxes, setBoxes] = useState(INITIAL_STATE);

    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, { ...newBox, id: uuid() }])
    }

    const removeBox = (boxId) => {
        setBoxes(boxes.filter(({ id }) => id !== boxId));
    }

    return (
        <div>
            <NewBoxForm addBox={addBox} />
            {boxes.map(({ id, width, height, color }) =>
                <Box removeBox={removeBox} key={id} id={id} width={width} height={height} color={color} />
            )}
        </div>
    )
}

export default BoxList;