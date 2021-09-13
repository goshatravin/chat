import React, { useState } from 'react'
import Styled from 'styled-components'
import { TextField, Button, Window, WindowHeader, WindowContent } from 'react95'

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
const InputWrapper = Styled.div`
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

type IUser = {
    email: string
    password: string
}
type ISpacer = {
    x?: number
    y?: number
}

const Login = () => {
    const [button, setButton] = useState<boolean>(false)
    const [user, setUser] = useState<IUser>({
        email: '',
        password: '',
    })
    const auth = () => {
        setButton(true)
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(setButton(false))
            }, 3000)
        })
    }
    return (
        <Wrapper>
            <Window className="window">
                <WindowHeader className="window-header">
                    <span>web-chat.exe</span>
                </WindowHeader>
                <WindowContent>
                    <InputWrapper>
                        <TextField
                            name="email"
                            value={user.email}
                            placeholder="Email"
                            onChange={(e: {
                                target: { name: any; value: any }
                            }) => {
                                setUser((prevState) => ({
                                    ...prevState,
                                    [e.target.name]: e.target.value,
                                }))
                            }}
                            fullWidth
                            height={500}
                        />
                        <Spacer y={15} />
                        <TextField
                            name="password"
                            value={user.password}
                            placeholder="Password"
                            onChange={(e: {
                                target: { name: any; value: any }
                            }) => {
                                setUser((prevState) => ({
                                    ...prevState,
                                    [e.target.name]: e.target.value,
                                }))
                            }}
                            fullWidth
                        />
                        <Spacer y={20} />
                        <Button disabled={button} fullWidth dis onClick={auth}>
                            Login
                        </Button>
                    </InputWrapper>
                </WindowContent>
            </Window>
        </Wrapper>
    )
}
export default Login
