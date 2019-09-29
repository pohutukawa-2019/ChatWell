import styled, { css } from 'styled-components'

export default styled.button`
font-family: ${(props) => props.theme.font};
font-size: 1rem;
color: '#5CB0D9';
border: none;
width: 300px;
text-align: center;
border-radius: 20px;
padding: 14px 40px;
display: block;
max-width: 300px;
margin: auto;
/* background: ${props => (props.primary ? 'red' : 'green')}; */
${(props) => props.color && css` background: ${props => props.theme[props.color]};
`}

color: #fff;
&:hover {
  background: #25769E;
}
`
