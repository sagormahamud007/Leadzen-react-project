import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../Assets/img.png'
import { AuthContext } from '../../AuthContext/ContextProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const userLogOut = () => {
      logOut()
          .then(result => {

          })
          .catch(() => {

          })
  }
    return (
        <div className="navbar bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to={'/'}>Home</Link></li>
           <li><Link to={'/'}>About</Link></li>
           <li><Link to={'/'}>Contact</Link></li>
            </ul>
          </div>
          <img className='w-12 ml-10 rounded-lg' src={img1} alt=""></img>
          
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           <li><Link to={'/'}>Home</Link></li>
           <li><Link to={'/about'}>About</Link></li>
           <li><Link to={'/'}>Contact</Link></li>
           {
            user?.uid ?
                <>
                    <li><button className='btn btn-outline' onClick={userLogOut}>Sign Out</button></li>
                </>
                :
                <li><Link to='/signIn'>Sign In</Link></li>
        }
          </ul>
        </div>
        
      </div>
    );
};

export default Navbar;