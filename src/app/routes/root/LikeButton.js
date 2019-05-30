import React from 'react';
import { Consumer } from '../../../Contexts/Contexts';

function LikeButton (props) {
    const { date, word, definition } = props;

    return (
        <Consumer>
            { value => {
                const { likeButtonHandler } = value;
                return (
                    <div>
                        <button className="btn btn-primary" onClick={() => likeButtonHandler(date, word, definition)}>hej</button>
                    </div>
                )}
            }
        </Consumer>
    )
}

export default LikeButton;