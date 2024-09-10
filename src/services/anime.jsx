
const api_url = 'https://kitsu.io/api/edge/anime'

export const reqAnimePortada = async (animeTitle) => {
    
    const resp = await fetch(`${api_url}?filter[text]=${animeTitle}`);
    const { data } = await resp.json();
    const animeData = data.map(anime => ({
        posterImage: anime.attributes.posterImage?.medium,
        titles: anime.attributes.titles?.en_jp,
        episodeCount: anime.attributes.episodeCount,
    }));
    
    return animeData; 
};

    /*posterImage: anime.attributes.posterImage?.medium,
    titles: anime.attributes.titles?.en_jp,
    synopsis: anime.attributes.synopsis,
    averageRating: anime.attributes.averageRating,
    startDate: anime.attributes.startDate,
    endDate: anime.attributes.endDate,
    ageRatingGuide: anime.attributes.ageRatingGuide,
    status: anime.attributes.status,
    episodeCount: anime.attributes.episodeCount,
    episodes: anime.relationships.episodes*/




