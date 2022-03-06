import style from './App.module.css';
import { Route, Routes } from "react-router-dom";
import Home from './routes/Home'
import About from './routes/About'
import Portfolio from './routes/Portfolio';
import CSSProj from './routes/CSSProj';
import Navigation from './components/NavigationBar/Navigation';
import Footer from './components/Footer/Footer';

import ScrollToTop from './components/ScrollToTop/ScrollToTop';

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
          <Route path='/css-animation' element={<CSSProj />} />
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
        </footer>
    </div>
  );
}

export default App;
