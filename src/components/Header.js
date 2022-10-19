import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';


const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log('context', user);

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }


    return (
        <div className="navbar bg-primary text-primary-content">
            <Link to='/' className="btn btn-ghost normal-case text-xl">Awesome Auth</Link>

            <Link to='/home' className="btn btn-ghost normal-case text-xl">Home</Link>

            <Link to='/orders' className="btn btn-ghost normal-case text-xl">Orders</Link>

            <Link to='login' className="btn btn-ghost normal-case text-xl">Log in</Link>

            <Link to='/register' className="btn btn-ghost normal-case text-xl">Register</Link>

            {user?.email && <span>Welcome,{user.email}</span>}

            {
                user?.email ?
                    <button onClick={handleSignOut} className="btn btn-sm ml-3">Log Out</button>
                    : <Link to='/login'>
                        <button className="btn btn-sm">Log In</button>
                    </Link>
            }








        </div>
    );
};

export default Header;