const TopTextContain = ({ topText, onClickIcon }) => {
  return (
    <>
      <div className="text-contain">
        <i className="fa-solid fa-bars" onClick={onClickIcon}></i>

        <div>
          <h1>Admin Dashboard</h1>
          <p>{topText ? topText : `Monitor blog`}</p>
        </div>
      </div>
    </>
  );
};

export default TopTextContain;
