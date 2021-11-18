import classes from "../../assets/styles/partials/cart/miniCart.module.scss";

import {useSelector} from "react-redux";
import MiniCartItem from "./miniCartItem";

const MiniCart = (props) => {
    const cart = useSelector((state) => state.cart);

    return (
        <div className={classes.miniCart}>
            <div className={classes.miniCartContainer}>
                <div onClick={props.toggleCart}>Close</div>
                <ul className={classes.miniCartItems}>
                    {
                        cart.items.map(item =>
                             <MiniCartItem key={item.id} id={item.id} title={item.title} image={item.image} price={item.price} quantity={item.quantity} />
                        )
                    }
                </ul>
            </div>
        </div>
    );
}

export default MiniCart;