import styled from 'styled-components';

const Title = styled.h1`
    font-family: 'Inter UI Medium', sans-serif;
    color: #212b36;
    font-size: calc(30px + (34 - 30) * (100vw - 240px) / (700 - 240));
`;

export default Title;