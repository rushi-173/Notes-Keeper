export default function TagList({ tagsList, tagSelected, setTagSelected }) {
  return (
    <div>
      <h2>Filter by Tag</h2>
      <div className="taglist">
        {tagsList.map((tag) => {
          return (
            <button
              className="btn"
              onClick={() => {
                setTagSelected(tag);
              }}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </div>
  );
}
