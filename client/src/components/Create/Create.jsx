import React from 'react';
import './Create.css'
import Nav from '../Nav/Nav';

export default function Create () {
    return (
        <div>
            <Nav></Nav>
            <form>
                <div>
                    <label>
                        Nombre: 
                    </label>
                    <input type="text" />
                </div>
                <div>
                    <label>
                        Descripcion:
                    </label>
                    <textarea name="" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <label>
                        Plataformas:
                    </label>
                    <select name="" id="">
                        <option value="a">a</option>
                    </select>
                </div>
            </form>
        </div>
    )
}