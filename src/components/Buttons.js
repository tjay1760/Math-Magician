import PropTypes from 'prop-types';

function InputButtons({ buttonClickHandler }) {
  return (
    <div id="input-buttons">
      <button type="button" id="AC" className="input" onClick={() => buttonClickHandler('AC')}>AC</button>
      <button type="button" id="+/-" className="input" onClick={() => buttonClickHandler('+/-')}>+/-</button>
      <button type="button" id="%" className="input" onClick={() => buttonClickHandler('%')}>%</button>
      <button type="button" id="7" className="input" onClick={() => buttonClickHandler('7')}>7</button>
      <button type="button" id="8" className="input " onClick={() => buttonClickHandler('8')}>8</button>
      <button type="button" id="9" className="input" onClick={() => buttonClickHandler('9')}>9 </button>
      <button type="button" id="4" className="input" onClick={() => buttonClickHandler('4')}>4 </button>
      <button type="button" id="5" className="input" onClick={() => buttonClickHandler('5')}>5 </button>
      <button type="button" id="6" className="input" onClick={() => buttonClickHandler('6')}>6 </button>
      <button type="button" id="1" className="input" onClick={() => buttonClickHandler('1')}>1 </button>
      <button type="button" id="2" className="input" onClick={() => buttonClickHandler('2')}>2 </button>
      <button type="button" id="3" className="input" onClick={() => buttonClickHandler('3')}>3</button>
      <button type="button" id="0" className="input fill" onClick={() => buttonClickHandler('0')}>0</button>
      <button type="button" id="." className="input" onClick={() => buttonClickHandler('.')}>.</button>
    </div>
  );
}
function OperationButtons({ buttonClickHandler }) {
  return (
    <div id="operation-buttons">
      <button type="button" id="÷" className="operations" onClick={() => buttonClickHandler('÷')}>÷</button>
      <button type="button" id="x" className="operations" onClick={() => buttonClickHandler('x')}>x</button>
      <button type="button" id="-" className="operations" onClick={() => buttonClickHandler('-')}>-</button>
      <button type="button" id="+" className="operations" onClick={() => buttonClickHandler('+')}>+</button>
      <button type="button" id="=" className="operations" onClick={() => buttonClickHandler('=')}>=</button>
    </div>
  );
}
InputButtons.propTypes = {
  buttonClickHandler: PropTypes.func.isRequired,
};

OperationButtons.propTypes = {
  buttonClickHandler: PropTypes.func.isRequired,
};
export { InputButtons, OperationButtons };
