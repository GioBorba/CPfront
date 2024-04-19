import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './style.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('https://caiohalbert.bsite.net/api/user/login', {
                username,
                password
            });
            console.log(response.data);
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    };

    return (
        <div className="corpo-login">
            <div className="form-container">
                <h1 className='log'>Login</h1>
                <input type="text" placeholder="Usuário" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="button login" onClick={handleLogin}>
                    Logar
                </button>
            </div>
            <Link to="/" className="link-home">Voltar para a página inicial</Link>
        </div>
    );
}

export default Login;
