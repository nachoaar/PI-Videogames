import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchByName } from '../../../redux/actions';
import s from './SearchBar.module.css';

export default function SearchBar ({setPage}) {

    const [input, setInput] = useState({
        search: ''
    })

    const dispatch = useDispatch();

    function handleChange (e) {
        setInput({
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit (e) {
        e.preventDefault();
        dispatch(searchByName(input.search));
        setPage(1);
        setInput({
            search: ''
        })
    }

    // function handleReturn (e) {
    //     e.preventDefault();
    //     dispatch(returnAll());
    //     setPage(1);
    // }

    return (
        <div className={s.search}>
            <form className={s.form} onSubmit={(e) => handleSubmit(e)}>
                <label for="search">
                    <input 
                        type="search"
                        className={s.input}
                        required
                        autocomplete="off"
                        name="search"
                        placeholder="Type your videogame" 
                        onChange={(e) => handleChange(e)}
                        value={input.search}
                    />
                    <div className={s.fancy_bg}></div>
                    <div class={s.search}>
                        <svg viewBox="0 0 24 24" aria-hidden="true" class="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr">
                            <g>
                                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                            </g>
                        </svg>
                    </div>
                </label>
            </form>
        </div>
    )
}

