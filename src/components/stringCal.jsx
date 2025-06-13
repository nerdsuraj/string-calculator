import { useState } from 'react';
import { add } from '../utilis/calculator';
import './stringCal.css'; 

export default function StringCal() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculate = () => {
    try {
      const output = add(input);
      setResult(output);
      setError(null);
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };


   return (
    <div className="calculator-container">
      <div className="calculator-card">
        <h2 className="calculator-heading">🎯 String Calculator</h2>
        <label htmlFor="stringInput" style={{ display: 'none' }}>String Input</label>
        <textarea
          id="stringInput"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder='Enter numbers like 1,2 or //;\n1;2'
          rows={4}
          className="calculator-textarea"
        />
        <br />
        <button onClick={handleCalculate} className="calculator-button" data-testid="calculate-btn">Calculate</button>
        {result !== null && <p className="calculator-result">Result: {result}</p>}
        {error && <p className="calculator-error">Error: {error}</p>}
      </div>
    </div>
  );
}
