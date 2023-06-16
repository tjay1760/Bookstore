//import Navigation from './components/Navigation.Js';
import './App.css';
import Books from './components/Mybooks';
import Navbar from './components/Navigation.js';
import { Route, Routes } from 'react-router-dom';
import Categories from './components/categories';
import NotFound from './components/NotFound';
function App() {
  return (
    <>
    <Navbar/>
<Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
        <Route path='/notfound' element={<NotFound/>}/>
      </Routes>
    </>
    
  );
}

export default App;
