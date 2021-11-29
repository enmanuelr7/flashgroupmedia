import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.desktop}) {
    flex-direction: row;
  }
`;
