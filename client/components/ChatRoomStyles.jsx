import styled, { css } from 'styled-components'

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const MessagesContainer = styled.div`
  width: 50vw;
  height: 50vh;
  background: #FAFAFA;  
  overflow-y: auto;
`
export const SendMessageForm = styled.form`
  width: 50vw;
  height: 5vh;
  // padding: 10px;
  background: purple;
  flex-wrap: wrap;
`
export const MessageInput = styled.input`
  float: left;
  height: 100%;
  width: 85%;
  // margin: 0px;
  padding: 0px;
  border: none;
  background: #ECECEC;
  font-size: 25px;
`
export const SendButton = styled.button`
  height: 100%;
  width: 15%;
  border: none;
  background: #D4D4D4;
  &:hover {
    background: #808080;
  }
`
export const ConnectionButton = styled.button`
  margin: 10px;
  height: 5vh;
  width: 10vw;
  border: none;
  ${props => props.connect && css`
    background: #B6E6BD;
    &:hover {
      background: #4BAEA0;
    }
  `}
  ${props => props.disconnect && css`
    background: #F66767;
    &:hover {
      background: #d93745;
    }
  `}
`
