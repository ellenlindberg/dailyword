import React from 'react';
import { Consumer } from '../../../Contexts/Contexts';
import './Root.css';
import DateCard from './DateCard';
import Slider from "react-slick";


 function Root () {
     const settings = {
        className: "center",
        infinite: false,
        centerPadding: "60px",
        slidesToShow: 1,
        speed: 500,
        rtl: true,
     }
    return (
        <div className="root-container">
                <Consumer>
                    { value => {
                        return <Slider {...settings}>

                        { value.word_list.map((dateCard, i) => {
                            console.log(dateCard)
                            return <li key={ i }><DateCard dateObject={dateCard}/></li>
                        }).reverse()}
                        </Slider>

                    }}
                </Consumer>
        </div>
    )
}


export default Root;
