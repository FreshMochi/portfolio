import style from './App.module.css';
import { Route, Routes } from "react-router-dom";
import Home from './routes/Home'
import About from './routes/About'
import Navigation from './components/NavigationBar/Navigation';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className={style.App}>
        <nav className='App-header'>
          <Navigation />
        </nav>
        <Routes>{/* Will display Routed Page */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <footer>
          <Footer />
        </footer>
    </div>
  );
}

export default App;
