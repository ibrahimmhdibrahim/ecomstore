import classes from "../../assets/styles/partials/product.module.scss";

import {cartActions} from "../../store";
import {useDispatch} from "react-redux";
import {useState} from "react";

const Product = (props) => {
    const dispatch = useDispatch();
    const [showAddBtn, setShowAddBtn] = useState(true);

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
        setShowAddBtn(false);
    }

    const removeToCartHandler = () => {
        dispatch(cartActions.removeFromCart({
            item: {
                id: props.id,
            },
        }));
        setShowAddBtn(true);
    }

    return (
        <div className={classes.productBlock}>
            <img src={props.image}/>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <p>{props.smallDescription}</p>
                <div className={classes.price}>{props.price}$</div>
                {showAddBtn &&
                <button className={classes.productBtn} onClick={addToCartHandler}>
                    ADD TO CART
                </button>
                }

                {!showAddBtn &&
                <button className={classes.productBtn} onClick={removeToCartHandler}>
                    REMOVE FROM CART
                </button>
                }
            </div>
        </div>
    );
}

export default Product;