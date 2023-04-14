import React from "react";

type PaginationProps = {
    numberPage: number,
    SetPage: (page:number) => void,
    elementsLen: number,
    elementCount: number
}

export const Pagination: React.FC<PaginationProps> = ({numberPage, SetPage, elementsLen, elementCount}) => {
    return <ul className="pagination pt-4 pb-0 m-0">
    {numberPage !== 1 ? (
      <>
        <li className="page-item">
          <p
            onClick={() => SetPage(numberPage - 1)}
            className="page-link text-green m-0"
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
          </p>
        </li>

        <li className="page-item">
          <p
            className="page-link text-green m-0"
            onClick={() => SetPage(numberPage - 1)}
          >
            {numberPage - 1}
          </p>
        </li>
      </>
    ) : (
      ""
    )}
    {elementsLen > elementCount ? (
      <li className="page-item">
        <p className="page-link text-green bg-gray fw-bold m-0">{numberPage}</p>
      </li>
    ) : (
      ""
    )}
    {numberPage < elementsLen / elementCount ? (
      <>
        <li className="page-item">
          <p
            className="page-link text-green m-0"
            onClick={() => SetPage(numberPage + 1)}
          >
            {numberPage + 1}
          </p>
        </li>
        <li className="page-item">
          <p
            onClick={() => SetPage(numberPage + 1)}
            className="page-link text-green m-0"
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
          </p>
        </li>
      </>
    ) : (
      ""
    )}
  </ul>
}