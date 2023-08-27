import React from "react";

// styles
import styled from "styled-components";

const StyledFooterText = styled.a`
    margin-top: 100px;
    font-size: 12px;
    text-indent: 10px;
    text-decoration: none;

    :hover {
        color: rgb(51, 153, 204);
        cursor: pointer;
    }

`;

function Footer() {
    return (
        <div>
            <footer>
            <StyledFooterText href="https://github.com/sobiaahmad94/tic-tac-toe-game-updated">© Copyright 2023 - Sobia Ahmad</StyledFooterText>
            </footer>
        </div>
    );
}

export default Footer;