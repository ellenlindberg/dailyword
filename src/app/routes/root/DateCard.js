import React from 'react';
import './DateCard.css';
import Date from './Date';
import TodaysWord from './TodaysWord';
import WordDefinition from './WordDefinition';


function DateCard (props) {
    console.log(props);

    const { date, word, definition } = props.dateObject;
    return (
            
        <div className="datecard">
        

            <Date date={date}/>
            <TodaysWord word={word}/>
            <WordDefinition definition={definition}/>
        </div>
    )
}


export default DateCard;
