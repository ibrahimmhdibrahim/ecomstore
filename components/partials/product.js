import classes from "../../assets/styles/partials/product.module.scss";

import {cartActions} from "../../store";
import {useDispatch} from "react-redux";

const Product = (props) => {
    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(cartActions.addToCart({
            item: {
                id: props.id,
                title: props.title,
                price: props.price,
                image: props.image,
                quantity: 1,
            },
        }));
    }

    return (
        <div className={classes.productBlock}>
            <img src={props.image}/>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <p>{props.smallDescription}</p>
                <div className={classes.price}>{props.price}$</div>
                <button className={classes.productBtn} onClick={addToCartHandler}>
                    ADD TO CART
                </button>
            </div>
        </div>
    );
}

export default Product;