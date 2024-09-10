import React from 'react';

export const AlbumContainer = ({ animeList, setPage, page }) => {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {animeList.map((anime) => (
          <div className="col" key={anime.id}>
            <div className="card">
              <img src={anime.posterImage} className="card-img-top" alt={anime.title} />
              <div className="card-body">
                <h5 className="card-title">{anime.title}</h5>
                <p className="card-text">
                  Episodios: {anime.episodeCount} <br />
                  Fecha: {anime.startDate} - {anime.endDate} <br />
                  Estado: {anime.status} <br />
                  Clasificación de edad: {anime.ageRatingGuide}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-between mt-4">
        <button className="btn btn-secondary" disabled={page === 0} onClick={() => setPage(page - 1)}>
          Anterior
        </button>
        
        <button className="btn btn-secondary" onClick={() => setPage(page + 1)}>
          Siguiente
        </button>
      </div>

      
    </div>
  );
};

