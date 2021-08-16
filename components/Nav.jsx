import { useState } from "react"
import styled from 'styled-components';
import { Container, Wrap } from 'styles/globalComponents';
import Button from './Button';
import Hamburger from 'hamburger-react'


const NavBar = styled.nav`
    padding: 16px 36px;
    align-items: center;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0 6px 16px #f0f3f4;
    border-radius: 5px;
`

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 36px;
    ul, li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        list-style: none;
        gap: 36px;
    }
    
    @media (max-width: 1024px) {
        display: none;
    }
    `

const StyledLink = styled.a`
    padding: 8px;
    letter-spacing: .2rem;
    font-size: .9rem;
    text-decoration: none;
    text-transform: uppercase;
    color: hsl(0, 0%, 60%);
    transition: color 150ms ease-out;
    cursor: pointer;

    &:hover {
        color: hsl(0, 0%, 1%);
    }

`

const NavLogo = styled.div`
    font-size: 2.5rem;
`



export default function Nav() {

    const [active, setActive] = useState(false)

    return <Wrap>
        <NavBar>
            <NavContainer>
                <NavLogo>D&C</NavLogo>
                {active ?
                    <NavDrawer /> :
                    <NavMenu>
                        <ul>
                            <li><NavLink>Accueil</NavLink></li>
                            <li><NavLink>À propos</NavLink></li>
                            <li><NavLink>Services</NavLink></li>
                            <li><NavLink>Contact</NavLink></li>
                        </ul>
                        <Button>Faire un devis</Button>
                    </NavMenu>

                }
            </NavContainer>
        </NavBar>
    </Wrap>
}

function NavLink(props) {

    const handleHover = () => {
        console.log(props.children)
    }


    return <StyledLink onMouseOver={handleHover}>{props.children}</StyledLink>
}


function NavDrawer() {
    return <div><Hamburger size={32} rounded /></div>
}