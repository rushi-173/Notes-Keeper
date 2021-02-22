export default function TagList({ tagsList }) {
  return (
    <div className="taglist">
      <h2>Filter by Tag</h2>
      {tagsList.map((tag) => {
        return <button className="btn">{tag}</button>;
      })}
    </div>
  );
}
