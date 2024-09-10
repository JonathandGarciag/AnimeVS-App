import React from 'react';
import { useAnime } from '../hooks/useAnime';
import { SearchBar } from './searchAnime';
import { AlbumContainer } from './ContainerAnime';

export const AnimeApp = () => {
    const { animeList, animeDetails, searchAnime, setPage, page, clearSearch } = useAnime();

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4" style={{ backgroundColor: '#FFA500', padding: '15px' }}>Buscador de Anime</h1>

            <div style={{ backgroundColor: '#333333', padding: '15px' }}>
                <SearchBar onSearch={searchAnime} />
                <button type="button" className="btn btn-warning" onClick={clearSearch}>Volver al Álbum</button>
            </div>
    
            {animeDetails ? (
                <div className="anime-details d-flex" style={{ backgroundColor: '#FFA500', padding: '20px', borderRadius: '5px' }}>
                    <img src={animeDetails.posterImage} alt={animeDetails.title} className="img-fluid me-4" style={{ width: '300px' }} />
                    <div>
                        <h2>{animeDetails.title}</h2>
                        <p>{animeDetails.synopsis}</p>
                        <p>Episodios: {animeDetails.episodes}</p>
                        <p>Fecha: {animeDetails.startDate} - {animeDetails.endDate}</p>
                        <h3>Episodios</h3>
                        <ul>
                            {animeDetails.episodesList.map((ep) => (
                                <li key={ep.number}>
                                    {ep.number}. {ep.title}
                                </li>
                            ))}
                        </ul>
                        
                    </div>
                </div>
            ) : (
                <div style={{ backgroundColor: '#FFA500', padding: '15px' }}>
                    <AlbumContainer animeList={animeList} setPage={setPage} page={page} />
                </div>
            )}
        </div>
    );
};
