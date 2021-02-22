import MyNotes from "./MyNotes";
import About from "./About";
import "./AppDisplay.css";

export default function AppDisplay({ navItem }) {
  if (navItem === "mynotes") return <MyNotes />;
  else if (navItem === "about") return <About />;
  else
    return (
      <div>
        <h1>404 Page Not Found</h1>
      </div>
    );
}
