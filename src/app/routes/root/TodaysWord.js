import React from 'react';
import { Consumer } from '../../../Contexts/Words';
import axios from 'axios';

function TodaysWord () {
    
  axios.get("https://wordsapiv1.p.mashape.com/words/?random=true", { headers: { 'X-Mashape-Key' : 'e3d8c67bdemsha054c770d23e553p180462jsn50e02505eaeb'}})
  .then(response => {
    console.log(response.data.word)
  })
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
