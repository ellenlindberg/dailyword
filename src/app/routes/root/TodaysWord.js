import React from 'react';
import { Consumer } from '../../../Contexts/Contexts';

function TodaysWord () {
    
    return (
      <Consumer>
        {value => {
          console.log(value)
          return <h3>Hej</h3>
        }}  
      </Consumer>
    )
}


export default TodaysWord;
