const Header = () => {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand text-danger">BOOLFLIX</a>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Cerca" aria-label="Search" />
                    <button className="btn btn-outline-secondary" type="submit">Cerca</button>
                </form>
            </div>
        </nav>
    )
}

export default Header