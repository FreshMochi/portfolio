import style from './App.module.css';
import { Route, Routes } from "react-router-dom";
import Home from './routes/Home'
import Navigation from './components/NavigationBar/Navigation';

function App() {

  return (
    <div className={style.App}>
        <nav className='App-header'>
          <Navigation />
        </nav>
        <Routes>{/* Will display Routed Page */}
          <Route path='/' element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
