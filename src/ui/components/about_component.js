//Components for about
import { useEffect, useState } from 'react'
import { init } from 'ityped'
import "../../value/styles/about_style.css"

const About = () => {
    useEffect(() => {
        componentDidMount()
    }, [])
    const componentDidMount = () => {
        const Element = document.querySelector('#Element')
        init(Element, { showCursor: false, strings: [`'m Andres Cuello`] })
    }
    return (
        <div className="about">
            <div className="aboutTitle text-primary">
                <b className="border-bottom border-primary border-3">About</b>
            </div>
            <div className="aboutDate">
                <div className="m-2">
                    <img
                        className="aboutImg"
                        src="https://a-static.besthdwallpaper.com/computador-de-casa-papel-pintado-2560x1440-16849_51.jpg"
                    />
                </div>
                <div className="aboutText m-2">
                    <div>
                        <h2 className="d-flex">
                            <div>I</div>
                            <div id="Element"></div>
                        </h2>
                        <div>Hello, I'm Frontend Junior and Backend Developer, i am Developer from april of 2020, i have mys studies of Rolling Code School, they taught me of Html5, Css, Bootstrap, Git, JavaScript, ReactJs, NodeJs, MongoDb and work in team, in this moment i am working of freelance.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;