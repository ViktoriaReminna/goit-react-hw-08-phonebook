import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   line-height: 1.5;
  color: #008080;
  padding-top: 30px;
  padding-bottom: 30px;
  background:  #f5fcf6 url(https://www.trip-ukraine.com.ua/wp-content/uploads/2021/11/imgonline-com-ua-Resize-Grr4jhbEGpKan-1-e1637943776271.jpg) 0 0 / cover no-repeat;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
 ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }

`;
