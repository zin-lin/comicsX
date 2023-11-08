
import './App.css';
import {HashRouter as R, Route, Routes} from 'react-router-dom'
import About from "./views/About";
import Home from "./views/Home";
import Nav from './components/Navigators/Nav';
import MobileNav from "./components/Navigators/MobileNav";
import Profile from "./views/Profile";
import React from 'react';
import {Provider} from "react-redux";
import authStore from "./redux/store";
import Search from "./views/Search";
import loginStore from "./redux/stateStores/loginStore";
import Events from "./views/Events";
import BookView from "./views/BookView";
import Books from './views/Books';
import UpdateBook from "./views/UpdateBook";
import EditBook from "./views/EditBook";


function App() {
  return (

        <R>
            <div className="App">
              <Nav/>
              <div className='rom-app'>
                    <Routes>
                        <Route element={<Home/>} path='/' />
                        <Route element={<About/>} path='/about' />
                        <Route element={<Profile/>} path='/profile' />
                        <Route element={<Events/>} path='/events' />
                        <Route element={<Search/>} path='/search' />
                        <Route element={<Books/>} path='/books' />
                        <Route path='/bookview/:bid' element={<BookView/>}  />
                        <Route path='/updatebook/:bid' element={<UpdateBook/>}  />
                        <Route path='/editbook/:bid' element={<EditBook/>}  />
                    </Routes>
              </div>
              <MobileNav/>
            </div>
        </R>
  );
}

export default App;
