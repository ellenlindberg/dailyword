import React from 'react';
//import './DateCard.css';
import Date from './Date';
import TodaysWord from './TodaysWord';
import WordDefinition from './WordDefinition';
import LikeButton from './LikeButton';


function DateCard (props) {
    const { date, word, definition } = props.dateObject;

    return (
        <div className="datecard-item">
            <LikeButton 
                date={date}
                word={word}
                definition={definition} 
            />
            <Date 
                date={date}
            />
            <TodaysWord 
                word={word}
            />
            <WordDefinition
                definition={definition}
            />
        </div>
    )
}

export default DateCard;
