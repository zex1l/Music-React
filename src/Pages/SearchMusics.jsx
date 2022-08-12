
const SearchMusics = ({musics}) => {
    return (
        <>{renderMusics(musics)}</>
    );
};

const renderMusics = (musics) => {
    return musics.map((music, i) => {
        return (
            <div className="topChart__item searchMusic__item" key={i}>
                <img className="topChart__img" src={music.img} alt="" />
                <div className="topChart__music">{music.title}</div>
                <div className="topChart__name">{music.autor}</div>
                <a href={music.urlMusic} className="topChart__link">Go to Shazam</a>
            </div>
        )
    })
}

export default SearchMusics;