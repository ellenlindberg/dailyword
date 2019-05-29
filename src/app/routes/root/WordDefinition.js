import React from 'react';
import { Consumer } from '../../../Contexts/Contexts'


function WordDefinition () {
    return (
        <Consumer>
            { value => {
                return value.newDefinition
            }}
        </Consumer>
    )
}


export default WordDefinition;
