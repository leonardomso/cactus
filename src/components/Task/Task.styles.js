import styled from 'styled-components';

export const Styled = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    border-radius: 3px;
    width: 90%;
    height: 60px;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.1);

    &:hover {
        border: 1px solid rgba(0, 0, 0, 0.2);
    }
`;

export const Text = styled.p`
    margin: 0 auto;
    color: #212b36;
    font-size: 1rem;
    font-family: "Inter UI Medium", sans-serif;
    font-weight: 400;
`;