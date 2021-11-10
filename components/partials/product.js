import classes from "../../assets/styles/partials/product.module.scss";

const addToCartHandler = () => {
    console.log("ADDED TO CART");
}

const Product = () => {
    return (
        <div className={classes.productBlock}>
            <img src="https://via.placeholder.com/350x350" />
            <div className={classes.content}>
                <h3>The Amazing Watch</h3>
                <p>Unique and great functionalities perfect for business usage</p>
                <div className={classes.price}>89$</div>
                <button className={classes.productBtn} onClick={addToCartHandler}>
                    ADD TO CART
                </button>
            </div>
        </div>
    );
}

export default Product;