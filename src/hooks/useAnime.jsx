import { useState, useEffect } from 'react';
import { reqAnimeList, reqAnimeDetails } from '../services/anime';

export const useAnime = () => {
    const [animeList, setAnimeList] = useState([]);
    const [animeDetails, setAnimeDetails] = useState(null);
    const [page, setPage] = useState(0);

    // Función para cargar la lista paginada de animes
    useEffect(() => {
        reqAnimeList(page).then(data => setAnimeList(data));
    }, [page]);

    // Función para buscar un anime por nombre
    const searchAnime = (animeTitle) => {
        reqAnimeDetails(animeTitle).then(data => setAnimeDetails(data));
    };

    const clearSearch = () => {
        setAnimeDetails(null); // Limpia los detalles para volver al álbum
    };

    return { animeList, animeDetails, searchAnime, setPage, page, clearSearch };
};



