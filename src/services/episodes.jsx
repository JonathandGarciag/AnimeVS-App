
const api_url = `https://kitsu.io/api/edge/anime`;
  
export const reqInfoAnimeEpi = async (animeName) => {
    try {
        const response = await fetch(`${api_url}?filter[text]=${animeName}`);
        const { data } = await response.json();
        
        if (!data || data.length === 0) return null; 
        
        const { id, attributes: { titles, posterImage, synopsis } } = data[0];

        const anime = {
            id: id,
            title: titles.en_jp,
            url: posterImage.tiny,
            description: synopsis,
        };
        
        const episodesResp = await fetch(`${api_url}/${anime.id}/episodes`);
        const episodesData = await episodesResp.json();
        
        if (!episodesData || episodesData.data.length === 0) {
            anime.episodes = []; // Si no hay episodios, devolver un array vacío
          } else {
            anime.episodes = episodesData.data.map(episode => ({
              number: episode.attributes.number,
              title: episode.attributes.titles.en_jp || `Episodio ${episode.attributes.number}`,
            }));
          }
        
        return anime;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
};



  