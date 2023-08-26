import '../styles/pages/galeria.css';
import '../styles/pages/normalize.css';

const Galeria = (props) => {
    return (
        <><main className="g-main">
            <span className="cartel">OBRAS EN EXHIBICIÓN</span>


            {/* PRIMER APARTADO DE CUADROS */}
            <div className="galeria">
                <div className="obras">

                    {/* CUADRO 1 */}
                    <div className="obra">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/Leonardo_da_Vinci_-_Mona_Lisa_%28Louvre%2C_Paris%29.jpg"
                            alt="imagen de LA MONA LISA" className="cuadro" />
                        <h1 className="obra-nombre"> LA MONA LISA </h1>
                        <ul>
                            <li><b>ARTISTA</b><br />Leonardo da Vinci </li>
                            <li><b>AÑO:</b>1503</li>
                        </ul>

                        <h2 className="precio">PRECIO: $10000</h2>
                    </div>

                    {/* CUADRO 2 */}
                    <div className="obra">
                        <img src="https://mcrcalicante.files.wordpress.com/2014/01/munch_el_grito.jpg?w=640"
                            alt="imagen de EL GRITO" className="cuadro" />
                        <h1 className="obra-nombre"> EL GRITO </h1>
                        <ul>
                            <li><b>ARTISTA</b><br />Edvard Munch </li>
                            <li><b>AÑO:</b>1893</li>
                        </ul>

                        <h2 className="precio">PRECIO: $10000</h2>
                    </div>

                    {/* CUADRO 3 */}
                    <div className="obra">
                        <img src="https://media.traveler.es/photos/613766f4d7c7024f9175e397/master/w_1600%2Cc_limit/164783.jpg"
                            alt="imagen de LA JOVEN DE LA PERLA" className="cuadro" />
                        <h1 className="obra-nombre"> LA JOVEN DE LA PERLA </h1>
                        <ul>
                            <li><b>ARTISTA</b><br />Johannes Vermeer </li>
                            <li><b>AÑO:</b>1667</li>
                        </ul>

                        <h2 className="precio">PRECIO: $10000</h2>
                    </div>

                </div>
            </div>

            {/* SEGUNDO APARTADO DE CUADROS */}

            <div className="galeria">
                <div className="obras">

                    {/* CUADRO 4 */}
                    <div className="obra">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/220px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
                            alt="imagen de LA NOCHE ESTRELLADA" className="cuadro" />
                        <h1 className="obra-nombre"> LA NOCHE ESTRELLADA </h1>
                        <ul>
                            <li><b>ARTISTA</b><br />Vincent van Gogh </li>
                            <li><b>AÑO:</b>1889</li>
                        </ul>

                        <h2 className="precio">PRECIO: $10000</h2>
                    </div>

                    {/* CUADRO 5 */}
                    <div className="obra">
                        <img src="https://pinturaenoleo.com/wp-content/uploads/2014/12/el-hijo-del-hombre-rene-magritte.png"
                            alt="imagen de EL HIJO DEL HOMBRE" className="cuadro" />
                        <h1 className="obra-nombre"> EL HIJO DEL HOMBRE </h1>
                        <ul>
                            <li><b>ARTISTA</b><br />René Magritte </li>
                            <li><b>AÑO:</b>1964</li>
                        </ul>

                        <h2 className="precio">PRECIO: $10000</h2>
                    </div>

                    {/* CUADRO 6 */}
                    <div className="obra">
                        <img src="https://cdn.culturagenial.com/es/imagenes/las-dos-fridas-cke.jpg"
                            alt="imagen de una obra de arte" class="cuadro" />
                        <h1 className="obra-nombre"> LAS DOS FRIDAS </h1>
                        <ul>
                            <li><b>ARTISTA</b><br />Frida Kahlo </li>
                            <li><b>AÑO:</b>1939</li>
                        </ul>

                        <h2 className="precio">PRECIO: $10000</h2>
                    </div>

                </div>
            </div>

        </main><div className="pared"> </div><div className="lampara">
                <img src="https://www.pngall.com/wp-content/uploads/12/Light-Fixture-Lamp-PNG-Free-Image.png"
                    alt="lampara" />
            </div></>
    );
}

export default Galeria;