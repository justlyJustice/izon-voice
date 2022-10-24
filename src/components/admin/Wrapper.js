import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import TopTextContain from "./TopTextContain";

const DashboardWrapper = ({ children, topText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showtopBtn, setShowTopBtn] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScrollVisibility = () => {
      document.documentElement.scrollTop > 400
        ? setShowTopBtn(true)
        : setShowTopBtn(false);
    };

    document.addEventListener(`scroll`, handleScrollVisibility);

    return () => {
      document.removeEventListener(`scroll`, handleScrollVisibility);
    };
  }, []);

  useEffect(() => {
    sessionStorage.setItem("isOpen", isOpen);
  }, [isOpen]);

  return (
    <section className="dashboard">
      <Sidebar isOpen={isOpen} handleClose={handleCloseMenu} />

      <div className="adm-side-content">
        <TopTextContain
          topText={topText}
          onClickIcon={handleClick}
          isOpen={isOpen}
        />

        {children}

        <p className="copy-text">Copyright &copy; Izon Voice</p>

        <button
          className={`scrl-top-btn ${showtopBtn ? `show-scrl-btn` : ``}`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <i className="fa-solid fa-chevron-up"></i>
        </button>
      </div>
    </section>
  );
};

export default DashboardWrapper;
