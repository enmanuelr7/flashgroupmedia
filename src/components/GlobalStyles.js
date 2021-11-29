import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
    font-family: 'Montserrat', sans-serif;
    color: ${({ theme }) => theme.colors.blue};
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Bebas Neue", sans-serif;
}



a {
  color: inherit;
  text-decoration: none;
}

.pink {
    color: ${({ theme }) => theme.colors.pink};
  }
`;

export default GlobalStyles;
