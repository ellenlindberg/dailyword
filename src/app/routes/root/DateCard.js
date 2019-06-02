import React from 'react';
import './DateCard.css';
import Date from './Date';
import TodaysWord from './TodaysWord';
import WordDefinition from './WordDefinition';
import LikeButton from './LikeButton';


function DateCard (props) {
    const { date, word, definition } = props.dateObject;

    return (
        <div className="datecard-item">
       
            <Date 
                date={date}
            />
            <TodaysWord 
                word={word}
            />
            <WordDefinition
                definition={definition}
            />
                 <LikeButton 
                date={date}
                word={word}
                definition={definition} 
            />
        </div>
    )
}

export default DateCard;
