import React, { Component } from 'react';
import axios from 'axios';


const Context = React.createContext();


    axios
        .get(
            "https://wordsapiv1.p.mashape.com/words/?random=true", { 
                headers: { 'X-Mashape-Key' : 'e3d8c67bdemsha054c770d23e553p180462jsn50e02505eaeb'}})
        .then(response => {
        console.log(response.data)
        })


export class Provider extends Component {
    state = {
        word_list: [
            { 
                word: {
                        word: 'WOOOOORD', 
                        definition: 'bcksbclebcvebdc'
                    } 
                },
            { 
                word: {
                    word: 'ANOOOTHER', 
                    definition: 'bvebvebnvkernvkrnnckenckd'
                }
            }
        ],
        date: ""
    }
    componentDidMount() {
        var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            console.log(date)
            this.setState({
            date: date
            });
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









/*
import React, { useState, createContext } from 'react';

const WordsContext = createContext();

const WordsProvider = ({ children }) => {
    const [word , setWord] = useState(null);
    const [results, setResults] = useState(null);
}*/