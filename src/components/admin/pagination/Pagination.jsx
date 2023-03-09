import ChevronRightIcon from "@/components/icons/ChevronRightIcon";
import { usePagination } from "@/hooks/usePagination";
import classNames from "classnames";


function Pagination({
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
}){
  
    const paginationRange = usePagination({
      currentPage,
      totalCount,
      siblingCount,
      pageSize
    });
  
    if (currentPage === 0 || paginationRange.length < 2) {
      return null;
    }
  
    const onNext = () => {
      onPageChange(currentPage + 1);
    };
  
    const onPrevious = () => {
      onPageChange(currentPage - 1);
    };
  
    let lastPage = paginationRange[paginationRange.length - 1];
    return (
      <ul
        className={classNames('flex cursor-pointer text-gray-600 bg-slate-100 rounded', { [className]: className })}
      >
        <li
          className={classNames('p-2 px-3 hover:bg-slate-200', {
            "text-gray-600": currentPage === 1
          })}
          onClick={onPrevious}
        >
          <div className="arrow left" />
        </li>
        {paginationRange.map(pageNumber => {
          if (pageNumber === "...") {
            return <li className="p-2 px-3 hover:bg-slate-200 dots">&#8230;</li>;
          }
  
          return (
            <li
              className={classNames('p-2 px-3 hover:bg-slate-200', {
                "text-blue-800": pageNumber === currentPage
              })}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
        <li
          className={classNames('p-2 px-3 hover:bg-slate-200', {
            "text-gray-600": currentPage === lastPage
          })}
          onClick={onNext}
        >
          <ChevronRightIcon />
        </li>
      </ul>
    );
};


export default Pagination;