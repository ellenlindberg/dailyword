import React from 'react';

function TodaysWord (props) {
    const { word } = props

    return (
      <div>
        <h3>{ word }</h3>
      </div>
    )
}

export default TodaysWord;
