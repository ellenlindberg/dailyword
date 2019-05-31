import React from 'react';
import { Consumer } from '../../../Contexts/Contexts';
import './LikeButton.css';



function LikeButton (props) {

    const { date, word, definition } = props;

    const isChecked = () => {
        console.log("hej")
    }
    var iconStyle = {
        float: 'right',
        margin: '2%',
        fontSize: '30px',
        color: 'grey',
    }

    

   
    return (
        <Consumer>
            { value => {
                const { likeButtonHandler } = value;
                return (
                    <div>
                        <i className="fa fa-star" style={iconStyle} onClick={() => { likeButtonHandler(date, word, definition); isChecked();}} ></i>
                    </div>
                )}
            }
        </Consumer>
    )
}

export default LikeButton;