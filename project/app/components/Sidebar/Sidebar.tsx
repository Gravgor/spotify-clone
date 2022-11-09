import styled from "styled-components";


export const StyledSidebar = styled.div`

position: absolute;
top: 0;
left: 0;
background-color: #000000;
width: 240px;
height: 100vh;
z-index: 1;
opacity: 0.9;
overflow: hidden;
`

export const StyledSidebarLogo = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 0 20px;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`

export const StyledSideBarList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 100px;
    left: -30px;
`

export const SideBarA = styled.a`
color: gray;
font-size: 24px;
font-weight: bold;

&:hover{
    color: #fff;
    transition: 0.2s ease-in-out;
}


`


export const SideBarATwo = styled.a`
color: gray;
font-size: 24px;
font-weight: bold;

&:hover{
    color: #fff;
    transition: 0.2s ease-in-out;
}


`
export const StyledSideBarListTwo = styled.ul`
   width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    gap: 10px;
    top: 280px;
    left: -30px;
`

export const StyledSideBarPlaylists = styled.div`

    display: flex;
    align-items: center;
    height: 600px;
    width: 100%;
    position: absolute;
    top: 350px;
`


export const StyledFooterSideBar = styled.div`
position: absolute;
bottom: 0;
left: -30;
display: flex;
align-items: center;
flex-direction: column;
height: 100px;
width: 160px;
color: #fff;
`


export const StyledFooterSideBarText = styled.p`

font-size: 16px;
color: gray;
text-decoration: none;
margin-left: 24px;
font-weight: bold;

&:hover{
    color: #fff;
    text-decoration: underline;
    transition: 0.2s ease-in-out;
}

`