import { Link } from "react-router-dom"

function Header(props) {
    return (
        <header className="main-header">
        <h1>XXXXXXXXXX Hub</h1>
        <hr></hr>

            <nav>
            <Link to="/">Home----</Link>
            <Link to="/happenings">Happenings----</Link>
            <Link to="curiosities">Curiosities----</Link>
            <Link to="conspire">Conspire       </Link>
            </nav>


        </header>
    )
}

export default Header