import { Link } from "react-router-dom";

const CategoryLinksSlide = () => {
  return (
    <div>
      <div className="button-groups">
        <Link to="/category/agriculture" className="button">
          Agriculture
        </Link>

        <Link className="button" to="/category/culture">
          Culture
        </Link>

        <Link className="button" to="/category/finance">
          Finance
        </Link>

        <Link className="button" to="/category/politics">
          Politics
        </Link>

        <Link className="button" to="/category/religion">
          Religion
        </Link>

        <Link className="button" to="/category/social">
          Social
        </Link>

        <Link className="button" to="/category/sports">
          Sports
        </Link>
      </div>
    </div>
  );
};

export default CategoryLinksSlide;
