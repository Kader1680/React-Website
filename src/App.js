import {Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Front from './frontend/frontend';
import Header from './header/header';
import Back from './backend/backend';
import Footer from './footer/footer'
import Home from './home/home';
import SignIn from './signin/signin';
import Courses from './frontend/courses/courses';
import Project from './frontend/project/project';
import Roadmap from './frontend/roadmap/roadmap';
import Php from './backend/php/php';
function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          {/* <Route path='/home' element={<Home /> } /> */}
          <Route path='/' element={<Home /> } />
          {/* <Route path='/frontend' element={<Front /> } /> */}
          <Route path='/backend' element={<Back />} />
          <Route path='/sign' element={<SignIn />} />
          {/* <Route path='/frontend/react' element={<REACT />} /> */}
          <Route path='/frontend/Courses' element={<Courses />} />
          <Route path='/frontend/Project' element={<Project />} />
          <Route path='/backend/php' element={<Php />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
    
    
    
    
  );
}

export default App;
