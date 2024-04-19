import { Link } from "react-router-dom";
import "./style.css";
import axios from "axios";

const Home = () => {
  const url = "https://caiohalbert.bsite.net/api/user/getAll";

  interface UserData {
    username: string;
    email: string;
    passwordHash: string;
  }

  const getUsers = async () => {
    try {
      const response = await axios.get(url);
      const data: UserData[] = response.data;

      const usersDiv = document.querySelector(".users");
      usersDiv!.innerHTML = ""; // Limpar o conteúdo anterior

      data.forEach((user: UserData) => {
        const userDiv = document.createElement("div");
        userDiv.innerHTML = `
          <p>Nome: ${user.username}</p>
          <p>Email: ${user.email}</p>
          <p>PasswordHash: ${user.passwordHash}</p>
        `;
        usersDiv!.appendChild(userDiv);
      });
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  };

  return (
    <div className="all">
      <h1 className="titulo">Checkpoint</h1>
      <div className="corpo">
        <Link to="/login">
          <button className="button">Login</button>
        </Link>
        <Link to="/cadastro">
          <button className="button">Cadastro</button>
        </Link>
      </div>

      <button className="button-user" onClick={getUsers}>Mostrar usuários</button>

      <div className="users"></div>
    </div>
  );
};

export default Home;
