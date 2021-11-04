import classes from "../../assets/styles/layouts/headerBar.module.scss";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter
} from "react-icons/fa";

const HeaderBar = () => {
    return (
        <div className={classes.headerBar}>
            <div className={`container ${classes.container}`}>
                <div className={classes.socialMedia}>
                    <ul>
                        <li>
                            <a href="https://facebook.com" target="_blank">
                                <FaFacebookF />
                            </a>
                        </li>
                        <li>
                            <a href="https://linkedin.com">
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com">
                                <FaInstagram />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com">
                                <FaTwitter />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={classes.account}></div>
            </div>
        </div>
    );
};

export default HeaderBar;
