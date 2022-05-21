import { useNavigate } from "react-router-dom";

const CategoryButtonsSlide = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="button-groups">
        <button
          onClick={() => {
            navigate("/category/fashion");
          }}
        >
          Fashion
        </button>

        <button
          onClick={() => {
            navigate("/category/politics");
          }}
        >
          Politics
        </button>

        <button
          onClick={() => {
            navigate("/category/ICT");
          }}
        >
          ICT
        </button>

        <button
          onClick={() => {
            navigate("/category/health");
          }}
        >
          Health
        </button>

        <button
          onClick={() => {
            navigate("/category/entertainment");
          }}
        >
          Entertainment
        </button>

        <button
          onClick={() => {
            navigate("/category/sports");
          }}
        >
          Sports
        </button>

        <button
          onClick={() => {
            navigate("/category/articles");
          }}
        >
          Articles
        </button>
      </div>
    </div>
  );
};

export default CategoryButtonsSlide;
