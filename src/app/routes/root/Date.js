import React from 'react';
import { Consumer } from '../../../Contexts/Contexts';

function Date () {
    return (
        <Consumer>
            { value => {
                return value.newDate
            }}
        </Consumer>
    )
}


export default Date;
