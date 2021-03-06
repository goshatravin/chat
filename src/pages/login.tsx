import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { TextField, Anchor, Button, Window, WindowHeader, WindowContent, Hourglass } from 'react95'
import axios from 'axios'
import { userValidation } from '../validation/index'
import { ErrorText, ErrorWrapper, InputWrapper, Spacer, Wrapper } from './style'
import { IUser } from '../types'

const Login = () => {
    const history = useHistory()
    const [button, setButton] = useState<boolean>(false)
    const [user, setUser] = useState<IUser>({
        email: 'goshatravin@gmail.com',
        password: 'P@ssw0rd!',
    })

    const [error, setError] = useState<string>('')
    const auth = () =>
        userValidation
            .validate(user)
            .then(() => {
                setError('')
                setButton(true)
                axios
                    .post('/login', user)
                    .then(() => {
                        setButton(false)
                        history.push('/')
                    })
                    .catch((err) => err)
            })
            .catch((err) => setError(err.message))
    const authSwitch = () => {
        history.push('/registration')
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
                            <img src="https://win98icons.alexmeub.com/icons/png/msg_error-0.png" alt="" />
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
                            onChange={(e: { target: { name: any; value: any } }) => {
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
                            onChange={(e: { target: { name: any; value: any } }) => {
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
                        <Spacer y={10} />
                        <Anchor onClick={authSwitch}>Dont have an account?</Anchor>
                    </InputWrapper>
                </WindowContent>
            </Window>
        </Wrapper>
    )
}
export default Login
