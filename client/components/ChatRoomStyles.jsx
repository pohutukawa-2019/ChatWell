import styled, { css } from 'styled-components'

export const FlexContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  margin: 0px;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Avantgarde, TeX Gyre Adventor, URQW Gothic L, sans-serif;
`
export const MessagesContainer = styled.div`
  width: 50vw;
  height: 50vh;
  background: #FAFAFA;  
  overflow-y: auto;
`
export const SendMessageForm = styled.form`
  width: 50vw;
  max-width: 50vw;
  height: 5vh;
  flex-wrap: wrap;
`
export const MessageInput = styled.input`
  float: left;
  height: 100%;
  width: 85%;
  padding: 0px;
  border: none;
  border-radius: 0px;
  background: #ECECEC;
  font-size: 25px;
`
export const SendButton = styled.button`
  font-family: Avantgarde, TeX Gyre Adventor, URQW Gothic L, sans-serif;
  height: 100%;
  width: 15%;
  border: none;
  background: #D4D4D4;
  &:hover {
    background: #808080;
    color: white;
  }
`
export const ConnectionButton = styled.button`
  font-family: Avantgarde, TeX Gyre Adventor, URQW Gothic L, sans-serif;
  margin: 10px;
  height: 5vh;
  width: 10vw;
  border: none;
  ${props => props.connect && css`
    background: #B6E6BD;
    &:hover {
      background: #4BAEA0;
      color: white;
    }
  `}
  ${props => props.disconnect && css`
    background: #F66767;
    &:hover {
      background: #d93745;
      color: white;
    }
  `}
`
export const Message = styled.p`
  display: inline-block;
  margin: 0px;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 10px;
  ${props => props.user && css`
    background-color: #C0C0C0;
  `}
`
