import { useEffect } from "react";
import { useHttp } from "../Hooks/useHttp";

import "../styles/style.css"

const SearchPage = () => {

    const {request} = useHttp()

    // Вынести в отдельный файл настроек
    const _url = 'https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?id=40008598&locale=en-US'
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '16a0768e11msh4ff883b744d5c9ap1dfa93jsn162358fb5542',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    }
    useEffect(() => {
        request(_url, "GET", null, options.headers)
        .then(res => console.log(res))
    }, [])

    return (
        <div className="search">
            <div className="container">
                Search music
            </div>
        </div>
    );
};

export default SearchPage;