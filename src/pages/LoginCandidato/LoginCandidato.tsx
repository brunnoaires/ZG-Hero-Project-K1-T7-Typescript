import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export function LoginCandidato() {
  const [email, setEmail] = useState("");
  const [cadastro, setCadastro] = useState("");
  const [senha, setSenha] = useState("");
  function validar() {
    if (
      email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/i) &&
      senha.match(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/
      )
    ) {
      setCadastro("Cadastro realizado com sucesso");
    } else setCadastro("Cadastro nao foi validado");
  }

  return (
    <div className="container-all">
      <div className="container-login-candidato">
        <h1>Login do Candidato </h1>
        <div className="input">
          <div>
            <input
              type="email"
              placeholder="Seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-senha-candidato">
            <input
              type="password"
              placeholder="Sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <button onClick={validar}>Cadastrar</button>
        </div>

        <Link to="/loginEmpresa">É uma Empresa? clique aqui</Link>
        <h2>{cadastro}</h2>
      </div>
    </div>
  );
}
