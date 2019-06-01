import React from 'react';
import { Consumer } from '../../../Contexts/Contexts'
import DateCard from '../root/DateCard';
import './FavouriteWords.css'


function FavouriteWords() {
    return (
        <div>
            <h2 id="my-favs">My Favs</h2>
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
        </div>
    )
}

export default FavouriteWords;
