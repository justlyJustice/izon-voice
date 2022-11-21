export default process.env.NODE_ENV === "development"
  ? `http://localhost:8000`
  : `http://izonvoice.ng`;
