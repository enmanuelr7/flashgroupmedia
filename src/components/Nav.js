import styled from "styled-components";
import Logo from "./Logo";

const StyledNav = styled.nav`
  padding: 0.5rem 0;
`;

export default function Nav() {
  return (
    <StyledNav>
      <Logo />
    </StyledNav>
  );
}
