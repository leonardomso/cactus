import styled from 'styled-components';

const Paragraph = styled.p`
    font-family: 'Inter UI Medium', sans-serif;
    color: #212b36;
    font-size: calc(12px + (14 - 12) * (100vw - 240px) / (700 - 240));
`;

export default Paragraph;