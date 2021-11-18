import grid from "/assets/styles/layouts/grid/flexGrid.module.scss";
import classes from "/assets/styles/partials/featuredProducts.module.scss";
import Product from "../partials/product";

const FeaturedProducts = (props) => {
    const productsList = () => {
        return props.products.map((product) => (
            <div key={product.id} className={grid.columnFlex}>
                <Product id={product.id} title={product.name} smallDescription={product.smallDescription} price={product.price} image={product.image} />
            </div>
        ));
    }

    return (
        <section className={classes.featuredProducts}>
            <h2>Features Products</h2>
            <div className={`${grid.containerFlex} container`}>
                {productsList()}
            </div>
        </section>
    );
}
export default FeaturedProducts;