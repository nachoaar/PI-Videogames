import React, { useState } from "react";
import './Pagination.css';

export default function Pagination ({page, setPage, max}) {

    const numbers = [];

    for (let i = 1; i <= max; i++) {
        numbers.push(i);
    }

    console.log("numero de paginado: ", page);
    console.log(numbers.length);

    const [input, setInput] = useState(1);

    const nextPage = () => {
        setInput(parseInt(input + 1));
        setPage(parseInt(page + 1));
    }

    const prevPage = () => {
        setInput(parseInt(input - 1));
        setPage(parseInt(page - 1));
    }

    return (
        <div className="pagination">
            <button className="btn" disabled={page === 1 || page < 1} onClick={prevPage}>&laquo;</button>
            <ul>
                {numbers?.map((p) => {
                    return (
                        <li className="page" onClick={() => setPage(p)} key={p}>
                            <span>{p}</span>
                        </li>
                    )
                })}
            </ul>
            <button className="btn" disabled={page === max || page > max} onClick={nextPage}>&raquo;</button>
        </div>
    )
}