import React from 'react'
import Styled from 'styled-components'
import { IMessage } from '../types'

const Wrap: any = Styled.div`
    border-style: solid;
    border-width: 2px;
    border-color: rgb(223, 223, 223) rgb(10, 10, 10) rgb(10, 10, 10) rgb(223, 223, 223);
    box-sizing: border-box;
    color: rgb(10, 10, 10);
    width: fit-content;
    margin: 10px;
    padding: ${(props: any) => (props.from === 'true' ? '4px 10px 4px 5px' : '4px 5px 4px 10px')};
    background: ${(props: any) => (props.from === 'true' ? 'rgb(198, 198, 198);' : 'white')};
    text-align: ${(props: any) => (props.from === 'true' ? 'left' : 'left')};
    align-self: ${(props: any) => (props.from === 'true' ? 'flex-start' : 'flex-end')};
`
const MessageDiv: any = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;`
const Time: any = Styled.div`
    font-size: 10px;
    text-align: ${(props: any) => (props.from === 'true' ? 'right' : 'left')};`
const Name = Styled.div`
    font-size: 12px;
    width: 100%;`

const Message = ({ data, email }: IMessage) => {
    const { from, message, time, name, message_id } = data
    const check = email !== from
    return (
        <Wrap key={message_id} from={check?.toString()}>
            <MessageDiv>
                {check && <Name>{name || 'Fool'}</Name>}
                {message}
                <Time from={check?.toString()}>{time}</Time>
            </MessageDiv>
        </Wrap>
    )
}

export default Message
