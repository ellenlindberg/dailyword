import React from 'react';
import DateCard from './DateCard';
import { Consumer } from '../../../Contexts/Contexts'

 function Root () {
    return (
        <Consumer>
            { value => {
                console.log(value.word_list)
                return value.word_list.reverse().map((dateCard, i) => {
                    console.log(dateCard)
                    return <li key={ i }><DateCard dateObject={dateCard}/></li>
                })

          
            }}
      
        </Consumer>
    )
}


export default Root;
