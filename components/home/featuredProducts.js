import grid from "/assets/styles/layouts/grid/flexGrid.module.scss";
import productClasses from "/assets/styles/partials/product.module.scss";
import classes from "/assets/styles/partials/featuredProducts.module.scss";

const FeaturedProducts = () => {
    return (
        <section className={classes.featuredProducts}>
            <h2>Features Products</h2>
            <div className={`${grid.containerFlex} container`}>

                <div className={grid.columnFlex}>
                    <div className={productClasses.productBlock}>
                        <img src="https://via.placeholder.com/350x350" />
                        <div className={productClasses.content}>
                            <h3>The Amazing Watch</h3>
                            <p>Unique and great functionalities perfect for business usage</p>
                            <div className={productClasses.price}>89$</div>
                        </div>
                    </div>
                </div>

                <div className={grid.columnFlex}>
                    <div className={productClasses.productBlock}>
                        <img src="https://via.placeholder.com/350x350" />
                        <div className={productClasses.content}>
                            <h3>The Amazing Watch</h3>
                            <p>Unique and great functionalities perfect for business usage</p>
                            <div className={productClasses.price}>89$</div>
                        </div>
                    </div>
                </div>

                <div className={grid.columnFlex}>
                    <div className={productClasses.productBlock}>
                        <img src="https://via.placeholder.com/350x350" />
                        <div className={productClasses.content}>
                            <h3>The Amazing Watch</h3>
                            <p>Unique and great functionalities perfect for business usage</p>
                            <div className={productClasses.price}>89$</div>
                        </div>
                    </div>
                </div>

                <div className={grid.columnFlex}>
                    <div className={productClasses.productBlock}>
                        <img src="https://via.placeholder.com/350x350" />
                        <div className={productClasses.content}>
                            <h3>The Amazing Watch</h3>
                            <p>Unique and great functionalities perfect for business usage</p>
                            <div className={productClasses.price}>89$</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default FeaturedProducts;