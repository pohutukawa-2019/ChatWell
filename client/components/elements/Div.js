import styled, { css } from 'styled-components'

export default styled.div`
background-image: url('/images/images7.jpg');
height: 70vh;
background-repeat: no-repeat;
background-size: cover;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
${(props) => props.color && css` background: ${props => props.theme[props.background]};
`} 

`
