import classes from "/assets/styles/pages/homePage.module.scss";
import MainSlider from "../components/home/mainSlider";



function Home(props) {
    return (
        <div className={classes.homepage + " container"}>
            <MainSlider />
        </div>
    );
}

export default Home;