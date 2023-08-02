import style from "./Paginado.module.css";

const Pagination = ({ thisPage, totalPages, pageChange }) => {
  const handlePrePage = () => {
    //!pre page
    if (thisPage > 1) {
      pageChange(thisPage - 1);
    }
  };

  const handleNextPage = () => {
    //!next page
    if (thisPage < totalPages) {
      pageChange(thisPage + 1);
    }
  };
  const handleFirstPage = () => {
    //!first page
    pageChange(1);
  };
  const handleLastPage = () => {
    //!last page
    pageChange(totalPages);
  };

  const handlePageOnClick = (page) => {
    //!Select page
    pageChange(page);
  };

  const visiblePageCount = 5; //! cantidad de numeros disponibles en mi paginado
  const startPage = Math.max(1, thisPage - Math.floor(visiblePageCount / 2)); //! compara numeros para decidir por donde empieza
  const endPage = Math.min(startPage + visiblePageCount - 1, totalPages); //! compara numeros para decidir donde termina

  const showPrevButton = thisPage > 1;
  const showNextButton = thisPage < totalPages;

  return (
    <div className={style.pagDiv}>
      <button onClick={handleFirstPage} className={style.pag}>
        &lt;&lt;
      </button>
      {showPrevButton && <button onClick={handlePrePage}>&lt;</button>}
      {Array.from(
        //!crea un array a partir de un objeto que creamos pasandole las propiedades endPage y startPage
        { length: endPage - startPage + 1 },
        (_, index) => startPage + index
      ).map(
        (
          page //! Devuelve los botones correspondientes
        ) => (
          <button
            key={page}
            onClick={() => handlePageOnClick(page)}
            disabled={thisPage === page}
          >
            {page}
          </button>
        )
      )}
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
