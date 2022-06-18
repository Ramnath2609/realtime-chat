import styled from 'styled-components'

export const JoinHeader = styled.header`
    text-align: center;
    padding: 20px;
    background: #667aff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

export const JoinMain = styled.main`
    display: flex;
    align-content: center;
    justify-content: center;
    height: 50%;
    padding: 30px 40px;
    background: #7386ff;
    p {
        margin-bottom: 20px;
    }
    label {
        display: block;
        margin-bottom: 5px;
    }
    input[type='text'] {
        font-size: 16px;
        padding: 5px;
        height: 40px;
        width: 100%;
        border-radius: 6px;
        border: none;
    }
    .btn {
        margin-top: 20px;
        width: 100%;
    }
`

export const JoinContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    width: 50%;
    color: #fff;
    height: 75%;
    margin: auto;
    color: #fff;
`

export const Button = styled.button`
    cursor: pointer;
    padding: 10px 15px;
    background: #e6e9ff;
    color: #667aff;
    border: 0;
    font-size: 17px;
    border-radius: 12px;
`

export const Select = styled.select`
    font-size: 16px;
    padding: 5px;
    height: 40px;
    width: 100%;
    border-radius: 6px;
    border: none;
`
