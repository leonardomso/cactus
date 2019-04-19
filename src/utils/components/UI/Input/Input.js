import styled from 'styled-components';

const Input = styled.input`
    width: ${({ width }) => width};
    max-width: 380px;
    border-radius: 4px;
    text-indent: 20px;
    height: 44px;
    background-color: white;
    border: 2px solid #d8dde6;
    font-family: 'Inter UI Medium', sans-serif;
    font-size: 14px;
    cursor: pointer;
    transition: border-color 0.2s ease, background-color 0.2s ease;

    ::-webkit-input-placeholder {
        opacity: 0.5;
        font-family: 'Inter UI Medium', sans-serif;
        font-size: inherit;
        color: inherit;
        transition: opacity 0.2s ease, transform 0.2s ease;
    }

    &:focus {
        border-color: #d8dde6;
    }

    :focus::-webkit-input-placeholder {
        opacity: 0;
        transform: translateX(10px);
    }
`;

export default Input;
