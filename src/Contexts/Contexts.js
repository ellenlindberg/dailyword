import React, { Component } from 'react';
import axios from 'axios';


const Context = React.createContext();

export class Provider extends Component {
    state = {
        word_list: [
            { 
                date: '',
                word: '',
                definition: ''
            }
        ],
        newDate: '',
        newWord: '',
        newDefinition: ''    
    }

    componentDidMount = async() => {
        var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    
        while (true) {
            try {
                const response = await axios.get(
                    "https://wordsapiv1.p.mashape.com/words/?random=true", { 
                        headers: { 'X-Mashape-Key' : 'e3d8c67bdemsha054c770d23e553p180462jsn50e02505eaeb'}})
                console.log(response.data)
                this.setState({
                    newDate: date,
                    newWord: response.data.word,
                    newDefinition: response.data.results[0].definition
                });

                break;
            } catch {

            }
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
