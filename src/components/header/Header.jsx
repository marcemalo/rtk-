
import React, { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {



  return (
    <div className="w-64 h-full-screen bg-gray-800 text-white p-4 h-[730px]">
      <h2 className="text-xl font-bold mb-4">Ismoiljon</h2>
      <ul>
        <li className="mb-2 hover:bg-gray-700 p-2 rounded"><Link to="/">Home</Link></li>
        <li className="mb-2 hover:bg-gray-700 p-2 rounded"><Link to="/profile">Profile</Link></li>
        <li className="mb-2 hover:bg-gray-700 p-2 rounded"><Link to="/auth/login">Login</Link></li>
        <li className="mb-2 hover:bg-gray-700 p-2 rounded"><Link to="/users">Users</Link></li>
      </ul>
    </div>
  );
};

export default Header;
