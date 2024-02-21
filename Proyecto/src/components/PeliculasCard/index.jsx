import { NavLink } from "react-router-dom";

const PeliculasCard = (props) => {

  const {id,titulo,img,genero} = props;
    
    return (
        <div className="col">
          <div className="card" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt={titulo} />
            <div className="card-body">
              <h5 className="card-title">{titulo}</h5>
              <p className="card-text">
                {genero} 
              </p>
            </div>
            <div className="card-footer text-center">
              <NavLink to={`/pelicula/${id}`} className="btn btn-primary">
              Mas informacion
              </NavLink>
            </div>
          </div>
        </div>
      );
    };
    
export default PeliculasCard