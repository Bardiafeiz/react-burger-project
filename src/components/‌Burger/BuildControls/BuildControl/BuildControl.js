import React from 'react'
import './BuildControl.css'

const buildControl = props => (
    <div className="BuildControl">
        <div>{props.label}</div>
        <button className="BuildControlButton">Remove</button>
        <button className="BuildControlButton">Add</button>
    </div>
)

export default buildControl