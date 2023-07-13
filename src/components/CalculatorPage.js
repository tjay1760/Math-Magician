import Calculator from './calculator';
import styles from '../styles/CalculatorPage.module.css';

const CalculatorPage = () => (
  <div className={styles.calculator}>
    <h2>Lets do some math </h2>
    <Calculator />
  </div>
);
export default CalculatorPage;
