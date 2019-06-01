import React from 'react';
import './WordDefinition.css';

function WordDefinition (props) {
    const { definition } = props
    return (
        <div className="word-definition">
            {definition}
        </div>
    )
}

export default WordDefinition;
