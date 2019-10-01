import styled, { css } from 'styled-components'

export default styled.button`
font-family: ${(props) => props.theme.font};
font-size: 1rem;
font-weight: bold;
box-shadow: 0px 5px 5px #888888;
color: '#5CB0D9';
border: none;
width: 400px;
height: 40px;
text-align: center;
border-radius: 20px;
padding: 9px;
display: block;
max-width: 600px;
margin: auto;
${(props) => props.font && css` background: ${props => props.theme[props.font]};
`}
/* background: ${props => (props.primary ? 'red' : 'green')}; */
${(props) => props.color && css` background: ${props => props.theme[props.color]};
`}
color: #fff;
&:hover {
  background: #25769E;
}
`
