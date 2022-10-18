import Sidebar from "./Sidebar";
import TopTextContain from "./TopTextContain";

const DashboardWrapper = ({ children, topText }) => {
  return (
    <section className="dashboard">
      <Sidebar />

      <div className="adm-side-content">
        <TopTextContain topText={topText} />

        {children}
      </div>
    </section>
  );
};

export default DashboardWrapper;
