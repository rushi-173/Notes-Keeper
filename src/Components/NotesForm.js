import { useState } from "react";
import "./NotesForm.css";
export default function NotesForm({ setNotesList, tagsList }) {
  const colorsList = ["#363636", "#880E4F", "#4A148C", "#1A237E", "#BF360C"];
  const [noteColor, setNoteColor] = useState("#363636");
  const [noteTag, setNoteTag] = useState("none");

  function createNote() {}
  return (
    <div className="notes-form">
      <h2>Create A Note</h2>
      <label>Add Title : </label>
      <input type="text" className="input" />
      <label>Add Note : </label>
      <textarea rows="10" className="input" />
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
