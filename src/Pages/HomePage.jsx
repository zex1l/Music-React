import { useEffect, useState } from "react";
import MusicService from "../Service/MusicServices";
import Loading from "./Loading";

import "../styles/style.css"

const HomePage = () => {
    const [topChart, setTopChart] = useState([])
    const {getTopMusics, loading} = MusicService()

    useEffect(() => {
        getTopMusics()
        .then(responce => setTopChart(responce))
    }, [])

    
    const renderTopChart = (topChart) => {
        const items = topChart.map(chart => {
            return (
                <div className="topChart__item">
                    <img className="topChart__img" src={chart.img} alt="" />
                    <div className="topChart__music">{chart.title}</div>
                    <div className="topChart__name">{chart.autor}</div>
                    <a href={chart.urlMusic} className="topChart__link">Go to Shazam</a>
                </div>
            )
        })
        return items
    }
    
    const content = renderTopChart(topChart)
    const loadingContent = loading ? <Loading/> : null

    return (
        <div className="main">
            <div className="container">
                <div className="main__inner">
                    <h1>WELCOME TO MUSIC REACT APP</h1>
                    <h2>Here you will find your favorite music</h2>
                    
                    <div className="topChart">
                        <div className="topChart__logo">Top chart musics</div>
                        <div className="topChart__grid">
                            {content}
                        </div>
                        {loadingContent}
                    </div>
                </div>
            </div>
        </div>
    );
};

const View = (chart) => {
    return (
        <div className="topCHar__item">
            <img className="topChart__img" src={chart.img} alt="" />
        </div>
    )
}

export default HomePage;