import React, { useState } from 'react'
import Styled from 'styled-components'
import { TextField, Button } from 'react95'

const Wrapper = Styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(198 198 198);
`
const InputWrapper = Styled.div`
    width: 100%;
    padding: 0 40px;
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
                    Login
                </Button>
            </InputWrapper>
        </Wrapper>
    )
}
export default Login
