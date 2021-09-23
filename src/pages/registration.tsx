import { Anchor, Button, Hourglass, TextField, Window, WindowContent, WindowHeader } from 'react95'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { Wrapper, Spacer, ErrorWrapper, ErrorText, InputWrapper } from './style'
import { userRegValidation } from '../validation'
import { IUser } from '../types'

const Registration = () => {
    const history = useHistory()
    const [button, setButton] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    const [userReg, setUserReg] = useState<IUser>({
        name: '',
        email: '',
        password: '',
    })
    const reg = () =>
        userRegValidation
            .validate(userReg)
            .then(() => {
                setError('')
                setButton(true)
                axios
                    .post('/registration', userReg)
                    .then(() => {
                        history.push('/')
                    })
                    .catch((err) => err)
            })
            .catch((err) => setError(err.message))
    const authSwitch = () => {
        history.push('/login')
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
                            name="name"
                            value={userReg.name}
                            placeholder="Name"
                            onChange={(e: { target: { name: any; value: any } }) => {
                                setUserReg((prevState) => ({
                                    ...prevState,
                                    [e.target.name]: e.target.value,
                                }))
                            }}
                            fullWidth
                            height={500}
                        />
                        <Spacer y={15} />
                        <TextField
                            name="email"
                            value={userReg.email}
                            placeholder="Email"
                            onChange={(e: { target: { name: any; value: any } }) => {
                                setUserReg((prevState) => ({
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
                            value={userReg.password}
                            placeholder="Password"
                            onChange={(e: { target: { name: any; value: any } }) => {
                                setUserReg((prevState) => ({
                                    ...prevState,
                                    [e.target.name]: e.target.value,
                                }))
                            }}
                            fullWidth
                        />
                        <Spacer y={20} />
                        <Button disabled={button} fullWidth dis onClick={reg}>
                            {button ? <Hourglass size={20} /> : 'Registration'}
                        </Button>
                        <Spacer y={10} />
                        <Anchor onClick={authSwitch}>Has an account ?</Anchor>
                    </InputWrapper>
                </WindowContent>
            </Window>
        </Wrapper>
    )
}

export default Registration
