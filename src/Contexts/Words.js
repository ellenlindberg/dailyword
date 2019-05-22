import React, { useState, createContext } from 'react';


const WordsContext = createContext();

const WordsProvider = ({ children }) => {
    const [word , setWord] = useState(null);
    const [results, setResults] = useState(null);
}