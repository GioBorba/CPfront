import { Link } from 'react-router-dom';

import './style.css';

const Login = () => {
    return (
        <div className="corpo-login">
            <div className="form-container">
                <h1 className='log'>Login</h1>
                <input type="text" placeholder="Usuário" />
                <input type="password" placeholder="Senha" />
                <button className="button login">
                    Logar
                </button>
            </div>
            <Link to="/" className="link-home">Voltar para a página inicial</Link>
        </div>
    );
}

export default Login;