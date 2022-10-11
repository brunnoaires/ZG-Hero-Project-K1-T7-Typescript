import { Link } from "react-router-dom";
import "./styles.css";

export function LoginEmpresa() {
  return (
    <div className="container-all">
      <div className="container-login-empresa">
        <h1>Login da Empresa </h1>
        <div className="input">
          <div>
            <input type="email" placeholder="Seu email" />
          </div>
          <div className="input-senha-empresa">
            <input type="password" placeholder="Sua senha" />
          </div>
        </div>
        <Link to="/loginCandidato" className="link-to-candidato">
          É um Candidato? clique aqui
        </Link>
      </div>
    </div>
  );
}
