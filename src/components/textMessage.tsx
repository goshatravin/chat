import React from 'react'
import Styled from 'styled-components'
import { Avatar } from 'react95'

export type IDate = {
    text: string
    id: number
}
const Wrapper = Styled.div`
    width: 100%;
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;`
const MessageDiv: any = Styled.div`
    display: flex;
    padding: ${(props: any) =>
        props.from ? '4px 15px 4px 5px' : '4px 5px 4px 15px'};
    background: white;
    margin: 10px;
    font-size: 1rem;
    border-style: solid;
    border-width: 2px;
    border-color: rgb(223, 223, 223) rgb(10, 10, 10) rgb(10, 10, 10) rgb(223, 223, 223);
    box-sizing: border-box;
    background: rgb(198, 198, 198);
    color: rgb(10, 10, 10);
    width: fit-content;
    text-align: ${(props: any) => (props.from ? 'left' : 'right')};
    align-self: ${(props: any) => (props.from ? 'flex-start' : 'flex-end')};`
const AvatarWrapper = Styled.div`
    margin-right: 10px;
    p{
        font-size: 13px;
    }
`

const Message = ({ data }: any) => (
    <Wrapper>
        <MessageDiv from={data.from} key={data.id}>
            {data.from && (
                <AvatarWrapper>
                    <p>Gosha</p>
                    <Avatar square size={30}>
                        <span role="img" aria-label="🚀">
                            🚀
                        </span>
                    </Avatar>
                </AvatarWrapper>
            )}
            {data.text}
        </MessageDiv>
    </Wrapper>
)

export default Message
