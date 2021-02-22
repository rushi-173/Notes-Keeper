import { useState } from "react";
import "./NotesForm.css";
export default function NotesForm({ notesList, setNotesList, tagsList }) {
  const colorsList = ["#F48FB1", "#CE93D8", "#81D4FA", "#B2FF59", "#FFF59D"];
  const [noteColor, setNoteColor] = useState("#363636");
  const [noteTag, setNoteTag] = useState("none");
  const [titleInput, setTitleInput] = useState("");
  const [noteInput, setNoteInput] = useState("");

  function createNote() {
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
      />
      <label>Add Note : </label>
      <textarea
        rows="10"
        className="input"
        value={noteInput}
        onChange={(e) => {
          setNoteInput(e.target.value);
        }}
      />
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
            >
              {color}
            </option>
          );
        })}
      </select>
      <select
        className="input"
        onChange={(e) => {
          setNoteTag(e.target.value);
        }}
      >
        {tagsList.map((tag) => {
          return (
            <option className="btn" value={tag}>
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
