import {FaShoppingBag} from "react-icons/fa";

import classes from "../../assets/styles/partials/cart/miniCart.module.scss";

const toggleCartHandler = (e) => {
    console.info(e);
}

const MiniCart = () => {
    return (
        <div className={classes.miniCart}>
            <div className={classes.miniCartContainer}>
                <button onClick={toggleCartHandler} className={classes.miniCartBtn}>
                    <FaShoppingBag />
                </button>
            </div>
        </div>
    );
}

export default MiniCart;