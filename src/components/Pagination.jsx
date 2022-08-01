import React from "react";

const  Pagination = ( props) => {
    const {totalPosts, paginate, currentPage} = props
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalPosts / 10 ); i++) {
        console.log(i)
        pageNumbers.push(i)
    }
    const onNext = () => {
        paginate(currentPage + 1);
    };

    const onPrevious = () => {
        paginate(currentPage - 1);
    };
    return (
        <nav>
            <ul className="pagination">
                <li><a onClick={onPrevious}  href="!#">&#10094; Previous</a></li>
                {pageNumbers.map(number => (
                    <li key={number} >
                        <a onClick={() => paginate(number)} href="!#" className={currentPage === number ? "active" : "disabled"}>{number} </a>
                    </li>
                ))}
                <li><a onClick={onNext} href="!#">Next &#10095;</a></li>
            </ul>
        </nav>
    )
}
export {Pagination}
