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
  const [noteColor, setNoteColor] = useState("#18FFFF");
  const [noteTag, setNoteTag] = useState("none");
  const [titleInput, setTitleInput] = useState("");
  const [noteInput, setNoteInput] = useState("");

  function createNote() {
    if (noteInput !== "" && titleInput !== "") {
      setNotesList([
        ...notesList,
        {
          id: Date.now(),
          title: titleInput,
          note: noteInput,
          ispinned: false,
          tag: noteTag,
          color: noteColor
        }
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
        value={titleInput}
        onChange={(e) => {
          setTitleInput(e.target.value);
        }}
        required
      />
      <span>{titleInput !== "" ? "" : "title can't be empty*"}</span>
      <label>Add Note : </label>
      <textarea
        rows="10"
        className="input"
        value={noteInput}
        onChange={(e) => {
          setNoteInput(e.target.value);
        }}
      />
      <span>{noteInput !== "" ? "" : "note can't be empty*"}</span>
      <label>Select Color : </label>
      <select
        style={{ backgroundColor: noteColor, color: "white" }}
        className="input"
        onChange={(e) => {
          setNoteColor(e.target.value);
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
          setNoteTag(e.target.value);
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
