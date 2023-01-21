import {Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Front from './frontend/frontend';
import Header from './header/header';
import Back from './backend/backend';


function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/frontend' element={<Front /> } />
          <Route path='/backend' element={<Back />} />
        </Routes>
      </BrowserRouter>
    </div>
    
    
    
    
  );
}

export default App;
