import HeaderBar from "./headerBar";
import NavLinks from "./navigation";
import MiniCartBtn from "../cart/miniCartBtn";

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
                    <MiniCartBtn />
                </div>
            </header>
        </>
    );
};

export default Header;
