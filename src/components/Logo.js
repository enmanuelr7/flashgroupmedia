import logo from "../images/logo.png";
import styled from "styled-components";

const StyledLogo = styled.img`
  width: 10rem;
`;

export default function Logo() {
  return <StyledLogo src={logo} alt="flashgroupmedia logo" />;
}
