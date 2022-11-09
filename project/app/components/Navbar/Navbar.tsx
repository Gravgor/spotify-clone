import styled from "styled-components";


export const StyledBackground = styled.div`
    background-color: #1E1E1E;
    height: 80px;
    width: 89%;
    color: #fff;
    position: absolute;
    top: 0;
    left: 240px;
    z-index: 999;
`

export const StyledRight = styled.div`
    float: right;
    display: flex;
    align-items: center;
    height: 100%;
    width: 600px;
    padding: 0 20px;

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