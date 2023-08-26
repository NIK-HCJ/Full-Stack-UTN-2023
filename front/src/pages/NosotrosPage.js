import '../styles/pages/nosotros.css';
import '../styles/pages/normalize.css';

const Nosotros = (props) => {
    return (
        <><main className="n-main">
            <div className="historia">
                <h1>HISTORIA</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quam est ut voluptate suscipit
                    inventore, iusto doloribus corrupti beatae a cumque illum illo reprehenderit obcaecati assumenda, modi,
                    ipsam minima! Doloremque?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ipsam dolor iure vero perferendis molestiae
                    ab vel aspernatur? Cumque excepturi deserunt vitae debitis repellat dolore incidunt porro fugit
                    doloremque id!</p>

            </div>

            <div>
                <p className="staff">- STAFF -</p>
                <div className="nosotros">
                    <div className="persona">
                        <img src="https://f.rpp-noticias.io/2019/02/15/753300descarga-11jpg.jpg"
                            alt="Marco Torres" />
                        <h2>MARCO TORRES</h2>
                        <h3>Director</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos qui corporis cumque dolorem, saepe
                            quae vero magnam voluptates beatae unde exercitationem ad et repellat optio laboriosam
                            inventore. Quasi, qui temporibus.</p>
                    </div>

                    <div className="persona">
                        <img src="https://www.contrareplica.mx/uploads/galerias/normal/d51adde6198cd2e5a32ddda82d2ee9b6.jpg"
                            alt="Matias Rojas" />
                        <h2>MATIAS ROJAS</h2>
                        <h3>Co-Director</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos qui corporis cumque dolorem, saepe
                            quae vero magnam voluptates beatae unde exercitationem ad et repellat optio laboriosam
                            inventore. Quasi, qui temporibus.</p>
                    </div>

                    <div className="persona">
                        <img src="https://mochileros.org/nelson/wp-content/uploads/2020/04/esta-persona-no-existe-3.jpg"
                            alt="Flavia Diaz" />
                        <h2>FLAVIA DIAZ</h2>
                        <h3>Guia de exposición</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos qui corporis cumque dolorem, saepe
                            quae vero magnam voluptates beatae unde exercitationem ad et repellat optio laboriosam
                            inventore. Quasi, qui temporibus.</p>
                    </div>

                    <div className="persona">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGcQ5118d2m9qWGHRds7VuklwzIXAISFGqYw&usqp=CAU"
                            alt="Maria Silva" />
                        <h2>MARIA SILVA</h2>
                        <h3>Guia de exposición</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos qui corporis cumque dolorem, saepe
                            quae vero magnam voluptates beatae unde exercitationem ad et repellat optio laboriosam
                            inventore. Quasi, qui temporibus.</p>
                    </div>
                </div>
            </div>
        </main></>
    );
}

export default Nosotros;