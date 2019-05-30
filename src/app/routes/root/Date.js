import React from 'react';
import './Date.css';

function Date (props) {
    const {date} = props;

    return ( 
        <div>
           <h2> {date}</h2>
        </div>
    )
}

export default Date;
