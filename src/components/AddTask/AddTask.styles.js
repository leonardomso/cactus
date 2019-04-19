import styled from 'styled-components';

export const Styled = styled.nav`
    width: 100%;
    max-width: 500px;
    min-width: 250px;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
`;

export const Title = styled.h1`
    font-family: 'Inter UI Medium', sans-serif;
    color: #212b36;
    font-size: calc(30px + (34 - 30) * (100vw - 240px) / (700 - 240));
`;

export const SubTitle = styled.h3`
    font-family: 'Inter UI Medium', sans-serif;
    color: #212b36;
    font-size: calc(16px + (18 - 16) * (100vw - 240px) / (700 - 240));
`;

export const Paragraph = styled.p`
    font-family: 'Inter UI Medium', sans-serif;
    color: #212b36;
    font-size: calc(12px + (14 - 12) * (100vw - 240px) / (700 - 240));
`;