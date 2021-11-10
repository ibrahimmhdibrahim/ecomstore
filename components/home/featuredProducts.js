import grid from "/assets/styles/layouts/grid/flexGrid.module.scss";
import classes from "/assets/styles/partials/featuredProducts.module.scss";
import Product from "../partials/product";

const FeaturedProducts = () => {
    return (
        <section className={classes.featuredProducts}>
            <h2>Features Products</h2>
            <div className={`${grid.containerFlex} container`}>

                <div className={grid.columnFlex}>
                    <Product />
                </div>

                <div className={grid.columnFlex}>
                    <Product />
                </div>

                <div className={grid.columnFlex}>
                    <Product />
                </div>

                <div className={grid.columnFlex}>
                    <Product />
                </div>

            </div>
        </section>
    );
}

export default FeaturedProducts;