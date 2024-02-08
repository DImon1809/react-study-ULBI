export default function Pagination({ setPage, pageArray, page }) {
  return (
    <div className="page-wrapper">
      {pageArray.map((_l) => (
        <span
          key={_l}
          onClick={() => setPage(_l)}
          className={_l === page ? "page page-current" : "page"}
        >
          {_l}
        </span>
      ))}
    </div>
  );
}
