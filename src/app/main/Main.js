import React from 'react';
import '../App.css';
import axios from 'axios';

function Main() {

  axios.get("https://wordsapiv1.p.mashape.com/words/?random=true", { headers: { 'X-Mashape-Key' : 'e3d8c67bdemsha054c770d23e553p180462jsn50e02505eaeb'}})
  .then(response => {
    console.log(response.data)
  })
  return (
    <main>
      <p>MAIN</p>
    </main>
  )
}

export default Main;
