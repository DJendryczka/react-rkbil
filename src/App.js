
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
