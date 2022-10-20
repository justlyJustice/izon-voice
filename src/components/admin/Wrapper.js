import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import TopTextContain from "./TopTextContain";

const DashboardWrapper = ({ children, topText }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setIsOpen(JSON.parse(sessionStorage.getItem("isOpen")));
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
      </div>
    </section>
  );
};

export default DashboardWrapper;
