import {Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Front from './frontend/frontend';
import Header from './header/header';
import Back from './backend/backend';
import Footer from './footer/footer'
import REACT from './frontend/react/react'
import Home from './home/home';
import SignIn from './signin/signin';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          {/* <Route path='/home' element={<Home /> } /> */}
          <Route path='/' element={<Home /> } />
          <Route path='/frontend' element={<Front /> } />
          <Route path='/backend' element={<Back />} />
          <Route path='/backend' element={<SignIn />} />
          <Route path='/frontend/react' element={<REACT />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
      <SignIn />
    </div>
    
    
    
    
  );
}

export default App;
