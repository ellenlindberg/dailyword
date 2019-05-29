import React, { Component } from 'react';
import axios from 'axios';


const Context = React.createContext();

export class Provider extends Component {
    state = {
        word_list: [],
        newDate: '',
        newWord: '',
        newDefinition: ''    
    }

    componentDidMount = async() => {
        let today = new Date()
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        console.log('todays date', date);
        let checkDate = this.getWords();
 

        let todaysWordDefined;
        for (let i = 0; i < checkDate.length; i++) {
            const someDate = checkDate[i];
            if (someDate.date === date) {
                todaysWordDefined = someDate;
                break;
            }
        }
        console.log('todaysWordDefined', todaysWordDefined);
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
                    
                    words.push({
                        date: this.state.newDate,
                        word: this.state.newWord,
                        definition: this.state.newDefinition
                    });
                    localStorage.setItem("words", JSON.stringify(words));
                    break;
                } catch {}
            }
        } else {
            this.setState({
                newDate: todaysWordDefined.date,
                newWord: todaysWordDefined.word,
                newDefinition: todaysWordDefined.definition,
            });
        }
        this.setState({
            word_list: JSON.parse(localStorage.getItem('words')),
        });
    }   

    

    getWords = () => {
        let words = localStorage.getItem("words");
        if(words == null) {
            localStorage.setItem("words", JSON.stringify([]));
            return [];
        } else {
            return JSON.parse(words);
        }
    }

    render() {
        return (
            <div>
                <Context.Provider value={this.state}>
                    {this.props.children}
                </Context.Provider>
            </div>
        )
    }
}

export const Consumer = Context.Consumer;
