import { Link } from "react-router-dom";
import Slider from "react-slick";

const TrendingPostsSlide = ({ posts }) => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="trends">
      <Slider {...settings}>
        <div className="trend">
          <h2>Hello World</h2>
        </div>

        <div className="trend">
          <h2>Hello World</h2>
        </div>

        <div className="trend">
          <h2>Hello World</h2>
        </div>

        <div className="trend">
          <h2>Hello World</h2>
        </div>
      </Slider>
    </div>
  );
};

export default TrendingPostsSlide;
