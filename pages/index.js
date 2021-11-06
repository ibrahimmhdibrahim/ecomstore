import classes from "/assets/styles/pages/homePage.module.scss";
import MainSlider from "../components/home/mainSlider";
import CategoryList from "../components/home/categoryList";
import FeaturedCollection from "../components/home/featuredCollection";

function Home() {
    return (
        <div className={classes.homepage}>
            <MainSlider />
            <CategoryList />
            <FeaturedCollection />
        </div>
    );
}

export default Home;