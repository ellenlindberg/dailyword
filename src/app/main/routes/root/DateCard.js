import React from 'react';
import './DateCard.css';
import Date from './Date';
import TodaysWord from './TodaysWord';
import WordDefinition from './WordDefinition';


function DateCard () {
    return (
        <div className="datecard">
            <Date />
            <TodaysWord />
            <WordDefinition />
        </div>
    )
}


export default DateCard;
