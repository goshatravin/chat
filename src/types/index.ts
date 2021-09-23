export type IUser = {
    email: string
    password: string
    name?: string
}
export type IMessageList = {
    message_id: string
    user_id: string
    from: string
    message: string
    time: string
    name: string
}
export type ISpacer = {
    x?: number
    y?: number
}

export type IMessage = {
    email?: string
    data: {
        message: string
        name: string
        time: string
        from: string
        message_id: string
    }
}
export type IUserJoined = {
    list: any
}
export type IUserList = {
    email: string
    name: string
    id: string
}
