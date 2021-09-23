import Styled from 'styled-components'
import { ISpacer } from '../types'

export const Wrapper = Styled.div`
    width: 100%;
    height: 100vh; /* This is for browsers that don't support custom properties */
    height: calc(var(--vh, 1vh) * 100);
    display: flex;
    align-items: center;
    .window-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .window {
    width: 100%;
    height: 100%;
  }
`
export const InputWrapper = Styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Spacer = Styled.div`
    height: ${(props: ISpacer) => (props.y ? props.y : 0)}px;
    width: ${(props: ISpacer) => (props.x ? props.x : 0)}px;
`
export const ErrorText = Styled.p`
    color: #aa0000;
`
export const ErrorWrapper = Styled.div`
    display: flex;
    align-items: center;
    img{
        max-width: 25px;
    }`
