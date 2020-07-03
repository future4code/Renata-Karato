import styled from "styled-components";

import BannerLogin from "../../imgs/bannerLogin.png";

export const MainContainer = styled.div`
    height: 100vh;
    height: 100vh;
    background-image:url(${BannerLogin});
    background-size: cover;
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
    width: 115px;
    position: absolute;
    left: 3vw;
    top: 0.5vh;
    cursor: pointer;
`;

export const Title = styled.h3`
    color: white;
    text-align: left;
    margin-left: 52vw;
`;

export const Subtitle = styled.p`
    color: white;
    text-align: left;
    margin-left: 52vw;
`;

export const Label = styled.label`
    padding-right: 10px;
    padding-left: 10px;
    color: white;
    margin-left: 52vw;
`;

export const Input = styled.input`
    height: 3vh;
    border-radius: 5px;
    margin-bottom: 10px;
    margin-left: 53vw;
`;

export const ButtonLogin = styled.button`
    width: 8vw;
    height: 4vh;
    color: #23265D;
    border: none;
    font-size: 14px;
    background-color: #FBD1A2;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    margin: 10px;
    margin-left: 71vw;

    :hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    background-color: #FC9F5B;
    }

    :active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
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