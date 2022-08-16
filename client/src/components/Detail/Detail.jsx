import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { deleteCache, getDetail } from '../../redux/actions/index.js';
import Loader from '../Loader/Loader.jsx';
import Header from '../Header/Header.jsx';
// import imagen from '../../../../videogame.png';


export default function Detail () {

    const dispatch = useDispatch();
    const { id } = useParams();
    
    useEffect(() => {
        dispatch(getDetail(id));
        return () => {
            dispatch(deleteCache());
        }
    },[dispatch, id])
    
    const detail = useSelector((state) => state.details);

    return (
        <div>
            <Header />
            {Object.keys(detail).length === 0 ? <Loader/> : (
                <div>
                    <img src={detail.background_image} alt="Imagen de videojuego"/>
                    <h3>{detail.name}</h3>
                    <p>{detail.description}</p>
                    <p>{detail.rating}</p>
                    <p>{detail.released}</p>
                </div>
            )}
        </div>
    )
}