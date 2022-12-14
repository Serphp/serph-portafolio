
import { heroes } from '../serph/heroes';
import { useState } from "react";

export default function Mensaje() {

    function getHeroeRandom() {
        return Math.floor(Math.random() * heroes.length);
    }
    //const getHeroeRandom = () => math.floor(math.random() * heroes.length);
    const [heroe, setHeroe] = useState(heroes[getHeroeRandom()]);
    //console.log(heroe);

    const changeHeroe = () => {
        setHeroe(heroes[getHeroeRandom()]);
    }

    return (
        <>
        <hr/>
            <div className="card3 m-5" style={{ textAlign: "center"}}>
            <h2> {heroe.name} </h2>
            <div className="pe"> {heroe.mensaje} </div>
            <br/>
            <figcaption className="blockquote-footer">
            Por <cite title="Source Title"> {heroe.name} </cite>
            </figcaption>
            </div>
            <hr/>
        </>
        
        )
};
