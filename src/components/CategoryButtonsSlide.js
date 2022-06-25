import { Link } from "react-router-dom";

const CategoryLinksSlide = () => {
  return (
    <div>
      <div className="button-groups">
        <Link to="/category/fashion" className="button">
          Fashion
        </Link>

        <Link className="button" to="/category/politics">
          Politics
        </Link>

        <Link className="button" to="/category/ICT">
          ICT
        </Link>

        <Link className="button" to="/category/health">
          Health
        </Link>

        <Link className="button" to="/category/entertainment">
          Entertainment
        </Link>

        <Link className="button" to="/category/sports">
          Sports
        </Link>

        <Link className="button" to="/category/articles">
          Articles
        </Link>
      </div>
    </div>
  );
};

export default CategoryLinksSlide;
