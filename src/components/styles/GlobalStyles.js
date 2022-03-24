import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
}


body {
 background: #fff;
 color: hsl(192, 100%, 9%);
 font-family: 'Montserrat', sans-serif;
 font-size: 1.15em;
 margin: 0;
}
p{
    opacity: 0.6;
    line-height: 1.5;
}
`;

export default GlobalStyle;
