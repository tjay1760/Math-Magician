import React, { useState } from 'react';
import { InputButtons, OperationButtons } from './Buttons';
import calculate from '../logic/calculate';
import ScreenOutput from './Output';

function Calculator() {
  const [calculationState, setCalculationState] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const buttonClickHandler = (buttonName) => {
    const newState = calculate(calculationState, buttonName);
    setCalculationState(newState);
  };

  return (
    <div id="my-calculator">
      <ScreenOutput calculatorState={calculationState} />
      <div id="inputs">
        <InputButtons buttonClickHandler={buttonClickHandler} />
        <OperationButtons buttonClickHandler={buttonClickHandler} />
      </div>
    </div>
  );
}

export default Calculator;
