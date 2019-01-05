import styled from 'styled-components';

const StyledTask = styled.li`
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

export default StyledTask;