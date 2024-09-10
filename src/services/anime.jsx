const api_url = 'https://kitsu.io/api/edge/anime';

// Función para obtener animes paginados y su información
export const reqAnimeList = async (page) => {
    const resp = await fetch(`${api_url}?page[limit]=12&page[offset]=${page * 10}`);
    const { data } = await resp.json();
  
    const animeList = data.map(anime => ({
        id: anime.id,
        title: anime.attributes.titles.en_jp,
        posterImage: anime.attributes.posterImage?.medium,
        episodeCount: anime.attributes.episodeCount,
        startDate: anime.attributes.startDate,
        endDate: anime.attributes.endDate,
        ageRatingGuide: anime.attributes.ageRatingGuide || 'N/A',
        status: anime.attributes.status || 'Desconocido'
    }));

    return animeList;
};

// Función para buscar anime por nombre
export const reqAnimeDetails = async (animeTitle) => {
    const resp = await fetch(`${api_url}?filter[text]=${animeTitle}`);
    const { data } = await resp.json();

    if (data.length === 0) return null;

    const animeDetails = data[0].attributes;
    const anime = {
        title: animeDetails.titles.en_jp,
        synopsis: animeDetails.synopsis,
        episodes: animeDetails.episodeCount,
        startDate: animeDetails.startDate,
        endDate: animeDetails.endDate,
        posterImage: animeDetails.posterImage?.medium,
    };

    const episodesResp = await fetch(`${api_url}/${data[0].id}/episodes`);
    const episodesData = await episodesResp.json();
  
    anime.episodesList = episodesData.data.map(ep => ({
        number: ep.attributes.number,
        title: ep.attributes.titles.en_jp || `Episodio ${ep.attributes.number}`,
    }));

    return anime;
};



