import React from 'react'
import '../resources/Tiles.css'

const Tile = (props) => {
    return (
        <div className={'tile ' + props.tilePosition + ' value-' + props.value}>
            <div>{props.value}</div>
        </div>
    )
}

export default Tile