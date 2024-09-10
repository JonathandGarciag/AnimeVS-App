import { useAnime } from "../hooks/useAnime"
 
export const AnimeApp = () => {
    const{anime, formatImageUrl} = useAnime()

    return (
        <>
            <div className="d-flex flex-row row row-cols-5">
                {
                    //preguntando si characters tiene valores (si No es null)
                    anime && 
                        anime.map((anime)=>(
                            <div >
                                <div key={animeItem.id}>
                                    <li>{animeItem.name}</li>
                                    <img src={formatImageUrl(animeItem)} style={{width: '8rem'}}/>
                                </div>
                            </div>
                    ))
                }
            </div>
        </>
    )
}

