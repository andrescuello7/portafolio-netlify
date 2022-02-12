//Import react
import "../../value/styles/present_style.css"
import { useEffect } from 'react'
import { init } from 'ityped'
import perfil from "../../images/perfil.jpg"

const Present = () => {
    useEffect(() => {
        componentDidMount()
    }, [])
    const componentDidMount = () => {
        const myElement = document.querySelector('#myElement')
        init(myElement, { showCursor: false, strings: ['Andres Cuello', 'Developer'] })
    }
    return (
        <div className="carrucel">
            <div className="CarrucelWidth">
                <img
                    className="d-block w-100 rounded-3"
                    src={perfil}
                />
            </div>
            <div className="CarrucelText">
                <div>
                    <div>
                        I am <i className="text-primary" id="myElement"></i>
                    </div>
                    <div>
                        Full Stack Junior.
                    </div>
                </div>
                <div className="social">
                    <a href="https://www.facebook.com/andres.cuello.14/">
                        <span className="fab fa-facebook-f icon-favicon"></span>
                    </a>
                    <a href="https://www.instagram.com/4ndres_cuello/?hl=es">
                        <span className="fab fa-instagram icon-favicon"></span>
                    </a>
                    <a href="https://github.com/andrescuello7">
                        <span className="fab fa-github icon-favicon"></span>
                    </a>
                    <a href="https://www.linkedin.com/in/silvio-andres-cuello-a9a1b11bb/">
                        <span className="fab fa-linkedin icon-favicon"></span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Present;