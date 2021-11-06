import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const MainSlider = () => {

    const renderSlides = () => {
        return [1, 2, 3].map(num => (
            <div className="slide">
                <img src="https://via.placeholder.com/1440x500"/>
            </div>
        ));
    }

    return (
        <Slider className="mainSlider" dots={true}>
            {renderSlides()}
        </Slider>
    );
}

export default MainSlider;