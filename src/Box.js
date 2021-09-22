import React, { useState } from "react";

const Box = (props) => {

    const { id, width, height, color } = props;
    console.log(color);
    const setStyle = {
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: `${color}`
    };
    console.log(setStyle);

    return (
        <div style={{
            display: "inline", float: "left", margin: "10px"
        }}>
            <p id={id} style={setStyle}></p>
            <button onClick={() => props.removeBox(id)} style={{ display: "block" }}>X</button>
        </div >
    )
}

export default Box;