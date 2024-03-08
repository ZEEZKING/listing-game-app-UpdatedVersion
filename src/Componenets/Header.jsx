import React, { useContext, useEffect, useState } from "react";
import logo from "./../assets/Images/logo.png";
import { HiMoon, HiOutlineMagnifyingGlass, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../Context/ThemeContext";
import { useSearch } from '../Context/SearchContext';
import { useNavigate } from 'react-router-dom';


function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const { theme, setTheme } = useContext(ThemeContext);
  const { setSearch } = useSearch();

  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.rawg.io/api/games?key=18d8dc115d954615a6fe8522598e8a97&search=${searchQuery}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      setSearch(data.results || []);
      navigate('/search');
    } catch (error) {
      console.error('Error searching games:', error);
      setSearch([]);
    }
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };


  useEffect(()=>{
    
    localStorage.clear();
  },[])
  return (
    <div className="flex items-center p-3">
      <img src={logo} width={60} height={60} />
      <div
        className="flex bg-slate-200 p-2 w-full
        mx-5 rounded-full items-center"
      >
        <HiOutlineMagnifyingGlass />
        <input
          type="text"
          placeholder="Search Games"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
          className="px-2 bg-transparent  outline-none"
        />
      </div>
      <div>
        {theme=='light' ? (
          <HiMoon
            className="text-[35px] bg-slate-200
           text-black p-1 rounded-full cursor-pointer"
            onClick={() => {setTheme('dark');localStorage.setItem('theme','dark')}}
          />
        ) : (
          <HiSun
            onClick={() => {setTheme('light');localStorage.setItem('theme','light')}}
            className="text-[35px] bg-slate-200
           text-black p-1 rounded-full cursor-pointer"
          />
        )}
      </div>
      
    </div>
  );
}

export default Header;