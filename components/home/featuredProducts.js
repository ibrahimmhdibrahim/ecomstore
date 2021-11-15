import grid from "/assets/styles/layouts/grid/flexGrid.module.scss";
import classes from "/assets/styles/partials/featuredProducts.module.scss";
import Product from "../partials/product";
import {useEffect, useState} from "react";

const FeaturedProducts = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(async () => {
        const response = await fetch("/api/products", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const productsData = await response.json();
        setFeaturedProducts(productsData);
    }, [setFeaturedProducts]);


    const productsList = () => {
        return featuredProducts.map((product) => (
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