import React, { useEffect, useState } from 'react'
import Styled from 'styled-components'
import { TextField, Button, Hourglass } from 'react95'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import io, { Socket } from 'socket.io-client'
import Message from '../components/textMessage'
import UserBar from '../components/userBar'
import { IUser, IMessageList } from '../types'

const Content = Styled.div`
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    flex: 1;
`
const WrapperInput = Styled.div`
    display: flex;
    align-items: flex-end;
    `
const Wrapper = Styled.div`
    background-color: teal;
    width: 100%;
    border: 1px solid red;
    height: 100vh; /* This is for browsers that don't support custom properties */
    height: calc(var(--vh, 1vh) * 100);
    display: flex;
    flex-direction: column;
    `
const LoadingWrap = Styled.div`
    padding: 0 9px;
`

const Home = () => {
    const history = useHistory()
    const [socket, setSocket] = useState<Socket | null>(null)
    const [user, setUser] = useState<IUser>({
        email: '',
        password: '',
        name: '',
    })
    const [messageList, setMessageList] = useState<IMessageList[]>([])
    const [userList, setUserList] = useState<IUser[]>([])
    const [text, setText] = useState<string>('')
    const [isSending, setIsSending] = useState<boolean>(false)
    // eslint-disable-next-line max-len
    const mapper = (item: IMessageList) => <Message key={item.message_id} data={item} email={user.email} />
    useEffect(() => {
        const ioConnection = io(`http://${window.location.hostname}:3000`)
        setSocket(ioConnection as Socket)
        axios
            .get('/userInfo')
            .then(({ data }) => {
                setUser(data)
                ioConnection.emit('new_user', data)
            })
            .catch(() => {
                history.push('/login')
            })
        return () => {
            ioConnection.close()
        }
    }, [setSocket])

    useEffect(() => {
        socket?.on('user_joined', (data: IUser[]) => {
            setUserList(data)
        })
        socket?.on('user_left', (data: IUser[]) => {
            setUserList(data)
        })
        socket?.on('active_users', (data: IUser[]) => {
            setUserList(data)
        })
        socket?.on('message_history', (data: IMessageList[]) => {
            setMessageList(data)
        })
        socket?.on('get_message', (data: IMessageList) => {
            setMessageList((oldArray: IMessageList[]) => [...oldArray, data])
        })
    }, [socket])

    const sendMessage = () => {
        setIsSending(true)
        const newMessage = {
            text,
            date: new Date().toDateString(),
            user,
        }
        socket?.emit('send_message', newMessage)
        setIsSending(false)
        setText('')
    }
    return (
        <Wrapper>
            {userList?.length > 0 && <UserBar data={userList} />}
            <Content>{messageList?.map(mapper)}</Content>
            <WrapperInput>
                <TextField
                    disabled={isSending}
                    onKeyDown={(e: KeyboardEvent) => e.keyCode === 13 && sendMessage()}
                    name="email"
                    value={text}
                    placeholder="New message..."
                    onChange={(e: { target: { name: string; value: string } }) => {
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
