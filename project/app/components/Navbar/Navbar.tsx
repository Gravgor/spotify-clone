import styled from "styled-components";


export const StyledBackground = styled.div`
    height: 80px;
    width: 89%;
    color: #fff;
    position: absolute;
    top: 0;
    left: 240px;
    z-index: 999;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
`

export const StyledRight = styled.div`
    float: right;
    display: flex;
    align-items: center;
    height: 100%;
    width: 600px;
    padding: 0 20px;

    @media screen and (max-width: 768px){
        transition: 0.8s all ease;
        display: none;

    }
`



export const StyledNavBarText = styled.p`
    font-size: 18px;
    color: #fff;
    text-decoration: none;
    margin-left: 24px;
    font-weight: bold;

    &:hover{
        color: #1DB954;
        transition: 0.2s ease-in-out;
    }
    
`

export const StyledButtonNavBarSpotify = styled.button`

    background-color: #1DB954;
    color: #fff;
    border: none;
    border-radius: 25px;
    padding: 10px 20px;
    font-size: 18px;
    font-weight: bold;
    margin-left: 24px;
    cursor: pointer;
    transition: 0.2s ease-in-out;

`