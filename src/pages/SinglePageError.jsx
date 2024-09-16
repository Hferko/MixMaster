import { Link, useRouteError } from 'react-router-dom';
import kep from '../assets/nopicture.jpg';
import Wrapper from "../assets/wrappers/ErrorPage";

const SinglePageError = () => {
  const error = useRouteError();

  return (
    <Wrapper>
      <div>
        <h2 className='alert-danger'>Hiba történt az adatok lekérésekor</h2>        
        <p>{error.message}</p>
        <img src={kep} alt="error" />
        <Link to='/'><button className="btn">Vissza a kezdőlapra</button></Link>
      </div>
    </Wrapper>
  )
}
export default SinglePageError;