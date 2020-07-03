import styled from "styled-components";

export const MainContainer = styled.div`
    height: 250vh;
    background-color: #23265D;
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

export const Grid = styled.section`
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    margin: auto;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 25vh;
`;

export const Title = styled.h3`
    color: white;
    text-align: center;
`;

export const Subtitle = styled.p`
    color: white;
    text-align: center;
`;

export const Loading = styled.div`
    color: white;
    text-align: center;
`;

export const Card = styled.div`
    background-color: #FFFFFF;
    width: 22vw;
    height: 40vh;
    box-shadow: 0 0 2px;
    border-radius: 8px;
    margin: 10px;
    line-height: 16px;

    :hover {
    box-shadow: 0 0 6px white;
    transition: 200ms;
    }
`;

export const Description = styled.div`
    text-align: start;
    margin: 0 16px;
    font-size: 14px;

    div {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    }

    strong {
    color: #FC9F5B;
    font-size: 16px;
    }
`;

export const CardButton = styled.div`
    float: right;
    bottom: 2vh;
`;

export const ButtonForm = styled.button`
    width: 10vw;
    height: 5vh;
    color: #23265D;
    border: none;
    font-size: 14px;
    background-color: #FBD1A2;
    border-radius: 5px;
    outline: none;
    cursor: pointer;

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