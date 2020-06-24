import React from 'react'
import './Card.css'


export default function Card(props) {
    return (
        
        <div className='card-task'>
            <div className="task-name">{props.name}</div>
            <div className="task-rating">{props.rating}</div>
            <div className="task-duration">{props.duration}</div>
            <div className="more-option">...</div>
            <div className="options">
                <div>Start</div>
                <div>Edit</div>
                <div>Delete</div>
            </div>
        </div>
    )
}
