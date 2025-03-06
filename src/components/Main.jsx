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

    const { movies, series, fetchData } = useGlobalContext()

    function newStars(vote) {
        let conversion = Math.ceil(vote / 2)

        let fullStar = "★"
        let emptyStar = "☆"

        let result = fullStar.repeat(conversion)
        let result2 = emptyStar.repeat(5 - conversion)

        return result + result2



    }



    useEffect(() => {
        // axios
        //     .request(options)
        //     .then(res => setMovies(res.data.results))
        //     .catch(err => console.error(err));
        fetchData()
    }, [])



    return (
        <div className="container">

            <section className="row row-cols-4">

                {

                    movies.map((movie) => {
                        return (
                            <div className="card my-3" key={movie.id}>
                                <p>titolo: {movie.title}</p>
                                <p>titolo originale: {movie.original_title}</p>
                                <p>lingua: {movie.original_language} </p>
                                <p>voto: {newStars(movie.vote_average)}</p>
                            </div>
                        )
                    })
                }
            </section>
            <section className="row row-cols-4">

                {
                    series.map((serie) => {
                        return (
                            <div className="card my-3" key={serie.id}>
                                <p>titolo: {serie.name}</p>
                                <p>titolo originale: {serie.original_title}</p>
                                <p>lingua: {serie.original_language} </p>
                                <p>voto: {serie.vote_average}</p>
                            </div>
                        )
                    })
                }
            </section>


        </div>


    )
}

export default Main