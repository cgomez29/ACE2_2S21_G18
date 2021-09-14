import React from 'react'
import './Card.css'

const Card = ({icon, title, value}) => {
    return (
        <div className="card-single">
            <div className="card-body">
                <span className={icon}></span>
                <div>
                    <h5>{title}</h5>
                    <h4>{value}</h4>
                </div>
            </div>
            <div className="card-footer">
            </div>
        </div>
    )
}

export default Card
