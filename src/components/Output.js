import PropTypes from 'prop-types';

function Output({ calculatorState }) {
  if (!calculatorState || calculatorState.next === null) {
    return calculatorState && Number(calculatorState.total);
  }
  return calculatorState.next;
}

function ScreenOutput({ calculatorState }) {
  return (
    <section id="output-screen">
      <p>
        {' '}
        <output>
          {' '}
          <Output calculatorState={calculatorState} />
        </output>
      </p>
    </section>
  );
}

ScreenOutput.propTypes = {
  calculatorState: PropTypes.shape({
    next: PropTypes.number,
    total: PropTypes.number,
  }).isRequired,
};

export default ScreenOutput;
