import styled, { injectGlobal } from 'styled-components'

injectGlobal`
import url("https://fonts.googleapis.com/css?family=Roboto:400,900");
body { 
    margin: 0;
    padding: 0;
    font-size: 20px;
    background-color: lightblue;
}
`

export const theme = {
    mainColor: "pink",
    dangerColor: "red",
    successColor: "green",
    font: "Tahoma"
}

export const MainWrapper = styled.main`
width: 100vw;
height: 100vh;
`

export const SectionWrapper = styled.section`
display: flex;
`

export const NameWrapper = styled.div`
    flex-basis: 60%;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.mainColor};
    font-family: ${props => props.theme.font}
`

export const DetailWrapper = styled.div`
flex-grow: 1;
height: 100vh;
top: 0;
position: sticky;
background-color: red;
`