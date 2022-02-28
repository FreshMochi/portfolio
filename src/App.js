import style from './App.module.css';
import { Route, Routes } from "react-router-dom";
import Home from './routes/Home'
import About from './routes/About'
import Portfolio from './routes/Portfolio';
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
          <Route path='/Portfolio' element={<Portfolio />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
        <footer>
          <Footer />
        </footer>
    </div>
  );
}

export default App;
