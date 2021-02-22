import { useState } from "react";
import "./MyNotes.css";
import NotesForm from "./NotesForm";
import TagList from "./TagList";
const notesData = [
  {
    id: 1,
    title: "Rent Payment",
    note: "Paid Rs.2000 to milkman and paperboy. Now I have 500rs only.",
    ispinned: false,
    tag: "Payment",
    color: "#ff1744"
  }
];
export default function MyNotes() {
  const [notesList, setNotesList] = useState(notesData);
  const [tagsList, setTagsList] = useState([
    "none",
    "Payment",
    "College",
    "NeogCamp"
  ]);
  const [tagInput, setTagInput] = useState("");
  function tagChangeHandler(e) {
    setTagInput(e.target.value);
  }
  function addTag() {
    setTagsList([...tagsList, tagInput]);
    setTagInput("");
  }
  return (
    <div className="MyNotes">
      <div className="taglist-manager">
        <TagList tagsList={tagsList} setTagsList={setTagsList} />
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
      </div>
      <div className="notes-manager">
        <NotesForm tagsList={tagsList} setNotesList={setNotesList} />
      </div>
    </div>
  );
}
