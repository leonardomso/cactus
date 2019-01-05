import styled from 'styled-components';

const SubTitle = styled.h3`
    font-family: 'Inter UI Medium', sans-serif;
    color: #212b36;
    font-size: calc(16px + (18 - 16) * (100vw - 240px) / (700 - 240));
`;

export default SubTitle;