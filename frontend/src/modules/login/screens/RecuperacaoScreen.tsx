import { useState } from "react";
import Button from "../../../shared/components/buttons/Button";
import Input from "../../../shared/components/inputs/Input";
import {
  LogoImage,
  ContainerLogin,
  ContainerLimit,
  TitleLogin,
} from "../styles/LoginScreen.styles";

const RecuperacaoScreen = () => {
  const [usuario, setUsuario] = useState("");

  const handleUsuario = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsuario(event.target.value);
  };

  const handleLogin = () => {
    //função que ira mandar dados para o Backend
    alert(`Usuario: ${usuario}`);
  };

  return (
    <div>
      <ContainerLogin>
        <ContainerLimit>
          <LogoImage src="./Logo.png" />
          <TitleLogin level={3}>Recuperação de Senha</TitleLogin>
          <Input title="Usuário" onChange={handleUsuario} value={usuario} />
          <Button
            type="primary"
            margin="32px 0px 16px 0px"
            onClick={handleLogin}
          >
            Recuperar
          </Button>
        </ContainerLimit>
      </ContainerLogin>
    </div>
  );
};

export default RecuperacaoScreen;
