import React from 'react';
import { Consumer } from '../../../Contexts/Contexts';

function TodaysWord () {
    
    return (
      <Consumer>
        {value => {
          console.log(value.newWord)
          return <h3>{value.newWord}</h3>
        }}  
      </Consumer>
    )
}


export default TodaysWord;
