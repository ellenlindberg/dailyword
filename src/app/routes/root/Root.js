import React from 'react';
import DateCard from './DateCard';
import { Consumer } from '../../../Contexts/Contexts'

 function Root () {
    return (
        <Consumer>
            { value => {
                console.log(value.word_list)
                return value.word_list.map((dateCard, i) => {
                    console.log(dateCard)
                    return <li key={ i }><DateCard dateObject={dateCard}/></li>
                }).reverse();

          
            }}
      
        </Consumer>
    )
}


export default Root;
