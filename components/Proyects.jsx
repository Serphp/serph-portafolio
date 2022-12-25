import { NProyects } from "../serph/NProyects"
import '../src/styles/Proyect.scss'

{/*
        <div className="containery mt-4">
            <div className="card3">
                <div className="">
                    <div className="row">

            {
                NProyects.map(({name, description, image, url, url2},i) => ( 
                    <div className="cardbody2" key={i}>
                        <div className="cardre">
                        <img className="image" src={image} alt="" />
                            <div className="cardinfo">
                            <h2> {name} </h2>
                            <hr/>
                            <div> {description} </div>
                            <br/>
                            <a href={url} className="ae"> Preview </a>
                            <a href={url2} className="ae"> Github </a>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
            </div>
            </div>
            </div>
*/}
export default function Proyects() {
    return (
        <>
        <div className="section-container">
        {/* SEPARACION */}
        <div className="section">
        <div className="image-container">
        <img className="img2" src="./src/media/todo.gif" alt="image 1" />
        </div>
        <div className="text-container">
        <h2>Administrador de tareas - T O D O</h2>
        <p> En este proyecto utilice: HTML5, CSS3, ReactJS + Vite, Tailwind </p>
        <a href="https://github.com/Serphp/react-todo" target="_blank" className="button">Github</a>
        <a href="https://minniecat.netlify.app/" target="_blank" className="button">View</a>
        </div>
        </div>

        <hr/>

        <div className="section">
            <div className="image-container">
                <img src="./src/img/black-line.png" alt="image 1" />
                </div>
                <div className="text-container">
                <h2> </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt, purus at varius dignissim, quam urna fermentum mauris, et pretium urna arcu id ligula. Donec hendrerit, neque a placerat viverra, mauris felis ullamcorper urna, quis suscipit risus urna auctor quam.</p>
                <a href="#" className="button">Learn More</a>
                </div>
        </div>
        {/* SEPARACION */}
        </div>
        </>
    )
};

