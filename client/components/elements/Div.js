import styled, { css } from 'styled-components'

export default styled.div`
background-image: url('/images/images7.jpg');
height: 100vh;
background-repeat: no-repeat;
background-size: cover;
${(props) => props.color && css` background: ${props => props.theme[props.background]};
`} 

`
