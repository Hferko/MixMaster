import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import Wrapper from "../assets/wrappers/Navbar";


const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <span className="logo">Mix&#127864;Master</span>
        <div className="nav-links">
          <NavLink to='/' className='nav-link'>
            Kezdőlap
          </NavLink>
          <NavLink to='/ingredient' className='nav-link'>
            Összetevők
          </NavLink>
          <NavLink to='/about' className='nav-link'>
            Rólunk
          </NavLink>
          <NavLink to='/newsletter' className='nav-link'>
            Hírlevél
          </NavLink>
        </div>
      </div>
    </Wrapper>
  )
}
export default Navbar;