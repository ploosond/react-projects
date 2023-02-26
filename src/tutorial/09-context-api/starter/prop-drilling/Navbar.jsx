import NavLinks from './NavLinks';
import { useState } from 'react';

const Navbar = () => {
  const [user, setUser] = useState({ name: 'bob' });
  const logout = () => {
    setUser(null);
  };

  return (
    <div className='navbar'>
      <h5>CONTEXT API</h5>
      <NavLinks user={user} logout={logout} />
    </div>
  );
};

export default Navbar;
