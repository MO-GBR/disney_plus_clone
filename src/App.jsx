import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from './Layout';
import Hero from './Pages/Hero';
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';
import { useSelector } from 'react-redux';
import MovieDetails from './Pages/MovieDetails';

const App = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={currentUser ? <Hero /> : <Navigate to="/login" />} />
          <Route path='/login' element={currentUser ? <Navigate to="/" /> : <Login />} />
          <Route path='/detail/:id' element= {<MovieDetails />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App