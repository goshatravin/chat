import React from 'react'
import Styled from 'styled-components'
import { AppBar, Avatar } from 'react95'

const Wrapper = Styled(AppBar)`
    display: flex;
    flex-direction: row;
    position: relative;
`
const UserBar = ({ data }: any) => {
    const mapper = (item: any) => (
        <Avatar key={item.socket_id} square size={40} style={{ background: 'palevioletred' }}>
            {item?.name?.substring(0, 2).toUpperCase()}
        </Avatar>
    )
    return <Wrapper>{data?.map(mapper)}</Wrapper>
}

export default UserBar
