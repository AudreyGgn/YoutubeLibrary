import React from 'react';
import './MenuDiv';

const SearchInput: React.FC = () => {
  return (
    <div className="inputContainer">
      <input className="searchInput" placeholder="Search..."></input>
      <svg className='searchIcon' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1669 11.5333C20.1669 16.3014 16.3017 20.1667 11.5336 20.1667C6.76553 20.1667 2.90026 16.3014 2.90026 11.5333C2.90026 6.76528 6.76553 2.90002 11.5336 2.90002C16.3017 2.90002 20.1669 6.76528 20.1669 11.5333ZM18.4621 20.2059C16.5632 21.7251 14.1545 22.6333 11.5336 22.6333C5.40324 22.6333 0.433594 17.6637 0.433594 11.5333C0.433594 5.40299 5.40324 0.43335 11.5336 0.43335C17.664 0.43335 22.6336 5.40299 22.6336 11.5333C22.6336 14.1542 21.7254 16.5629 20.2061 18.4618L27.2058 25.4611C27.6873 25.9429 27.6873 26.7238 27.2058 27.2056C26.7241 27.6871 25.9431 27.6871 25.4614 27.2056L18.4621 20.2059Z" fill="#43302B"/>
      </svg>
    </div>
  );
};

export default SearchInput;
