import React from 'react'
import Styled from 'styled-components'

const Wrapper = Styled.div`
    background: yellow;
    height: calc(100vh + env(safe-area-inset-bottom));
    //  display: flex;
    // flex-direction: column;
    // align-items: stretch;
    // justify-content: space-between;
    // position: fixed;
    // top: 0;
    // left: 0;
    // right: 0;
    // bottom: 0;
    // padding-bottom: calc(30px + env(safe-area-inset-bottom));
`
const Content = Styled.div`
    position: fixed;
    bottom: 0;
    input {
        background: red;
    }
`

const Test = () => (
    <Wrapper>
        <Content>
            <input type="email" name="string" />
        </Content>
    </Wrapper>
)
export default Test
