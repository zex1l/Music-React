import { useEffect, useState } from "react";
import Loading from "./Loading";
import SearchMusics from "./SearchMusics";
import MusicService from "../Service/MusicServices";

import "../styles/style.css"

const SearchPage = () => {

    const [searchMusic, setSearchMusic] = useState("")
    const [allFindMusic, setAllFindMusic] = useState([])

    const {getSearchMusic, loading} = MusicService()

    const onSubmitMusic = () => {
        getSearchMusic(searchMusic)
        .then(responce => setAllFindMusic(responce))
    }
    
    const content = !loading ? <SearchMusics musics={allFindMusic}/> : null
    const loadingContent = loading ? <Loading/> : null
    return (
        <div className="search">
            <div className="container">
                <div className="search__inner">
                    <h1 className="findMusic__logo">Find your music</h1>
                        <input className="search__input" placeholder="Music" type="text" value={searchMusic} onChange={e => setSearchMusic(e.target.value)} /><br/>
                        <button className="btn__search" onClick={onSubmitMusic}>Find</button>

                        <div className="search__musics">
                            {content}
                        </div>
                        {loadingContent}
                </div>
            </div>
        </div>
    );
};

export default SearchPage;