import React from 'react';
import { Consumer } from '../../../Contexts/Contexts'
import DateCard from '../root/DateCard';
import './FavouriteWords.css'


function FavouriteWords() {
    return (
        <div className="flexbox">
            <Consumer>
                { value => {
                    return <div className="flexbox-item"> {value.favorites.map((dateCard, i) => {
                        return <li key={ i }><DateCard dateObject={dateCard}/></li>
                    }).reverse()}
                    </div>
                }
                }
            </Consumer>
        </div>
    )
}

export default FavouriteWords;
