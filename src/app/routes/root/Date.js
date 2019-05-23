import React from 'react';
import { Consumer } from '../../../Contexts/Contexts';

function Date () {
    return (
        <Consumer>
            { value => {
                return value.date
            }}
        </Consumer>
    )
}


export default Date;
