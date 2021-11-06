import React from 'react';
import './Card.css';

const Card = ({ icon, title, value, motivacion = '', footer = "" }) => {
    return (
        <div className="card-single">
            <div className="card-body">
                <span className={icon}></span>
                <div>
                    <h5>{title}</h5>
                    <h4>{value}</h4>
                </div>
                <div>
                    <h6>{motivacion}</h6>
                </div>
            </div>
            <div className="card-footer">
                <h6>{footer}</h6>
            </div>
        </div>
    );
};

export default Card;
