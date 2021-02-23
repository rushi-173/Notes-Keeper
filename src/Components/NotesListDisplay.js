import "./NotesListDisplay.css";

export default function NotesListDisplay({
  notesList,
  setNotesList,
  tagSelected = "none",
  ispinnedprop = true
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
  function NoteCard({ note }) {
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
  }

  return (
    <div className="noteslist-display">
      {notesList.map((note) => {
        if (note.ispinned === ispinnedprop && tagSelected === "none") {
          return <NoteCard note={note} key={note.id} />;
        }
        return null;
      })}

      {notesList.map((note) => {
        if (
          note.ispinned === ispinnedprop &&
          tagSelected !== "none" &&
          note.tag === tagSelected
        ) {
          return <NoteCard note={note} key={note.id} />;
        }
        return null;
      })}
    </div>
  );
}
