export default function Footer() {
  return (
    <footer
      className="footer mt-auto py-3 bg-light  "
      style={{
        bottom: "0",
        height: "100px",
        position: "absolute",
        width: "100%",
        textAlign: "center",
      }}
    >
      <div className="container">
        <span className="text-dark">
          &copy; 2021 RMVVM - React Model-View-ViewModel
        </span>
      </div>
    </footer>
  );
}
