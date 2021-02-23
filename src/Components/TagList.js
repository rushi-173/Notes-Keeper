export default function TagList({ tagsList, tagSelected, setTagSelected }) {
  return (
    <div className="tglist-container">
      <h2>Filter by Tag</h2>
      <div className="taglist">
        {tagsList.map((tag) => {
          return (
            <button
              className="btn"
              onClick={() => {
                setTagSelected(tag);
              }}
              key={tag}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </div>
  );
}
