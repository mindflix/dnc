import Nav from "components/Nav";
import styled from "styled-components";
import px2vw from "utils/px2vw";

const Header = styled.header`
    position: fixed;
    width: 100%;
    z-index: 9000;
    top: 0;
    left: 0;
`;

const Main = styled.main`
    padding-top: 100px;
`;

const Layout = ({ children }) => {
    return (
        <>
            <Header>
                <Nav />
            </Header>
            <Main>{children}</Main>
        </>
    );
};

export default Layout;
