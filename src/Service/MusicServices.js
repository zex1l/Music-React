import { useHttp } from "../Hooks/useHttp"

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
        
        return data.tracks.map(_transformMusic)
    }


    const _transformMusic = (music) => {
        return {
            title: music.title,
            autor: music.subtitle,
            urlMusic: music.url,
            img: music.share.image
        }
    }

    return {getTopMusics, loading}
}
export default MusicService