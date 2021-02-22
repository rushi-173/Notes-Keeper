import { useState } from "react";
import "./MyNotes.css";
export default function MyNotes() {
  return (
    <div className="MyNotes">
      <div className="taglist">
        <div></div>
      </div>
      <div className="notes-list"></div>
      <div className="notes-manager">
        <div className="notes-form">
          <h2>Create A Note</h2>
          <label>Add Title : </label>
          <input type="text" className="input" />
          <label>Add Note : </label>
          <textarea rows="10" className="input" />
          <button className="input">Submit</button>
        </div>
      </div>
    </div>
  );
}
