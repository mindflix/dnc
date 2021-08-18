import Cursor from "./Cursor";
import Image from "next/image";
import styled from "styled-components";
import heroBg from "public/images/hero-gradient.png";

const HeroBg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200vh;
    z-index: -10;
    div,
    img {
        filter: blur(30px);
        -webkit-filter: blur(30px);
        height: 100%;
        width: 100%;
    }
`;

export default function Hero() {
    return <HeroBg></HeroBg>;
}
