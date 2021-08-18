import styled from "styled-components";

const Button = styled.button`
    display: flex;
    padding: 13px 24px 12px;
    font-size: 1rem;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.primary};
    border-radius: 8px;
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    z-index: 4;
    background: ${({ theme }) => theme.background.primary};
    text-transform: uppercase;
    cursor: pointer;
    outline: 0;
    transform: translate(0px, -3px);
    letter-spacing: 0.2rem;
    position: relative;
    transition: color 0.25s ease-in-out;
    transition: background 0.25s ease-in-out;
    &::after {
        z-index: -100;
        pointer-events: none;
        position: absolute;
        transition: 0.25s ease-in-out;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        border-top-right-radius: 8px;
        content: "";
        left: 7px;
        top: 7px;
        width: 100%;
        height: 100%;
        border-bottom: 2px solid #fff;
        border-right: 2px solid #fff;
    }
    &:hover {
        border-color: ${({ theme }) => theme.colors.highlight};
        background: ${({ theme }) => theme.colors.highlight};
        &::after {
            opacity: 0;
            transform: translate(-7px, -7px);
        }
    }
`;

export default Button;
