import { Link } from "react-router-dom"

function Header(props) {
    return (
        <header className="main-header">
        <h1 className="title-page">xxxxxxxxxx</h1>
        <hr />

            <nav>
            <Link to="/" className="link">home    /</Link>
            <Link to="/happenings" className="link">  happenings    /</Link>
            <Link to="curiosities" className="link">  curiosities    /</Link>
            <Link to="conspire" className="link">  conspire       </Link>
            </nav>
            <hr />


        </header>
    )
}

export default Header