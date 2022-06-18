import styled from 'styled-components';


export const JoinHeader = styled.header`
    text-align: center;
    padding: 20px;
    background: #667aff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`;

export const JoinMain = styled.main`
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
    }
    .btn {
        margin-top: 20px;
        width: 100%;
    }
`;

export const JoinContainer = styled.div`
	max-width: 500px;
	margin: 80px auto;
	color: #fff;
`;

export const Button = styled.button`
    cursor: pointer;
    padding: 5px 15px;
    background: #e6e9ff;
    color: #667aff;
    border: 0;
    font-size: 17px;
`;

export const Select = styled.select`
    font-size: 16px;
    padding: 5px;
    height: 40px;
    width: 100%;
`;