import styled from "styled-components";
import { Typography } from "antd";

const { Title, Link } = Typography;

export const LogoImage = styled.img`
  max-width: 498px;
`;

export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  justify-self: center;
  justify-content: center;
  background-color: rgb(199, 199, 199);
  width: 100%;
  height: 100vh;
  max-width: 646px;
  top: 0;
`;
export const ContainerLimit = styled.div`
  width: 100%;
  max-width: 498px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const TitleLogin = styled(Title)`
  display: flex;
  justify-content: center;
`;

export const LinkLogin = styled(Link)`
  display: flex;
  justify-content: center;
`;
