import styled from "styled-components";
import Botao from "@material-ui/core/Button";

import Background from "../../imgs/background.png"

export const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image:url(${Background});
`;

export const Header = styled.div`
    height: 5vh;
    overflow: hidden;
    background-color: #33CA7F;
    padding: 10px 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    a {
        float: left;
        color: black;
        padding: 12px;
        text-decoration: none;
        font-size: 14px; 
        line-height: 25px;
        border-radius: 4px; 
    }

    a:hover {
        background-color: #ddd;
        color: black;
    }

    a.active {
        background-color: #23265D;
        color: white;
    }

    .header-right {
        float: right;
        display: flex;
        justify-content: flex-end;
    }
`;

export const ImgLogo = styled.img`
    width: 40vw;
    position: absolute;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    left: 5vw;
`;

export const ImgBanner = styled.img`
    width: 45vw;
    position: absolute;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    right: 5vw;
`;

export const BoxButtons = styled.div`
    position: absolute;
    top: 60vh;
    right: 18vw;
`;

export const ButtonOrange = styled(Botao)`
    :hover {
        background-color: #ddd;
        color: black;
    }

    :active {
        background-color: dodgerblue;
        color: white;
    }
`;

export const ButtonGreen = styled(Botao)`
    :hover {
        background-color: #ddd;
        color: black;
    }

    :active {
        background-color: dodgerblue;
        color: white;
    }
`;

export const MessageFooter = styled.p`
    font-size: 16px; 
    line-height: 25px;
    color: white;
`;

export const Footer = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #33CA7F;
    color: black;
    text-align: center;
    display: flex;
    justify-content: space-around;
`;