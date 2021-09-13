import React, { useState } from 'react'
import Styled from 'styled-components'
import { TextField, Button } from 'react95'

const Wrapper = Styled.div`
    width: 100%;
    background-color: teal;
    height: 100vh; /* This is for browsers that don't support custom properties */
    height: calc(var(--vh, 1vh) * 100);`
const WrapperInput = Styled.div`
    display: flex;
    align-items: flex-end;
    height: 100%`

const Home = () => {
    const [text, setText] = useState<String>('')
    return (
        <Wrapper>
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
