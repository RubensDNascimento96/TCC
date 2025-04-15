import { useState } from "react";
import Button from "../../../shared/components/buttons/Button";
import Input from "../../../shared/components/inputs/Input";
import {
  LogoImage,
  ContainerLogin,
  ContainerLimit,
  TitleLogin,
  LinkLogin,
} from "../styles/LoginScreen.styles";

const LoginScreen = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const handleUsuario = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsuario(event.target.value);
  };
  const handleSenha = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSenha(event.target.value);
  };

  const handleLogin = () => {
    //função que ira mandar dados para o Backend
    alert(`Usuario: ${usuario}, Senha: ${senha}`);
  };

  return (
    <div>
      <ContainerLogin>
        <ContainerLimit>
          <LogoImage src="./Logo.png" />
          <TitleLogin level={3}>LOGIN</TitleLogin>
          <Input title="Usuário" onChange={handleUsuario} value={usuario} />
          <Input
            title="Senha"
            type="Password"
            onChange={handleSenha}
            value={senha}
          />
          <Button
            type="primary"
            margin="32px 0px 16px 0px"
            onClick={handleLogin}
          >
            Entrar
          </Button>
          <LinkLogin href="" target="_blank">
            Esqueci minha senha
          </LinkLogin>
        </ContainerLimit>
      </ContainerLogin>
    </div>
  );
};

export default LoginScreen;
