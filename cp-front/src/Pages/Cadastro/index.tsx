import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './style.css';

const Cadastro = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleCadastro = async () => {
        try {
            const response = await axios.post('https://caiohalbert.bsite.net/api/user/newUser', {
                username,
                email,
                password
            });
            console.log(response.data);
        } catch (error) {
            console.error('Erro ao cadastrar:', error);
        }
    };

    return (
        <div className="corpo-cadastro">
            <div className="form-container">
                <h1 className="cad">Cadastro</h1>
                <input type="text" placeholder="Usuário" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="button cadastro" onClick={handleCadastro}>
                    Cadastrar
                </button>
            </div>
            <Link to="/" className="link-home">Voltar para a página inicial</Link>
        </div>
    );
}

export default Cadastro;
