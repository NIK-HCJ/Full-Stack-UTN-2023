import { NavLink } from "react-router-dom";
import '../../styles/layout/navigator.css';

const Navigator = (props) => {
    return (
        <nav>
            <ul>
                <li>< NavLink to="/" className={({isActive})=> isActive ? "activo" : 
                undefined }>HOME</NavLink></li>
                <li>< NavLink to="/galeria" className={({isActive})=> isActive ? "activo" : 
                undefined }>GALERIA</NavLink></li>
                <li>< NavLink to="/novedades" className={({isActive})=> isActive ? "activo" : 
                undefined }>NOVEDADES</NavLink></li>
                <li>< NavLink to="/nosotros" className={({isActive})=> isActive ? "activo" : 
                undefined }>NOSOTROS</NavLink></li>
                <li>< NavLink to="/contactos" className={({isActive})=> isActive ? "activo" : 
                undefined }>CONTACTOS</NavLink></li>

              
            </ul>
        </nav>
    );
}

export default Navigator;