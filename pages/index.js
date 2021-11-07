import classes from "/assets/styles/pages/homePage.module.scss";
import MainSlider from "../components/home/mainSlider";
import CategoryList from "../components/home/categoryList";
import FeaturedCollection from "../components/home/featuredCollection";
import FeaturedProducts from "../components/home/featuredProducts";

function Home() {
    return (
        <div className={classes.homepage}>
            <MainSlider />
            <CategoryList />
            <FeaturedCollection />
            <FeaturedProducts />
        </div>
    );
}

export default Home;