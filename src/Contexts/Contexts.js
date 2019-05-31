import React, { Component } from 'react';
import axios from 'axios';

/* Context API, to get data through components */

const Context = React.createContext();

export class Provider extends Component {
    state = {
        word_list: [],
        favorites: [],
        newDate: '',
        newWord: '',
        newDefinition: ''    
    }

    /* Get todays date, checks if todays date exist in list and run req to get a word if the day does not */
    componentDidMount = async() => {
        let today = new Date()
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        /* Get list of words from localStorage */
       // console.log('todays date', date);
        let checkDate = this.getWords();
 
        /* Check if the date is todays date, then break */
        let todaysWordDefined;
        for (let i = 0; i < checkDate.length; i++) {
            const someDate = checkDate[i];
            if (someDate.date === date) {
                todaysWordDefined = someDate;
                break;
            }
        }
      //  console.log('todaysWordDefined', todaysWordDefined);

        /* If todays date do not exist in list, run request to API and set states for date, word and definition */
        if (!todaysWordDefined) {
            while (true) {
                try {
                    const response = await axios.get(
                        "https://wordsapiv1.p.mashape.com/words/?random=true", { 
                            headers: { 'X-Mashape-Key' : 'e3d8c67bdemsha054c770d23e553p180462jsn50e02505eaeb'}})
                    this.setState({
                        newDate: date,
                        newWord: response.data.word,
                        newDefinition: response.data.results[0].definition
                    });
                    let words = this.getWords();
                    
                    /* Saves to localStorage */
                    words.push({
                        date: this.state.newDate,
                        word: this.state.newWord,
                        definition: this.state.newDefinition
                    });
                    localStorage.setItem("words", JSON.stringify(words));
                    break;
                } catch {}
            }
        /* If todays date do exist in list, set states */
        } else {
            this.setState({
                newDate: todaysWordDefined.date,
                newWord: todaysWordDefined.word,
                newDefinition: todaysWordDefined.definition,
            });
        }
        this.setState({
            word_list: JSON.parse(localStorage.getItem('words')),
            favorites: JSON.parse(localStorage.getItem('favorites')) || []
        });
    }   
    
    /* Returns list of words from localStorage */
    getWords = () => {
        let words = localStorage.getItem("words");
        if(words == null) {
            localStorage.setItem("words", JSON.stringify([]));
            return [];
        } else {
            return JSON.parse(words);
        }
    }

   

    likeButtonHandler = (date, word, definition) => {
        const { favorites } = this.state;
        for (let i = 0; i < favorites.length; i++) {
            const favorite = favorites[i];
            if (favorite.date === date) {
                return;
            }
        }
        this.setState({
            favorites: [
                ...favorites,
                {
                    date: date,
                    word: word,
                    definition: definition
                }
            ],
        }, () => {
            localStorage.setItem("favorites", JSON.stringify(this.state.favorites));
        });
    }

    render() {
        return (
            <div>
                <Context.Provider value={{
                    ...this.state,
                    likeButtonHandler: this.likeButtonHandler
                }}>
                    {this.props.children}
                </Context.Provider>
            </div>
        )
    }
}

export const Consumer = Context.Consumer;
