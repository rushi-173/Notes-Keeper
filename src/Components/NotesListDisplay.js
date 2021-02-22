import "./NotesListDisplay.css";

export default function NotesListDisplay({
  notesList,
  setNotesList,
  tagSelected = "none"
}) {
  function deleteNote(note) {
    let templist = notesList.filter((item) => {
      return item.id !== note.id;
    });
    setNotesList(templist);
  }
  function pinNote(note) {
    setNotesList((prevList) => [
      ...prevList.map((item) => {
        if (item.id === note.id) {
          item.ispinned = !item.ispinned;
        }
        return item;
      })
    ]);
  }
  function showNotes() {
    notesList.map((note) => {
      return (
        <div className="note-card" style={{ backgroundColor: note.color }}>
          <h3>{note.title}</h3>
          <p>{note.note}</p>
          <div>
            <button onClick={() => pinNote(note)}>
              {note.ispinned ? "unpin" : "pin"}
            </button>
            <button
              onClick={() => {
                deleteNote(note);
              }}
            >
              delete
            </button>
          </div>
        </div>
      );
    });
  }
  //   } else {
  //     notesList.map((note) => {
  //       if (note.tag === tagSelected) {
  //         return (
  //           <div className="note-card" style={{ backgroundColor: note.color }}>
  //             <h3>{note.title}</h3>
  //             <p>{note.note}</p>
  //             <div>
  //               <button onClick={() => pinNote(note)}>
  //                 {note.ispinned ? "unpin" : "pin"}
  //               </button>
  //               <button
  //                 onClick={() => {
  //                   deleteNote(note);
  //                 }}
  //               >
  //                 delete
  //               </button>
  //             </div>
  //           </div>
  //         );
  //       }
  //       return null;
  //     });
  //   }
  // }
  return <div className="noteslist-display">{showNotes()}</div>;
}
