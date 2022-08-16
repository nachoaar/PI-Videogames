import React from 'react';
import './Create.css'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { postVideogame } from '../../redux/actions';
import Header from '../Header/Header';

const validate = (create) => {
    let errors = {};
    if (!create.name) {
        errors.name = "El videojuego requiere un nombre";
    } else if (create.name.length < 3 ) {
        errors.name = "El nombre del videojuego debe contener al menos 3 caracteres";
    }
    if (!create.description) {
        errors.description = "El videojuego requiere una descripción";
    } else if (/[A-Za-z0-9.,;:!?()"'%-]+/.test(create.description) && create.description.length < 20) {
        errors.description = "La descripción debe contener al menos 20 caracteres";
    }
    if (!create.platforms) {
        errors.platforms = "El videojuego requiere al menos una plataforma";
    } else if (create.platforms.length === 0) {
        errors.platforms = "El videojuego requiere al menos una plataforma";
    }
    if (!create.genres) {
        errors.genres = "El videojuego requiere al menos un género";
    } else if (create.genres.length === 0) {
        errors.genres = "El videojuego requiere al menos un género";
    }
    if (!create.background_image) {
        errors.background_image = "El videojuego requiere una imagen";
    } else if (!/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#()?&//=]*)/.test(create.background_image)) {
        errors.background_image = "El videojuego requiere una url valida";
    }
    return errors;
}

export default function Create () {

    const platforms = [
        "PC", "PlayStation 5", "PlayStation 4", "PlayStation 3", "PlayStation 2", "PlayStation", "Xbox One", "Xbox Series S/X", "Nintendo Switch", "iOS", "Android", "Nintendo 3DS", "Nintendo DS", "Nintendo DSi", "macOS", "Linux", "Xbox 360", "Xbox", "PS Vita", "PSP", "Wii U", "Wii", "GameCube", "Nintendo 64", "Game Boy Advance", "Game Boy Color", "Game Boy", "SNES", "NES", "Classic Macintosh", "Apple II", "Commodore / Amiga", "Atari 7800", "Atari 5200", "Atari 2600", "Atari Flashback", "Atari 8-bit", "Atari ST", "Atari Lynx", "Atari XEGS", "Genesis", "SEGA Saturn", "SEGA CD", "SEGA 32X", "SEGA Master System", "Dreamcast", "3DO", "Jaguar", "Game Gear", "Neo Geo", "Web"
    ];

    const history = useHistory();
    const dispatch = useDispatch();
    const videogames = useSelector((state) => state.videogames);
    const genres = useSelector((state) => state.genres);

    const [errors, setErrors] = useState({});
    const [create, setCreate] = useState({
        name: "",
        description: "",
        released: "",
        rating: 0,
        platforms: [],
        background_image: "",
        genres: []
    });

    function handleSubmit (e) {
        if (videogames.find((v) => v.name.toLowerCase() === create.name.toLocaleLowerCase())) {
            alert("El videojuego ya existe");
            e.preventDefault();
        } else {
            e.preventDefault();
            setErrors(validate({
                ...create,
                [e.target.name]: e.target.value
            }));
            dispatch(postVideogame(create));
            alert("Videojuego creado con éxito");
            setCreate({
                name: "",
                description: "",
                released: "",
                rating: 0,
                platforms: [],
                background_image: "",
                genres: []
            });
            history.push('/videogames');
        }
    }

    function handleChange (e) {
        setCreate({
            ...create,
            [e.target.name]: e.target.value
        });
        setErrors(validate({
            ...create,
            [e.target.name]: e.target.value
        }));
    };

    function handleChangeArray (e) {
        setCreate({
            ...create,
            [e.target.name]: [...new Set([...create[e.target.name], e.target.value])]
        });
        setErrors(validate({
            ...create,
            [e.target.name]: [...create[e.target.name], e.target.value]
        }));
    };

    function deleteOption (e) {
        e.preventDefault();
        let filterOp = (create[e.target.name]).filter((o) => e.target.value !== o);
        setCreate({
            ...create,
            [e.target.name]: filterOp
        });
        setErrors(validate({
            ...create,
            [e.target.name]: filterOp
        }));
    };

    return (
        <div>
            <Header/>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>
                        Titulo: 
                    </label>
                    <input 
                        type="text" 
                        placeholder='Título'
                        name='name'
                        onChange={(e) => handleChange(e)}
                        value={create.name}
                        required
                    />
                    {errors.name && (
                        <p>{errors.name}</p>
                    )}
                </div>
                <div>
                    <label>
                        Descripcion:
                    </label>
                    <textarea
                        name='description'
                        onChange={(e) => handleChange(e)}
                        value={create.description}
                        placeholder='Descripción'
                        cols="30" 
                        rows="10"
                        required
                    />
                    {errors.description && (
                        <p>{errors.description}</p>
                    )}
                </div>
                <div>
                    <label>
                        Géneros:
                    </label>
                    <select onChange={(e) => handleChangeArray(e)} name='genres' required>
                        {genres?.map((g) => {
                            return (
                                <option value={g.name} key={g.id}>{g.name}</option>
                            )
                        })}
                    </select>
                    {errors.genres && (
                        <p>{errors.genres}</p>
                    )}
                    <ul>
                        {create.genres.map((g, index) => {
                            return (
                                <li key={index}>{g} <button value={g} name='genres' onClick={(e) => deleteOption(e)}>x</button></li>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <label>
                        Plataformas:
                    </label>
                    <select onChange={(e) => handleChangeArray(e)} name='platforms' required>
                        {platforms?.map((p, index) => {
                            return (
                                <option value={p} key={index}>{p}</option>
                            )
                        })}
                    </select>
                    {errors.platforms && (
                        <p>{errors.platforms}</p>
                    )}
                    <ul>
                        {create.platforms.map((p) => {
                            return (
                                <li key={p}>{p} <button value={p} name='platforms' onClick={(e) => deleteOption(e)}>x</button></li>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <label>
                        Fecha de lanzamiento
                    </label>
                    <input 
                        type="date" 
                        name="released" 
                        value={create.released}
                        onChange={(e) => handleChange(e)}
                        required
                    />
                </div>
                <div>
                    <label>
                        Rating
                    </label>
                    <input 
                        type="range"
                        name='rating'
                        value={create.rating}
                        onChange={(e) => handleChange(e)}
                        min="0" 
                        max="5"
                    />
                    <p>{create.rating}</p>
                </div>
                <div>
                    <label>
                        Imagen
                    </label>
                    <input 
                        type="text"
                        name="background_image"
                        onChange={(e) => handleChange(e)}
                        value={create.background_image}
                        placeholder="Ingresar url de imagen"
                        required
                    />
                    {errors.background_image && (
                        <p>{errors.background_image}</p>
                    )}
                </div>
                <div>
                    <button className='submit' type="submit" disabled={Object.keys(errors).length > 0}>Crear personaje</button>
                </div>
            </form>
        </div>
    )
}