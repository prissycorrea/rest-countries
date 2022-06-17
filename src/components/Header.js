import React from "react";
import SwitchButton from "./SwitchMode"

function Header() {
    return (
        <header>
            Where in the world?
            <div>
                <SwitchButton className="switchButton" /*onClick={toggleTheme}*/>
                <span className="lnr lnr-moon"></span> Dark Mode
                </SwitchButton>
            </div>
        </header>
    )
}

export default Header