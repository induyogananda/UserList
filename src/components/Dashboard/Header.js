import React from 'react';

import Logout from '../Logout';

const Header = ({ setIsAdding, setIsAuthenticated }) => {
  return (
    <header>
      <h1>Users List</h1>
      <div style={{ marginTop: '30px', marginBottom: '18px' }}>
      <label className="label" htmlFor="query">
            {" "}
            📷
            </label>
            <input
                type="text"
                name="query"
                className="input"
                placeholder="Search User..."
            />
        <button className="btn" onClick={() => setIsAdding(true)}>Add User</button>
        <Logout setIsAuthenticated={setIsAuthenticated} />
      </div>
    </header>
  );
};

export default Header;