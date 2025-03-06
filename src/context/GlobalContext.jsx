import { createContext, useState, useContext } from 'react';
import axios from 'axios';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    const [movies, setMovies] = useState([])// dal main

    const [series, setSeries] = useState([])// del main

    const [search, setSearch] = useState('')// dall'header  


    const baseUrl = import.meta.env.VITE_ENDPOINT_URL

    const apiAuth = import.meta.env.VITE_API_AUTH



    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchData()
    }

    const fetchData = () => {

        const options = {
            method: 'GET',
            url: baseUrl + `movie?query=${search}`,
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${apiAuth}`
            }
        };

        axios
            .request(options)
            .then(res => setMovies(res.data.results))
            .catch(err => console.error(err));

        options.url = baseUrl + `tv?query=${search}`

        axios
            .request(options)
            .then(res => setSeries(res.data.results))
            .catch(err => console.error(err));
    }



    const value = {
        movies,
        series,
        handleSearch,
        handleSubmit,
        fetchData
    }


    return (
        <GlobalContext.Provider value={value} >
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };