import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import MoreUs from "./components/MoreFromUs/MoreUs";
import Main from "./components/MainContent/Main";
import FeaturedList from './components/FeaturedList/FeaturedList';
import Alltools from './components/Navbar/Alltools';
import Submit from './components/Navbar/Submit';
import SubmitNewsletter from './components/Navbar/SubmitNewsletter';
import AboutUs from './components/Navbar/AboutUs';

function App() {
  return (
    <Router>
          <Navbar/>
          <Routes>
          <Route path="/" element={<div className='w-[90%] m-auto'>
          <Main />
          <MoreUs />
          <FeaturedList/>
        </div>} />
            <Route path="/alltools" element={<Alltools/>} />
            <Route path="/submit" element={<Submit/>} />
            <Route path="/newsletter" element={<SubmitNewsletter/>} />
            <Route path="/aboutUs" element={<AboutUs/>} />
          </Routes>
          <Footer/>
    </Router>
  );
}

export default App;
