import React from 'react';
import { Consumer } from '../../../Contexts/Contexts';

function TodaysWord () {
    
    return (
      <Consumer>
        {value => {
          return <h3>{value.word_list[0].word.word}</h3>
        }}  
      </Consumer>
    )
}


export default TodaysWord;
