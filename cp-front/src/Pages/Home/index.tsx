import { Link } from "react-router-dom";
import './style.css';

const Home = () => {
    return (
        <div>
            <h1 className="titulo">Checkpoint</h1>
            <div className="corpo">
                <Link to='/login'>
                    <button className="button">
                        Login
                    </button>
                </Link>
                <Link to='/cadastro'>
                    <button className="button">
                        Cadastro
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
