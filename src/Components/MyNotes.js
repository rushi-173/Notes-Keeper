import { useState } from "react";
import "./MyNotes.css";
import NotesForm from "./NotesForm";
import NotesListDisplay from "./NotesListDisplay";
import TagList from "./TagList";
const notesData = require("./data.js");
export default function MyNotes() {
  const [notesList, setNotesList] = useState(notesData);
  const [tagsList, setTagsList] = useState([
    "none",
    "Payment",
    "College",
    "NeogCamp"
  ]);
  const [tagInput, setTagInput] = useState("");
  const [tagSelected, setTagSelected] = useState("none");
  function tagChangeHandler(e) {
    setTagInput(e.target.value);
  }
  function addTag() {
    if (!tagsList.includes(tagInput)) {
      setTagsList([...tagsList, tagInput]);
    }
    setTagInput("");
  }
  return (
    <div className="MyNotes">
      <div className="taglist-manager">
        <TagList
          tagsList={tagsList}
          setTagSelected={setTagSelected}
          tagSelected={tagSelected}
        />
        <div className="tags-form">
          <label>Add Tag : </label>
          <input
            type="text"
            value={tagInput}
            className="input"
            onChange={tagChangeHandler}
          />
          <button className="input" onClick={addTag}>
            Add
          </button>
          <h2>Add New Tag</h2>
        </div>
      </div>
      <div className="notes-list">
        <h2>My Notes</h2>
        <NotesListDisplay
          notesList={notesList}
          setNotesList={setNotesList}
          tagSelected={tagSelected}
        />
      </div>
      <div className="notes-manager">
        <NotesForm
          tagsList={tagsList}
          notesList={notesList}
          setNotesList={setNotesList}
        />
      </div>
    </div>
  );
}
