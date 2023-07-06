function ScreenOutput() {
  return (
    <section id="output-screen" />
  );
}
function InputButtons() {
  return (
    <div id="input-buttons">
      <button type="button" id="AC" className="input">AC</button>
      <button type="button" id="+/-" className="input">+/-</button>
      <button type="button" id="%" className="input">%</button>
      <button type="button" id="7" className="input">7</button>
      <button type="button" id="8" className="input">8</button>
      <button type="button" id="9" className="input">9</button>
      <button type="button" id="4" className="input">4</button>
      <button type="button" id="5" className="input">5</button>
      <button type="button" id="6" className="input">6</button>
      <button type="button" id="1" className="input">1</button>
      <button type="button" id="2" className="input">2</button>
      <button type="button" id="3" className="input">3</button>
      <button type="button" id="0" className="input fill">0</button>
      <button type="button" id="." className="input">.</button>
    </div>
  );
}
function OperationButtons() {
  return (
    <div id="operation-buttons">
      <button type="button" id="÷" className="operations">÷</button>
      <button type="button" id="x" className="operations">x</button>
      <button type="button" id="-" className="operations">-</button>
      <button type="button" id="+" className="operations">+</button>
      <button type="button" id="=" className="operations">=</button>
    </div>
  );
}
function Calculator() {
  return (
    <div id="my-calculator">
      <ScreenOutput />
      <div id="inputs">
        <InputButtons />
        <OperationButtons />
      </div>
    </div>
  );
}
export default Calculator;
