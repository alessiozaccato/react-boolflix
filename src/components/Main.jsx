import { useEffect } from "react"
import { useGlobalContext } from "../context/GlobalContext";



const Main = () => {

    // const baseUrl = import.meta.env.VITE_ENDPOINT_URL

    // const apiKey = import.meta.env.VITE_API_KEY

    // const apiAuth = import.meta.env.VITE_API_AUTH

    // const [movies, setMovies] = useState([])

    // const options = {
    //     method: 'GET',
    //     url: baseUrl + 'movie?query=batman',
    //     headers: {
    //         accept: 'application/json',
    //         Authorization: `Bearer ${apiAuth}`
    //     }
    // };

    const { movies, fetchMovies } = useGlobalContext()

    useEffect(() => {
        // axios
        //     .request(options)
        //     .then(res => setMovies(res.data.results))
        //     .catch(err => console.error(err));
        fetchMovies()
    }, [])

    return (
        <div className="container">
            {

                movies.map((movie) => {
                    return (
                        <div className="card my-3" key={movie.id}>
                            <p>titolo: {movie.title}</p>
                            <p>titolo originale: {movie.original_title}</p>
                            <p>lingua: {movie.original_language} </p>
                            <p>voto: {movie.vote_average}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Main