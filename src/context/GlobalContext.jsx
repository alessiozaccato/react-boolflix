import { createContext, useState, useContext } from 'react';
import axios from 'axios';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    const [movies, setMovies] = useState([])// dal main

    const [searchMovies, setSearchMovies] = useState('')// dall'header


    const baseUrl = import.meta.env.VITE_ENDPOINT_URL

    const apiAuth = import.meta.env.VITE_API_AUTH

    const options = {
        method: 'GET',
        url: baseUrl + `movie?query=${searchMovies}`,
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiAuth}`
        }
    };

    const handleSearch = (e) => {
        setSearchMovies(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchMovies()
    }

    const fetchMovies = () => {
        axios
            .request(options)
            .then(res => setMovies(res.data.results))
            .catch(err => console.error(err));
    }

    const value = {
        movies,
        handleSearch,
        handleSubmit,
        fetchMovies
    }


    return (
        <GlobalContext.Provider value={value} >
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };