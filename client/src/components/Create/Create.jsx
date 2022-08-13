import React from 'react';
import './Create.css'
import Nav from '../Nav/Nav';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function Create () {

    const platforms = [
        "PC", "PlayStation 5", "PlayStation 4", "PlayStation 3", "PlayStation 2", "PlayStation", "Xbox One", "Xbox Series S/X", "Nintendo Switch", "iOS", "Android", "Nintendo 3DS", "Nintendo DS", "Nintendo DSi", "macOS", "Linux", "Xbox 360", "Xbox", "PS Vita", "PSP", "Wii U", "Wii", "GameCube", "Nintendo 64", "Game Boy Advance", "Game Boy Color", "Game Boy", "SNES", "NES", "Classic Macintosh", "Apple II", "Commodore / Amiga", "Atari 7800", "Atari 5200", "Atari 2600", "Atari Flashback", "Atari 8-bit", "Atari ST", "Atari Lynx", "Atari XEGS", "Genesis", "SEGA Saturn", "SEGA CD", "SEGA 32X", "SEGA Master System", "Dreamcast", "3DO", "Jaguar", "Game Gear", "Neo Geo", "Web"
    ];

    const genres = useSelector((state) => state.genres);

    const [create, setCreate] = useState({
        name: "",
        description: "",
        released: "",
        rating: 0,
        platforms: [],
        background_image: "",
        genres: []
    });

    function handleChange (e) {
        setCreate({
            ...create,
            [e.target.name]: e.target.value
        })
    };

    function handleChangeArray (e) {
        setCreate({
            ...create,
            [e.target.name]: [...new Set([...create.genres, e.target.value])]
        })

    }

    console.log(create);


    return (
        <div>
            <Nav></Nav>
            <form>
                <div>
                    <label>
                        Titulo del videojuego: 
                    </label>
                    <input 
                        type="text" 
                        placeholder='Título'
                        name='name'
                        onChange={(e) => handleChange(e)}
                        value={create.name}
                    />
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
                    />
                </div>
                <div>
                    <label>
                        Géneros:
                    </label>
                    <select onChange={(e) => handleChangeArray(e)} name='genres'>
                        {genres?.map((g) => {
                            return (
                                <option value={g.name} key={g.id}>{g.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div>
                    <label>
                        Plataformas:
                    </label>
                    <select onChange={(e) => handleChangeArray(e)} name='platforms'>
                        {platforms?.map((p, index) => {
                            return (
                                <option value={p} key={index}>{p}</option>
                            )
                        })}
                    </select>
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
                </div>
                <div>
                    <label>
                        Imagen
                    </label>
                    <input type="text" name="" id="" />
                    <input type="file" name="" id="" />
                </div>
                <div>
                    <input type="submit" value="submit" />
                </div>
            </form>
        </div>
    )
}