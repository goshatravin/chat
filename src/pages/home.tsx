import React, { useState } from 'react'
import Styled from 'styled-components'
import { TextField, Button } from 'react95'
import Message, { IDate } from '../components/textMessage'

const Wrapper = Styled.div`
    width: 100%;
    background-color: teal;
    height: 100vh; /* This is for browsers that don't support custom properties */
    height: calc(var(--vh, 1vh) * 100);
    display: flex;
    flex-direction: column;
    `
const WrapperInput = Styled.div`
    display: flex;
    align-items: flex-end;
    padding-top:10px`

const Content = Styled.div`
     flex: 1;
     overflow-y: scroll;
`

const messages = [
    {
        id: 0,
        text: 'lorem18 1lorem 1lorem 1lorem 1lorem 1lorem 1lorem 1lorem 1lorem 1lorem 1lorem 1lorem 1lorem 1lorem 1lorem 1lorem 1',
        timestamp: '11/22/11',
        from: true,
    },
    { id: 1, text: 'lorem 2', timestamp: '11/22/11' },
    { id: 2, text: 'lorem 3', timestamp: '11/22/11', from: true },
    { id: 3, text: 'lorem 4', timestamp: '11/22/11' },
    { id: 4, text: 'lorem 1', timestamp: '11/22/11' },
    { id: 5, text: 'lorem 2', timestamp: '11/22/11' },
    { id: 6, text: 'lorem 3', timestamp: '11/22/11', from: true },
    { id: 7, text: 'lorem 4', timestamp: '11/22/11' },
    { id: 8, text: 'lorem 1', timestamp: '11/22/11', from: true },
    { id: 9, text: 'lorem 2', timestamp: '11/22/11' },
    { id: 10, text: 'lorem 3', timestamp: '11/22/11', from: true },
    { id: 11, text: 'lorem 4', timestamp: '11/22/11', from: true },
    { id: 12, text: 'lorem 1', timestamp: '11/22/11', from: true },
    { id: 13, text: 'lorem 2', timestamp: '11/22/11', from: true },
    { id: 14, text: 'lorem 3', timestamp: '11/22/11', from: true },
    { id: 15, text: 'lorem 4', timestamp: '11/22/11' },
    { id: 16, text: 'lorem 1', timestamp: '11/22/11' },
    {
        id: 17,
        text: 'lorem 2lorem 2lorem 2lorem 2lorem 2lorem 2lorem 2',
        timestamp: '11/22/11',
    },
    { id: 18, text: 'lorem 3', timestamp: '11/22/11' },
    { id: 19, text: 'lorem 4', timestamp: '11/22/11' },
]

// @ts-ignore
const mapper = (item: IDate) => <Message data={item} />

const Home = () => {
    const [text, setText] = useState<String>('')
    return (
        <Wrapper>
            <Content>{messages.map(mapper)}</Content>
            <WrapperInput>
                <TextField
                    name="email"
                    value={text}
                    placeholder="New message..."
                    onChange={(e: { target: { name: any; value: any } }) => {
                        setText(e.target.value)
                    }}
                    fullWidth
                />
                <Button>Send</Button>
            </WrapperInput>
        </Wrapper>
    )
}
export default Home
