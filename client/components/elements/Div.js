import styled, { css } from 'styled-components'

export default styled.div`
background-image: url('https://this.deakin.edu.au/wp-content/uploads/2018/11/empty-room-with-chair.jpg');
/* transaparentise?? opacity: 0.5; */
height: 510px;

/* background: ${props => (props.primary ? 'red' : 'green')};  */
${(props) => props.color && css` background: ${props => props.theme[props.background]};
`} 
/* color: #fff;
&:hover {
  background: #25769E;
} */
`
