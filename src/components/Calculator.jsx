// 7.2 Build a calculator using ReactJS
// Done by Musfirah Fayyaz

import React, { useState } from 'react';
import '../App.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [memory, setMemory] = useState(null);

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleOperation = (operation) => {
    setInput((prevInput) => prevInput + ' ' + operation + ' ');
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const clear = () => {
    setInput('');
  };

  const recallMemory = () => {
    if (memory !== null) {
      setInput(memory.toString());
    }
  };

  const storeMemory = () => {
    setMemory(parseFloat(input));
    setInput('');
  };

  const handlePercent = () => {
    setInput((prevInput) => {
      try {
        const result = eval(prevInput) / 100;
        return result.toString();
      } catch (error) {
        return 'Error';
      }
    });
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} disabled />
      </div>
      <div className="buttons">
        <button onClick={clear} className="clear">CLEAR</button>
        <button onClick={recallMemory} className="memory">Memory Recall</button>
        <button onClick={storeMemory} className="memory">Memory Store</button>
        <button onClick={() => handleOperation('/')} className="operation">/</button>
        <button onClick={() => handleClick('7')} className="digit">7</button>
        <button onClick={() => handleClick('8')} className="digit">8</button>
        <button onClick={() => handleClick('9')} className="digit">9</button>
        <button onClick={() => handleOperation('*')} className="operation">*</button>
        <button onClick={() => handleClick('4')} className="digit">4</button>
        <button onClick={() => handleClick('5')} className="digit">5</button>
        <button onClick={() => handleClick('6')} className="digit">6</button>
        <button onClick={() => handleOperation('-')} className="operation">-</button>
        <button onClick={() => handleClick('1')} className="digit">1</button>
        <button onClick={() => handleClick('2')} className="digit">2</button>
        <button onClick={() => handleClick('3')} className="digit">3</button>
        <button onClick={() => handleOperation('+')} className="operation">+</button>
        <button onClick={() => handleClick('0')} className="digit">0</button>
        <button onClick={() => handleClick('.')} className="dot">.</button>
        <button onClick={handlePercent} className="percent">%</button>
        <button onClick={calculate} className="equal">=</button>
      </div>
    </div>
  );
};

export default Calculator;
