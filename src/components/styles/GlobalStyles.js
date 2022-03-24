import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Bilbo&family=Lobster+Two:ital@1&family=Montserrat:wght@400;500&family=Poller+One&display=swap');

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
