import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AdminGenres from "./pages/AdminGenres";
import AdminAuthors from "./pages/AdminAuthors";
import Register from './pages/Register';

export default function App() {
  return (
    <Router>
      <nav className="bg-gray-200 p-4 space-x-4">
        <Link to="/">Home</Link>
        <Link to="/admin/genres">Genres</Link>
        <Link to="/admin/authors">Authors</Link>
      </nav>

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin/genres" element={<AdminGenres />} />
        <Route path="/admin/authors" element={<AdminAuthors />} />
      </Routes>
    </Router>
  );
}

// export default App;



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
