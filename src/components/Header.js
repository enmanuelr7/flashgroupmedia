import Nav from "./Nav";
import Hero from "./Hero";
import styled from "styled-components";
import bg from "../images/header-bg-mobile.png";
import Container from "./Container";

const StyledHeader = styled.header`
  background-size: 100% 100%;
  background-image: url(${bg});
`;

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav />
        <Hero />
      </Container>
    </StyledHeader>
  );
}
