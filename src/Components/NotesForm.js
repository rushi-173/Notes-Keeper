import { useState } from "react";
import "./NotesForm.css";
export default function NotesForm({ notesList, setNotesList, tagsList }) {
  const colorsList = [
    "#18FFFF",
    "#F48FB1",
    "#CE93D8",
    "#81D4FA",
    "#B2FF59",
    "#FFF59D"
  ];
  // const [noteColor, setNoteColor] = useState("#18FFFF");
  // const [noteTag, setNoteTag] = useState("none");
  const [currentInput, setCurrentInput] = useState({
    title: "",
    note: "",
    ispinned: false,
    tag: "none",
    color: "#18FFFF"
  });
  // const [titleInput, setTitleInput] = useState("");
  // const [noteInput, setNoteInput] = useState("");

  function createNote() {
    if (currentInput.note !== "" && currentInput.title !== "") {
      setNotesList([
        {
          id: Date.now(),
          ...currentInput
        },
        ...notesList
      ]);
    }
  }
  return (
    <div className="notes-form">
      <h2>Create A Note</h2>
      <label>Add Title : </label>
      <input
        type="text"
        className="input"
        value={currentInput.title}
        onChange={(e) => {
          setCurrentInput({ ...currentInput, title: e.target.value });
          // setTitleInput(e.target.value);
        }}
        required
      />
      <span>{currentInput.title !== "" ? "" : "title can't be empty*"}</span>
      <label>Add Note : </label>
      <textarea
        rows="10"
        className="input"
        value={currentInput.note}
        onChange={(e) => {
          setCurrentInput({ ...currentInput, note: e.target.value });
          // setNoteInput(e.target.value);
        }}
      />
      <span>{currentInput.note !== "" ? "" : "note can't be empty*"}</span>
      <label>Select Color : </label>
      <select
        style={{ backgroundColor: currentInput.color, color: "white" }}
        className="input"
        onChange={(e) => {
          setCurrentInput({ ...currentInput, color: e.target.value });
          // setNoteColor(e.target.value);
        }}
      >
        {colorsList.map((color) => {
          return (
            <option
              className="btn"
              value={color}
              style={{ backgroundColor: color }}
              key={color}
            >
              {color}
            </option>
          );
        })}
      </select>
      <label>Select Tag : </label>
      <select
        className="input"
        onChange={(e) => {
          setCurrentInput({ ...currentInput, tag: e.target.value });
          // setNoteTag(e.target.value);
        }}
      >
        {tagsList.map((tag) => {
          return (
            <option className="btn" key={tag} value={tag}>
              {tag}
            </option>
          );
        })}
      </select>
      <button className="input" onClick={createNote}>
        Submit
      </button>
    </div>
  );
}
