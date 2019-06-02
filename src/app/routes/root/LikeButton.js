import React, { useState } from 'react';
import { Consumer } from '../../../Contexts/Contexts';
import './LikeButton.css';



function LikeButton ( props) {

    const [ isChecked, setCheckState ] = useState(false)
    const { date, word, definition } = props;
   
    return (
        <div className="like-icon">
        <Consumer>
            { value => {
                const { likeButtonHandler } = value;
                return (
                    <div>
                        <i className={`fa fa-star 
                            ${isChecked ? "yellow" : "grey"}`} 
                            onClick={() => { 
                                likeButtonHandler(date, word, definition); 
                                setCheckState(!isChecked);}}>
                        </i>
                    </div>
                )} 
            }
        </Consumer>
        </div>
    )
}

export default LikeButton;