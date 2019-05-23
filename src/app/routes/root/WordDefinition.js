import React from 'react';
import { Consumer } from '../../../Contexts/Contexts'


function WordDefinition () {
    return (
        <Consumer>
            { value => {
                return value.word_list[0].word.definition
            }}
        </Consumer>
    )
}


export default WordDefinition;
