import React from "react";
import "../resources/Tiles.css";

const Tile = props => {
    return (
        <div className={"tile temp-position-" + props.tilePosition}>
            <div className={"value-" + props.value}>{props.value}</div>
        </div>
    );
};

export default Tile;
