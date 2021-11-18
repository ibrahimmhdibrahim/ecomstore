import classes from "../../assets/styles/partials/cart/miniCart.module.scss";

const MiniCartItem = (props) => {
    return (
        <li className={classes.miniCartItem} key={props.id}>
            <img src={props.image} alt={props.title} />
            <div className={classes.miniCartItemDescription}>
                <h3>{props.title}</h3>
                <span>{props.price}</span>
                <span>{props.quantity}</span>
            </div>
        </li>
    );
}

export default MiniCartItem;