import classes from "/assets/styles/pages/homePage.module.scss";
import MainSlider from "../components/home/mainSlider";
import CategoryList from "../components/home/categoryList";

function Home() {
    return (
        <div className={classes.homepage}>
            <MainSlider />
            <CategoryList />
        </div>
    );
}

export default Home;