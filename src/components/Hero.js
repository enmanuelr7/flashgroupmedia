import Flex from "./Flex";
import statue from "../images/statue.png";
import styled from "styled-components";

const StyledHero = styled.div`
  .text-container {
    display: flex;
    flex-direction: column;
    p {
      font-weight: bold;
      color: white;
      margin-top: 0.75rem;
      font-size: 1.2rem;
    }

    h1 {
      font-size: 3rem;
      line-height: 2.75rem;
    }
  }

  .img-container {
    margin-top: 0.75rem;
    flex: 1;
    img {
      width: min(80%, 20rem);
      margin: 0 auto;
      display: block;
      filter: drop-shadow(1rem 1rem 1rem ${({ theme }) => theme.colors.yellow});
    }
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    .text-container {
      justify-content: center;
      flex: 2;
      h1 {
        font-size: 5rem;
        line-height: 4.5rem;
      }
      p {
        font-size: 1.6rem;
      }
    }
  }
`;

export default function Hero() {
  return (
    <StyledHero>
      <Flex>
        <div className="text-container">
          <h1>
            DESARROLLAMOS TU ENTORNO DIGITAL Y HACEMOS QUE{" "}
            <span className="pink">TU EMPRESA</span> CREZCA.
          </h1>
          <p>
            TE OFECEMOS UN EQUIPO DE PROFESIONALES CON LA CAPACIDAD DE EXPANDIR
            TU NEGOCIO EN EL MUNDO DIGITAL.
          </p>
        </div>
        <div className="img-container">
          <img src={statue} alt="statue" />
        </div>
      </Flex>
    </StyledHero>
  );
}
