import style from "./Paginado.module.css";

const Pagination = ({ thisPage, totalPages, pageChange }) => {
  const handlePrePage = () => {
    if (thisPage > 1) {
      pageChange(thisPage - 1);
    }
  };

  const handleNextPage = () => {
    if (thisPage < totalPages) {
      pageChange(thisPage + 1);
    }
  };
  const handleFirstPage = () => {
    pageChange(1);
  };
  const handleLastPage = () => {
    pageChange(totalPages);
  };

  const handlePageOnClick = (page) => {
    pageChange(page);
  };

  const visiblePageCount = 9;
  const startPage = Math.max(1, thisPage - Math.floor(visiblePageCount / 2));
  const endPage = Math.min(startPage + visiblePageCount - 1, totalPages);

  const showPrevButton = thisPage > 1;
  const showNextButton = thisPage < totalPages;

  return (
    <div>
      <button onClick={handleFirstPage} className={style.pag}>
        &lt;&lt;
      </button>
      {showPrevButton && <button onClick={handlePrePage}>&lt;</button>}
      {Array.from(
        { length: endPage - startPage + 1 },
        (_, index) => startPage + index
      ).map((page) => (
        <button
          key={page}
          onClick={() => handlePageOnClick(page)}
          disabled={thisPage === page}
        >
          {page}
        </button>
      ))}
      {showNextButton && (
        <button onClick={handleNextPage} className={style.pag}>
          &gt;
        </button>
      )}
      <button onClick={handleLastPage} className={style.pag}>
        &gt;&gt;
      </button>
    </div>
  );
};

export default Pagination;
