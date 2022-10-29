import React from 'react';
import{BrowserRouter , Route, Routes} from 'react-router-dom'
import Article from './components/article/Article';
import Footer from './components/footer/Footer';
import { Contact } from './components/footer/Footer.styles';
import Nav from './components/nav/Nav';
import Blog from './pages/blog/Blog';
import Career from './pages/career/Career';
import Home from './pages/home/Home';
import SignUp from './pages/signup/SignUp';


function App() {
  return (
    <div>
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route  path="/" element={<Home />} />

      <Route path='/' element={<Blog/>}/>
       

      <Route path='/contact' element={<Contact/>}/>

      <Route path='/career' element={ <Career/>}/>


      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
   
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
