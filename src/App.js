import "./styles.css";
import Navbar from "./Components/Navbar";
import AppDisplay from "./Components/AppDisplay";
import { useState } from "react";

export default function App() {
  const [navItem, setNavItem] = useState("mynotes");

  return (
    <div className="App">
      <Navbar setNavItem={setNavItem} />
      <AppDisplay navItem={navItem} />
    </div>
  );
}
