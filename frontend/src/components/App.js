import '../styles/App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Welcome from './Welcome';
import Login from './Login';
import Navbar from './NavBar';
import Films from './Films'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {AuthContext} from './AuthUtil';
import { hasJWT } from "./AuthUtil";
import FilmPage from './FilmPage';
import UserPage from './UserPage';
import Registration from './Registration';

export default function App() {  
  const [isAuth, setAuth] = useState(hasJWT);
  return(
    <div>
      <AuthContext.Provider value={{isAuth, setAuth}}>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route reloadDocument path='/films' element={<Films />} />
          <Route path='/' element={<Welcome />} />
          <Route path='/films/film/:id' element={<FilmPage />} />
          <Route path='/user/:username' element={<UserPage />} />
          <Route path='/registration' element={<Registration />} />
        </Routes>
    </BrowserRouter>
    </AuthContext.Provider>
    </div>
  )
}