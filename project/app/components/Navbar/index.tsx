
"use client"

import { StyledBackground, StyledNavBarText, StyledRight, StyledButtonNavBarSpotify } from "./Navbar";




export default function Navbar(){
    return (
        <StyledBackground>
            <StyledRight>
                <StyledNavBarText>Premium</StyledNavBarText>
                <StyledNavBarText>Pomoc</StyledNavBarText>
                <StyledNavBarText>Pobierz</StyledNavBarText>
                <StyledNavBarText>Zarejestruj się</StyledNavBarText>
                <StyledButtonNavBarSpotify>Zaloguj się</StyledButtonNavBarSpotify>
            </StyledRight>
            

        </StyledBackground>
    )
}