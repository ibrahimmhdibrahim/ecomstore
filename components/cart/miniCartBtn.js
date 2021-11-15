import classes from "../../assets/styles/partials/cart/miniCartBtn.module.scss";
import {FaShoppingBag} from "react-icons/fa";

import {useState} from "react";
import MiniCart from "./miniCart";

const MiniCartBtn = () => {
    const [cartShown, setCartShow] = useState(false);

    const toggleCartHandler = () => {
        setCartShow(prevState => {
            return !prevState;
        });
    }

    return (
        <>
            <div className={classes.miniCartBtn}>
                <div className={classes.miniCartBtnContainer}>
                    <button onClick={toggleCartHandler} className={classes.miniCartBtnIcon}>
                        <FaShoppingBag/>
                    </button>
                </div>
            </div>
            {cartShown && <MiniCart toggleCart={toggleCartHandler} />}
        </>
    );
}

export default MiniCartBtn;