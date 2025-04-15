import { Route, Routes } from "react-router-dom";

import { LoginScreen, RecuperacaoScreen } from "../../modules/login/index";

import {
  CadastroNutri,
  VerNutri,
  EditarNutri,
  PainelNutri,
} from "../../modules/nutricionista/index";

import {
  CadastroPac,
  EditarPac,
  VerPac,
  PainelPac,
  ListaPac,
} from "../../modules/paciente";

import {
  CadastroConsulta,
  EditarConsulta,
  VerConsulta,
  ListaConsulta,
} from "../../modules/Consultas/index";

import {
  CadastroPlano,
  EditarPlano,
  VerPlano,
  ListaPlano,
} from "../../modules/Plano Alimentar";

import {
  CadastroAF,
  EditarAF,
  VerAF,
  ListaAF,
} from "../../modules/Avaliacao Fisica";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route path="/Login" element={<LoginScreen />} />
      <Route path="/Recuperacao" element={<RecuperacaoScreen />} />
      <Route path="/CadastroNutri" element={<CadastroNutri />} />
      <Route path="/EditarNutri" element={<EditarNutri />} />
      <Route path="/VerNutri" element={<VerNutri />} />
      <Route path="/PainelNutri" element={<PainelNutri />} />
      <Route path="/CadastroPac" element={<CadastroPac />} />
      <Route path="/EditarPac" element={<EditarPac />} />
      <Route path="/EditarPac" element={<VerPac />} />
      <Route path="/PainelPac" element={<PainelPac />} />
      <Route path="/ListaPac" element={<ListaPac />} />
      <Route path="/CadastroConsulta" element={<CadastroConsulta />} />
      <Route path="/EditarConsulta" element={<EditarConsulta />} />
      <Route path="/VerConsulta" element={<VerConsulta />} />
      <Route path="/ListaConsulta" element={<ListaConsulta />} />
      <Route path="/CadastroPlano" element={<CadastroPlano />} />
      <Route path="/EditarPlano" element={<EditarPlano />} />
      <Route path="/VerPlano" element={<VerPlano />} />
      <Route path="/ListaPlano" element={<ListaPlano />} />
      <Route path="/CadastroAF" element={<CadastroAF />} />
      <Route path="/EditarAF" element={<EditarAF />} />
      <Route path="/VerAF" element={<VerAF />} />
      <Route path="/ListaAF" element={<ListaAF />} />
    </Routes>
  );
};
export default Rotas;
