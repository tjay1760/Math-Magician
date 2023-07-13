import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import CalculatorPage from './components/CalculatorPage';
import QuotePage from './components/QuotePage';

function App() {
  return (
    <div className="Application">
      <nav className="navigation">
        <h1 className="title">
          Math Magicians
        </h1>
        <ul className="nav-icons">
          <li className="nav-link"><Link to="/">Home</Link></li>
          <li className="nav-link"><Link to="/cal">Calculator</Link></li>
          <li className="nav-link"><Link to="/quote">Quote</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cal" element={<CalculatorPage />} />
        <Route path="/quote" element={<QuotePage />} />
      </Routes>
    </div>
  );
}

export default App;
