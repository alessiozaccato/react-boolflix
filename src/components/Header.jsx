import { useGlobalContext } from "../context/GlobalContext"

const Header = () => {

    // const baseUrl = import.meta.env.VITE_ENDPOINT_URL
    // const apiKey = import.meta.env.VITE_API_KEY

    // const [searchMovies, setSearchMovies] = useState('')

    // const [movies, setMovies] = useState([])

    // const handleSearch = (e) => {
    //     setSearchMovies(e.target.value)
    // }

    // const handleSubmit = (e) => {
    //     e.preventEventDefault()
    //     

    // }

    const { handleSearch, handleSubmit } = useGlobalContext()

    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand text-danger">BOOLFLIX</a>
                <form className="d-flex" role="search" onSubmit={handleSubmit}>
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Cerca"
                        aria-label="Search"
                        // value={searchMovies}
                        onChange={handleSearch}
                    />
                    <button className="btn btn-outline-secondary" type="submit">Cerca</button>
                </form>
            </div>
        </nav>
    )
}

export default Header