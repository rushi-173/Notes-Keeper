import { useState } from "react";
import "./MyNotes.css";
import NotesForm from "./NotesForm";
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
  return (
    <div className="MyNotes">
      <div className="taglist">
        <div></div>
      </div>
      <div className="notes-list"></div>
      <div className="notes-manager">
        <NotesForm tagsList={tagsList} setNotesList={setNotesList} />
      </div>
    </div>
  );
}
