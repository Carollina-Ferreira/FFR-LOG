import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Empresa from "./pages/Empresa";
import Transportes from "./pages/Transportes";
import Contato from "./pages/Contato";
import Orcamento from "./pages/Orcamento";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/empresa" element={<Empresa />} />
      <Route path="/transportes" element={<Transportes />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/orcamento" element={<Orcamento />} />
    </Routes>
  );
}

export default App;