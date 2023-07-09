import './App.css';
import Calculator from './components/calculator';
import 'bootstrap/dist/css/bootstrap.css';
import Quote from './components/DisplayQuote';

function App() {
  return (
    <div className="Application">
      <div id="calculator">
        <Calculator />
      </div>
      <div id="quotes">
        <h1 id="Quote-header">Today&apos;s Quote</h1>
        <Quote />
      </div>
    </div>
  );
}

export default App;
