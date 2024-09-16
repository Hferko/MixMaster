import Wrapper from "../assets/wrappers/ErrorPage";
import { Link, useRouteError } from "react-router-dom";
import img from '../assets/not-found.svg';

const Error = () => {
  const Error = useRouteError();
  console.log(Error);

  if (Error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="nem található" />
          <h3>Ohh!</h3>
          <p>Úgy tűnik nem találjuk az ön által keresett oldalt</p>
          <Link to='/' className="btn">Vissza a kezdőlapra</Link>
        </div>        
      </Wrapper>
    )
  };

  return (
    <Wrapper>
      <div><h3>Error - valami hiba adódott</h3> </div>
    </Wrapper>    
  )
}
export default Error;