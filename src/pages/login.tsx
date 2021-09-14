import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Styled from 'styled-components'
import {
    TextField,
    Button,
    Window,
    WindowHeader,
    WindowContent,
    Hourglass,
} from 'react95'
import userValidation from '../validation/index'

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
const ErrorText = Styled.p`
    color: #aa0000;
`
const ErrorWrapper = Styled.div`
    display: flex;
    align-items: center;
    img{
        max-width: 25px;
    }`

type IUser = {
    email: string
    password: string
}
type ISpacer = {
    x?: number
    y?: number
}

const Login = () => {
    const history = useHistory()
    const [button, setButton] = useState<boolean>(false)
    const [user, setUser] = useState<IUser>({
        email: '',
        password: '',
    })
    const [error, setError] = useState<string>('')
    const auth = () => {
        userValidation
            .validate(user)
            .then(() => {
                setError('')
                setButton(true)
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(setButton(false))
                        history.push('/')
                    }, 3000)
                })
            })
            .catch((err) => setError(err.message))
    }
    return (
        <Wrapper>
            <Window className="window">
                <WindowHeader className="window-header">
                    <span>web-chat.exe</span>
                </WindowHeader>
                <WindowContent>
                    <Spacer y={10} />
                    {error && (
                        <ErrorWrapper>
                            <img
                                src="https://win98icons.alexmeub.com/icons/png/msg_error-0.png"
                                alt=""
                            />
                            <Spacer x={10} />
                            <ErrorText>{error}</ErrorText>
                        </ErrorWrapper>
                    )}
                    <Spacer y={20} />
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
                            {button ? <Hourglass size={20} /> : 'Login'}
                        </Button>
                    </InputWrapper>
                </WindowContent>
            </Window>
        </Wrapper>
    )
}
export default Login
