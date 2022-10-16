const TopTextContain = ({ topText }) => {
  return (
    <div className="text-contain">
      <h1>Admin Dashboard</h1>
      <p>{topText ? topText : `Monitor blog`}</p>
    </div>
  );
};

export default TopTextContain;
