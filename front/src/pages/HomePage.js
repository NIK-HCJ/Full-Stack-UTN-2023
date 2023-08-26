import '../styles/pages/home.css';
import '../styles/pages/normalize.css';

const Home = (props) => {
    return (
        <><main className= "h-main">

            <div className="item1">
                <img src="https://cdn-icons-png.flaticon.com/512/607/607972.png" alt="imagen de un rodillo" />
                <p>
                    EXPRESS YOUR ART!
                </p>

            </div>

            <div className="item2">

                <p> <b> BIENVENIDO A LUGH GALLERY! </b> <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod incidunt voluptates molestias corrupti
                    adipisci doloremque culpa labore quasi, recusandae alias voluptate repellat! Excepturi vel impedit
                    consequatur nam explicabo at assumenda!
                </p>
                <img src="https://mantamarvallarta.com/images/blog/ruta-de-galerias-de-arte-en-puerto-vallarta-small.jpg"
                    alt="imagen de una galeria de arte" />
            </div>

            <div className="item3">
                <img src="https://www.plataformadeartecontemporaneo.com/pac/wp-content/uploads/2017/07/Est_Art-Space-ext-466x311.jpg"
                    alt="imagen de una galeria de arte por fuera" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nemo ut at, sapiente quos nihil labore odit
                    in maiores praesentium dolorum aliquid voluptatibus dolor debitis molestiae tempora possimus est
                    voluptates.
                </p>
            </div>


        </main></>

    );
}

export default Home;