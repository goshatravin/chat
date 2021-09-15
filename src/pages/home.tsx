import React, { useState } from 'react'
import Styled from 'styled-components'
import { TextField, Button, Hourglass } from 'react95'
import Message from '../components/textMessage'

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
const LoadingWrap = Styled.div`
    padding: 0 9px;
`

const messages = [
    {
        id: 0,
        message:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        time: '14:24',
        from: true,
        name: 'Gosha',
    },
]

// @ts-ignore
const mapper = (item) => <Message key={item.id} data={item} />

const Home = () => {
    const [text, setText] = useState<String>('')
    const [isSending, setIsSending] = useState<boolean>(false)
    const sendMessage = (e: any) => {
        // eslint-disable-next-line no-new
        new Promise((resolve) => {
            setIsSending(true)
            setText('')
            setTimeout(() => {
                resolve(setIsSending(false))
            }, 3000)
        })
        if (e.keyCode === 13) {
            console.log('123')
        }
    }

    return (
        <Wrapper>
            <Content>{messages.map(mapper)}</Content>
            <WrapperInput>
                <TextField
                    onKeyDown={(e: any) => e.keyCode === 13 && sendMessage(e)}
                    name="email"
                    value={text}
                    placeholder="New message..."
                    onChange={(e: { target: { name: any; value: any } }) => {
                        setText(e.target.value)
                    }}
                    fullWidth
                />
                <Button disabled={text.length === 0 || isSending} onClick={sendMessage}>
                    {isSending ? (
                        <LoadingWrap>
                            <Hourglass size={20} />
                        </LoadingWrap>
                    ) : (
                        'Send'
                    )}
                </Button>
            </WrapperInput>
        </Wrapper>
    )
}
export default Home
