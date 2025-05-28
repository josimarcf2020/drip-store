import { Link } from "react-router-dom";
import "../styles/PageNotFound.css";

export const PageNotFound = () => {
    return (
        <div id="page-not-found">
            <h1 className="text-center">404 - Page Not Found</h1>
            <p className="text-center">Sorry, the page you are looking for does not exist.</p>
            <Link to={"/"} className="btn btn-primary d-block mx-auto" style={{ width: "200px" }}>Voltar para a Home</Link>
        </div>
    );
}