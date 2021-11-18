import classes from "/assets/styles/pages/homePage.module.scss";
import MainSlider from "../components/home/mainSlider";
import CategoryList from "../components/home/categoryList";
import FeaturedCollection from "../components/home/featuredCollection";
import FeaturedProducts from "../components/home/featuredProducts";

function Home(props) {
    return (
        <div className={classes.homepage}>
            <MainSlider />
            <CategoryList />
            <FeaturedCollection />
            <FeaturedProducts products={props.products} />
        </div>
    );
}

export default Home;

export const getServerSideProps = async () => {
    const response = await fetch("http://localhost:3000/api/products", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const products = await response.json();

    return {
        props: {
            products
        }
    };
};