import { useState, useEffect } from "react"
import axios from "axios"



const Main = () => {

    const baseUrl = import.meta.env.VITE_ENDPOINT_URL
    const apiKey = import.meta.env.VITE_API_KEY

    // const apiAuth = import.meta.env.VITE_API_AUTH

    const [movies, setMovies] = useState([])

    const options = {
        method: 'GET',
        url: baseUrl + 'movie?query=batman',
        headers: {
            accept: 'application/json',
            Authorization: apiKey,
        }
    };

    useEffect(() => {
        axios
            .request(options)
            .then(res => setMovies(res.data.results))
            .catch(err => console.error(err));
    }, [])

    return (
        movies.map((movie) => {
            return (
                <div key={movie.id}>
                    <p>{movie.title}</p>
                </div>
            )
        })
    )
}

export default Main