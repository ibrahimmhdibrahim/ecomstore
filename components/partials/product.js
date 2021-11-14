import classes from "../../assets/styles/partials/product.module.scss";

const addToCartHandler = () => {
    console.log("ADDED TO CART");
}

const Product = (props) => {
    return (
        <div className={classes.productBlock}>
            <img src={props.image} />
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