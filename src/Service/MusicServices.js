import { useHttp } from "../Hooks/useHttp"
import { transformMusicUrl } from "../Service/transformUrlMusic";

const MusicService = () => {
    const {request, loading} = useHttp()

    const _topMusicUrl = "https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=20&startFrom=0"
    const options= {
        headersTopMusic : {
            'X-RapidAPI-Key': '16a0768e11msh4ff883b744d5c9ap1dfa93jsn162358fb5542',
		    'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    }

    const getTopMusics = async() => {
        const data = await request(_topMusicUrl, "GET", null, options.headersTopMusic)
        
        return data.tracks.map(_transformChartMusic)
    }

    const getSearchMusic = async (music) => {
        const musicUrl = transformMusicUrl(music)
        const _serachCurrentMusicUrl = `https://shazam.p.rapidapi.com/search?term=${musicUrl}&locale=en-US&offset=0&limit=5`
        
        const data = await request(_serachCurrentMusicUrl, "GET", null, options.headersTopMusic)
        return data.tracks.hits.map(_transformSearchMusic)
    }

    const _transformChartMusic = (music) => {
        return {
            title: music.title,
            autor: music.subtitle,
            urlMusic: music.url,
            img: music.share.image
        }
    }

    const _transformSearchMusic = (music) => {
        return {
            title: music.track.title,
            autor: music.track.subtitle,
            urlMusic: music.track.url,
            img: music.track.images.coverart
        }
    }

    return {getTopMusics, getSearchMusic, loading}
}
export default MusicService