import styled, { css } from 'styled-components'

export const FlexContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 70vh;
  margin: 0px;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Avantgarde, TeX Gyre Adventor, URQW Gothic L, sans-serif;
`
export const MessagesContainer = styled.div`
  width: 75vw;
  height: 60vh;
  background: #FAFAFA;  
  overflow-y: auto;
`
export const SendMessageForm = styled.form`
  width: 75vw;
  max-width: 75vw;
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
  margin-top: 15px;
  margin-bottom: 5px
  height: 40px;
  width: 400px;
  border: none;
  border-radius: 20px
  color: white;
  // font-weight: bold;
  ${props => props.connect && css`
    background: #5CB0D9;
    &:hover {
      background: #25769E;
    }
  `}
  ${props => props.disconnect && css`
    background: #F66767;
    &:hover {
      background: #d93745;
    }
  `}
  ${props => props.main && css`
    background: #25769E;
    &:hover {
      #5CB0D9;
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
