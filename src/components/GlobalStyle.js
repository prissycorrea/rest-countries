import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    header {
        background: ${({theme}) => theme.elements};
        color: ${({theme}) => theme.font};
    }
    button {
        color: ${({theme}) => theme.font}
    }
    body {
        background: ${({theme}) => theme.body};
        color: ${({theme}) => theme.font};
    }
    input {
        background: ${({theme}) => theme.elements};
        color: ${({theme}) => theme.font};
    }
    select {
        background: ${({theme}) => theme.elements};
        color: ${({theme}) => theme.font};
    }
    .regionFilter {
        background:  ${({theme}) => theme.elements};
    }
    .searchCountry {
        background:  ${({theme}) => theme.elements};
    }
    .switchButton {
        color: ${({theme}) => theme.font};
    }
    .countryCard {
        background:  ${({theme}) => theme.elements};
        color: ${({theme}) => theme.font};
    }
`