import React from 'react';
import { Consumer } from '../../../Contexts/Contexts'
import DateCard from '../root/DateCard';


function FavouriteWords() {
    return (
        <Consumer>
            { value => {
                return value.favorites.map((dateCard, i) => {
                    return <li key={ i }><DateCard dateObject={dateCard}/></li>
                }).reverse();
            }
            }
        </Consumer>
    )
}

export default FavouriteWords;
