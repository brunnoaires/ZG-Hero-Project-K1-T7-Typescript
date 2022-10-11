import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { LoginCandidato } from "./pages/LoginCandidato/LoginCandidato";
import { LoginEmpresa } from "./pages/LoginEmpresa/LoginEmpresa";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/loginCandidato" element={<LoginCandidato />} />
        <Route path="/loginEmpresa" element={<LoginEmpresa />} />
      </Routes>
    </Router>
  );
}
