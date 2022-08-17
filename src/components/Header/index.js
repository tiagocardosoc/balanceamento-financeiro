import React from "react";
import * as C from "./styles"; // mesma coisa de { Container }

const Header = () => {
    return (
        <C.Container>
            <C.Header>
                <C.Title>Balanceamento Financeiro</C.Title>
            </C.Header>
        </C.Container>
    )
}

export default Header;