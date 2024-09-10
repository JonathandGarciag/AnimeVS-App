import CryptoJS from "crypto-js"
import { useEffect, useState } from "react"
import { reqAnimePortada } from "../services/anime"

export const useAnime = () =>{

    const [anime, setAnime] = useState()

    useEffect(()=>{
        reqAnimePortada(animeTitle).then((data) =>{
            setAnime(data.results)
        })
    }, [animeTitle])
    
    const formatImageUrl = (anime) => {
            const url_image = anime.posterImage;
            console.log(url_image);
            return url_image;
    }

    return{
        anime,
        formatImageUrl,
    }
}

