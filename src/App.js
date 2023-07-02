import { BrowserRouter , Routes, Route } from 'react-router-dom';

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
import Node from './backend/nodejs/node';

function App() {
  return (
    <BrowserRouter>
      <div>
      <Header />
        <Routes>
            <Route path='/' element={<Home /> } />
            <Route path='/React-Website' element={<Home /> } />
            <Route path='/backend' element={<Back />} />
            <Route path='/sign' element={<SignIn />} />
            <Route path='/frontend/Courses' element={<Courses />} />
            <Route path='/frontend/Project' element={<Project />} />
            <Route path='/backend/php' element={<Php />} />
            <Route path='/backend/nodejs' element={<Node />} />
          </Routes>
      <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
