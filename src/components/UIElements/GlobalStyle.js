import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1rem;
    background: var(--background);
  
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  main {
    margin-top: 4rem;
  }

  :root {
    --light-color: #ffffff;
    --dark-color: #727272;
    --grey: #636363 ;
	--silver:#ededed;
    --danger: #e60000 ;
    --background: #ededed;
    --blue:#5072a7;
	--light-blue:#aec6cf;


    --transition: all 0.3s linear;
    --spacing: 0.25rem;
    --radius: 0.5rem;
    --radius-4: 4px;
    --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

    --font-sm: .9rem;
    --font-lg: 1.4rem;
  }

  .active-link {
	background: var(--blue) !important;
  }
`
export default GlobalStyle;
