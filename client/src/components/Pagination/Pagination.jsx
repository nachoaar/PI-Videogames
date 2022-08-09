import React, { useState } from "react";

export default function Pagination ({page, setPage, max}) {

    const numbers = [];

    for (let i = 1; i <= max; i++) {
        numbers.push(i);
    }

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
        <div>
            <button disabled={page === 1 || page < 1} onClick={prevPage}>Atrás</button>
            <nav>
                <ul>
                    {numbers?.map((p) => {
                        return (
                            <li key={p}>
                                <a onClick={() => setPage(p)}>{p}</a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <button disabled={page === max || page > max} onClick={nextPage}>Siguiente</button>
        </div>
    )
}