import React, { useState } from 'react'
import Styled from 'styled-components'
import { TextField, Button } from 'react95'

const Wrapper = Styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgb(198 198 198);
`
const InputWrapper = Styled.div`
    width: 100%;
    border: 1px solid red;
 `
const LogoWrapper = Styled.div`
    width: 100%;
    border: 1px solid yellow;
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
            <LogoWrapper>
                {/* <img */}
                {/*    src="https://win98icons.alexmeub.com/icons/png/network_cool_two_pcs-0.png" */}
                {/*    alt="" */}
                {/* /> */}
                <p>Web Chat</p>
            </LogoWrapper>
            <Spacer y={55} />
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
