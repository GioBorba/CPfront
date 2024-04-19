import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const url = "https://caiohalbert.bsite.net/api/user/login";

  const handleLogin = async () => {
    try {
      console.log(email, password);

      const response = await axios.post(url, {
        email: email,
        password: password,
      });
      console.log(response.data);
      alert("Login bem-sucedido!");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert(
        "Erro ao fazer login. Verifique suas credenciais e tente novamente."
      );
    }
  };

  return (
    <div className="corpo-login">
      <div className="form-container">
        <h1 className="log">Login</h1>
        <input
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button login" onClick={handleLogin}>
          Logar
        </button>
      </div>
      <Link to="/" className="link-home">
        Voltar para a página inicial
      </Link>
    </div>
  );
};

export default Login;
