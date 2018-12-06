import styled from 'styled-components';

const Button = styled.button`
    width: ${props => props.width};
    height: 44px;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    background-color: white;
    color: #dd5e89;
    border: none;
    border-radius: 3px;
    cursor: pointer;
`;

export default Button;
