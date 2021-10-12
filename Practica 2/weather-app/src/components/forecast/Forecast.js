import React from 'react'

import './forecast.css'

export const Forecast = ({data}) => {
    
    const {status} = data;
    
    return (
        <div className='f-cards'>
            {
                status.map(({velocidad, visibilidad, despejado, lluvia, calor}) => (
                    <div className='f-card'>
                        <div className='f-circle'> 
                            <h2>dia</h2>
                        </div>
                        <div className='f-body-card'>
                            <p>{ velocidad }</p> 
                            <p>{ visibilidad }</p> 
                            <p>{ despejado }</p> 
                        </div>
                    </div>
                ))
            }
        
        </div>
    )
}
