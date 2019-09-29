import styled, { css } from 'styled-components'

export default styled.h2`
font-family: ${(props) => props.theme.font};
font-size: 2.3rem;
border: none;
border-radius: none;
padding:26px;
font-weight:lighter;
  -moz-box-shadow: 2px 2px 6px #888;  
  -webkit-box-shadow: 2px 2px 6px #888;  
  box-shadow:2px 2px 6px #888;  
  text-align:center;
  display:block;
  margin:10px;
  background-image:url(http://backgrounddownload.com/wp-content/uploads/2018/09/2d-sky-background-2.jpg)
/* background: ${props => (props.primary ? 'red' : 'green')}; */
${(props) => props.color && css` background: ${props => props.theme[props.color]};
`}
`