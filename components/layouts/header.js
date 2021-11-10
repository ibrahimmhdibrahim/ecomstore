import HeaderBar from "./headerBar";
import NavLinks from "./navigation";
import MiniCart from "../cart/miniCart";

import classes from "../../assets/styles/layouts/header.module.scss";

const Header = () => {
    return (
        <>
            <HeaderBar />
            <header className={classes.header}>
                <div className={`container ${classes.container}`}>
                    <div className={classes.logo}>
                        <img src="/images/logo.png" alt="logo" />
                    </div>
                    <NavLinks />
                    <MiniCart />
                </div>
            </header>
        </>
    );
};

export default Header;
