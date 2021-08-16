
import styled from 'styled-components';

const CursorMain = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 10;
    contain: layout style size;
    pointer-events: none;
`

const CursorMedia = styled.div`
    display: block;
    height: 350px;
    width: 350px;
    overflow: hidden;
    border-radius: 100%;
    transform: scale(0);
    margin: -175px 0 0 -175px;
    position: relative;
`


export default function Cursor() {
    return (
        <CursorMain>
            <CursorMedia></CursorMedia>
        </CursorMain>
    )
}