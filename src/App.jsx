// import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Home from './Pages/Home'
// import Header from './Componenets/Header'
// import { ThemeContext } from './Context/ThemeContext'
// import SearchPage from './Pages/SearchPage';
// import { SearchProvider } from './Context/SearchContext';

// function App() {
//   const [count, setCount] = useState(0)
//   const [theme,setTheme]=useState('dark')
//   useEffect(()=>{
//    setTheme(localStorage.getItem('theme')?localStorage.getItem('theme'):'dark')
//   },[])
//   return (
//     <SearchProvider>
//     <ThemeContext.Provider value={{theme,setTheme}}>
//     <div className={`${theme} 
//     ${theme=='dark'?'bg-[#121212]':null} min-h-[100vh]`}>
//       <Header/>
//       <Home/>
//       <SearchPage/> 
//     </div>
//     </ThemeContext.Provider>
//     </SearchProvider>
//   )
// }

// export default App

import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Home from './Pages/Home';
import Header from './Componenets/Header';
import { ThemeContext } from './Context/ThemeContext';
import SearchPage from './Pages/SearchPage';
import { SearchProvider } from './Context/SearchContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    setTheme(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark');
    localStorage.clear();
  }, []);

  return (
    <SearchProvider>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Router>
          <div className={`${theme} ${theme === 'dark' ? 'bg-[#121212]' : null} min-h-[100vh]`}>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<SearchPage />} />
            </Routes>
          </div>
        </Router>
      </ThemeContext.Provider>
    </SearchProvider>
  );
}

export default App;
