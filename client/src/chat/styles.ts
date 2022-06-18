import styled from 'styled-components'

export const ChatContainer = styled.div`
    max-width: 1100px;
    background: #e6e9ff;
    margin: 30px auto;
    overflow: hidden;
`

export const ChatHeader = styled.header`
    background: #667aff;
    color: #fff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ChatSideBar = styled.div`
    background: #7386ff;
    color: #fff;
    padding: 20px 20px 60px;
    overflow-y: scroll;
    h2 {
        font-size: 20px;
        background: rgba(0, 0, 0, 0.1);
        padding: 10px;
        margin-bottom: 20px;
    }
    h3 {
        margin-bottom: 15px;
    }
    ul li {
        padding: 10px 0;
    }
`

export const ChatMain = styled.main`
    display: grid;
    grid-template-columns: 1fr 3fr;
`

export const ChatMessages = styled.div`
    padding: 30px;
    max-height: 500px;
    overflow-y: scroll;
`

export const Message = styled.div`
    padding: 10px;
    margin-bottom: 15px;
    background-color: #e6e9ff;
    border-radius: 5px;
    overflow-wrap: break-word;
`

export const Meta = styled.div`
    font-size: 15px;
    font-weight: bold;
    color: #7386ff;
    opacity: 0.7;
    margin-bottom: 7px;
    span {
        color: #777;
    }
`

export const FormContainer = styled.div`
    padding: 20px 30px;
    background-color: #667aff;
    form {
        display: flex;
    }
    input[type='text'] {
        font-size: 16px;
        padding: 5px;
        height: 40px;
        flex: 1;
    }
`
