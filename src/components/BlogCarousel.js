/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { checkCurrentEnv } from "utils/helpers";

const BlogCarousel = ({ posts }) => {
  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;

    return (
      <div
        className={className}
        onClick={onClick}
        style={{
          ...style,
          alignItems: "center",
          background: "#c4c4c4",
          borderRadius: "50%",
          display: "flex",
          height: "30px",
          justifyContent: "center",
          width: "30px",
        }}
      />
    );
  };

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;

    return (
      <div
        className={className}
        onClick={onClick}
        style={{
          ...style,
          alignItems: "center",
          background: "#c4c4c4",
          borderRadius: "50%",
          display: "flex",
          height: "30px",
          justifyContent: "center",
          width: "30px",
        }}
      />
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <>
      <Slider {...settings}>
        {posts && posts !== []
          ? posts.map((post) => (
              <div key={post.title} className="blog-slider">
                <img
                  className="blog-image"
                  src={post.image || post.urlToImage}
                  alt={post.image || post.urlToImage}
                />

                <div className="text-div">
                  <h2 className="carousel-text">
                    <Link
                      style={{ color: "black" }}
                      to={`/${checkCurrentEnv(post)}`}
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <hr className="slide-rule" />

                  <div>
                    <p className="slide-para">{post.description}</p>
                  </div>
                </div>
              </div>
            ))
          : null}
      </Slider>
    </>
  );
};

export default BlogCarousel;
