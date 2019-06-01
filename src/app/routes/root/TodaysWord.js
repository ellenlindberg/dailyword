import React from 'react';
import './TodaysWord.css';

function TodaysWord (props) {
    const { word } = props

    return (
      <div className="todays-word">
        <h4>Your word of the day is:</h4>
        <h3>{ word }</h3>
        <hr />
      </div>
    )
}

export default TodaysWord;
