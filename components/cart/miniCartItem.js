import classes from "../../assets/styles/partials/cart/miniCart.module.scss";

import {cartActions} from "../../store";
import {useDispatch} from "react-redux";

const MiniCartItem = (props) => {
    const dispatch = useDispatch();

    const toggleQuantity = (count) => {
        dispatch(cartActions.addToCart({
            item: {
                id: props.id,
                count: count,
            }
        }));
    }

    return (
        <li className={classes.miniCartItem} key={props.id}>
            <img src={props.image} alt={props.title} />
            <div className={classes.miniCartItemDescription}>
                <h3>{props.title}</h3>
                <span>{props.price}</span>
                <div>
                    <div onClick={() => {toggleQuantity(1)}}>+</div>
                    <div>{props.quantity}</div>
                    <div onClick={() => {toggleQuantity(-1)}}>-</div>
                </div>
            </div>
        </li>
    );
}

export default MiniCartItem;