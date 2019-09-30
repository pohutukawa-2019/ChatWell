import styled, { css } from 'styled-components'

export default styled.h1`
font-family: ${(props) => props.theme.font};
font-size: 3.3rem;
border: none;
border-radius: none;
padding:26px;
font-weight:lighter;
  text-align:center;
  display:block;
  margin: 0px;
  background-color:#f6d8ac;
/* background: ${props => (props.primary ? 'red' : 'green')}; */
${(props) => props.color && css` background: ${props => props.theme[props.color]};
`}
`
