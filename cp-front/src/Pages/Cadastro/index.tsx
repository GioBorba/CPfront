import { Link } from "react-router-dom";
import './style.css';

const Cadastro = () => {
    
    return (
        <div className="corpo-cadastro">
            <div className="form-container">
                <h1 className="cad">Cadastro</h1>
                <input type="text" placeholder="Usuário" />
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="Senha" />
                <button className="button cadastro">
                    Cadastrar
                </button>
            </div>
            <Link to="/" className="link-home">Voltar para a página inicial</Link>
        </div>
    );
}

export default Cadastro;
