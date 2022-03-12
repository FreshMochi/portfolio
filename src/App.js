import style from './App.module.css';
import { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './routes/Home'
import About from './routes/About'
import Portfolio from './routes/Portfolio';
import Animatepro from './routes/Animatepro';
import Navigation from './components/NavigationBar/Navigation';
import Footer from './components/Footer/Footer';

import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ContactMe from './components/SignUp/ContactMe';
import Blog from './routes/Blog';


function App() {

  return (
    <div className={style.App}>
      <ScrollToTop>
        <nav className='App-header'>
          <Navigation />
        </nav>
        <Routes>{/* Will display Routed Page */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />}/>
          <Route path='/css-animation' element={<Animatepro />}/>
          <Route path='/blog' element={<Blog />}/>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </ScrollToTop>
        <footer>
          <Footer />
          <ContactMe />
        </footer>
    </div>
  );
}

export default App;
