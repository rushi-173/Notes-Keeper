import "./Navbar.css";

export default function Navbar({ setNavItem }) {
  return (
    <div className="Navbar">
      <div className="nav-logo">
        <h2 className="nav-title">Notes Keeper</h2>
        <hr color="" width="180px" />
        <p
          style={{
            fontFamily: "Lora",
            fontSize: "0.8rem",
            letterSpacing: "2px"
          }}
        >
          The One You Believe.
        </p>
      </div>
      <div className="container nav-menu">
        <button className="btn btn-nav" onClick={() => setNavItem("mynotes")}>
          MyNotes
        </button>
        <button className="btn btn-nav" onClick={() => setNavItem("about")}>
          About
        </button>
      </div>
    </div>
  );
}
