import Nav from "./Nav";
import Hero from "./Hero";
import styled from "styled-components";
import bgMobile from "../images/header-bg-mobile.png";
import bgDesktop from "../images/header-bg-desktop.png";
import Container from "./Container";

const StyledHeader = styled.header`
  background-size: 100% 100%;
  background-image: url(${bgMobile});
  padding-bottom: 5rem;

  @media (min-width: ${({ theme }) => theme.desktop}) {
    background-image: url(${bgDesktop});
  }
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
