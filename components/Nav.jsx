import Link from "next/link";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container, Wrap } from "styles/globalComponents";
import Button from "./Button";
import Hamburger from "hamburger-react";

const links = [
    {
        name: "Accueil",
        href: "/",
    },
    {
        name: "À propos",
        href: "/about",
    },
    {
        name: "Services",
        href: "/services",
    },
    {
        name: "Contact",
        href: "/contact",
    },
];

const NavBar = styled.nav`
    position: sticky;

    padding: 16px 36px;
    align-items: center;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0 6px 16px #f0f3f4;
    border-radius: 16px;
`;

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 auto;
`;

const NavHeader = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 1024px) {
        width: 100%;
    }
`;

const StyledMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 36px;
    ul,
    li {
        padding: 0 0.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        list-style: none;
        @media (max-width: 1024px) {
            padding: 0.5rem;
            flex-wrap: wrap;
            flex-direction: column;
        }
    }
    @media (max-width: 1024px) {
        gap: 0;
        flex-direction: column;
        flex-wrap: wrap;
        margin: 0 auto 20px auto;
    }
`;

const StyledLink = styled.a`
    padding: 8px;
    letter-spacing: 0.2rem;
    text-decoration: none;
    text-transform: uppercase;
    color: hsl(0, 0%, 60%);
    transition: color 150ms ease-out;
    cursor: pointer;

    &:hover {
        color: hsl(0, 0%, 1%);
    }
`;

const NavLogo = styled.div`
    font-size: 2.5rem;
`;

export default function Nav() {
    const [isDrawer, setDrawer] = useState(false);
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        const handleSize = () => {
            if (window.innerWidth <= 1024) {
                setDrawer(true);
                setOpen(false);
            } else {
                setDrawer(false);
                setOpen(true);
            }
        };
        handleSize();
        window.addEventListener("resize", handleSize);
        return () => window.removeEventListener("resize", handleSize);
    }, []);

    return (
        <Wrap>
            <NavBar>
                <NavContainer>
                    <NavHeader>
                        <NavLogo>D&C</NavLogo>
                        {isDrawer ? (
                            <Hamburger
                                toggled={isOpen}
                                toggle={setOpen}
                                size={32}
                                rounded
                            />
                        ) : null}
                    </NavHeader>
                    {isOpen ? <NavMenu /> : null}
                </NavContainer>
            </NavBar>
        </Wrap>
    );
}

function NavMenu() {
    return (
        <StyledMenu>
            <NavLinks />
            <Button>Nos projets</Button>
        </StyledMenu>
    );
}

function NavLinks() {
    return (
        <ul>
            {links.map((link, index) => (
                <li key={index}>
                    <Link href={link.href}>
                        <StyledLink>{link.name}</StyledLink>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
