import styled from "styled-components";

const Button = styled.button`
    display: flex;
    padding: 12px 24px;
    font-size: 1rem;
    border: 2px solid ${({ theme }) => theme.bg};
    border-radius: 8px;
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
    transition-property: color, background;
    transition-duration: 0.15s;
    transition-timing-function: ease-out;
    cursor: pointer;
    &:hover {
        color: black;
        background: transparent;
    }
`;

export default Button;
