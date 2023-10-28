import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
body{
    font-family: arial, sans-serif;
    margin:0;
    background-color: #f5f5f5;
    color: #333;
}
a{
    text-decoration: none;
}

ul, li{
    list-style: none;
    padding: 0;
    margin: 0;
}
`
export default GlobalStyles