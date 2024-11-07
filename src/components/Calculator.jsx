// 7.2 Build a calculator using ReactJS
// Done by Musfirah Fayyaz

import React, { useState } from 'react';
import '../App.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [memory, setMemory] = useState(null);

  //for button clicks
  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  //for DMAS
  const handleOperation = (operation) => {
    setInput((prevInput) => prevInput + ' ' + operation + ' ');
  };

  //for calculation
  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  //for clearing input
  const clear = () => {
    setInput('');
  };

  // to recall memory
  const recallMemory = () => {
    if (memory !== null) {
      setInput(memory.toString());
    }
  };

  // to store memory
  const storeMemory = () => {
    setMemory(parseFloat(input));
    setInput('');
  };

  // for percent key
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
        <button onClick={clear} style={{ backgroundColor: '#55ef61'}}>CLEAR</button>
        <button onClick={recallMemory} style={{ backgroundColor: '#f67fbe'}}>Memory Recall</button>
        <button onClick={storeMemory} style={{ backgroundColor: '#f67fbe'}}>Memory Store</button>
        <button onClick={() => handleOperation('/')}style={{ backgroundColor: 'yellow'}}>/</button>
        <button onClick={() => handleClick('7')} style={{ backgroundColor: 'white'}}>7</button>
        <button onClick={() => handleClick('8')} style={{ backgroundColor: 'white'}}>8</button>
        <button onClick={() => handleClick('9')} style={{ backgroundColor: 'white'}}>9</button>
        <button onClick={() => handleOperation('*')} style={{ backgroundColor: 'yellow'}}>*</button>
        <button onClick={() => handleClick('4')} style={{ backgroundColor: 'white'}}>4</button>
        <button onClick={() => handleClick('5')} style={{ backgroundColor: 'white'}}>5</button>
        <button onClick={() => handleClick('6')} style={{ backgroundColor: 'white'}}> 6</button>
        <button onClick={() => handleOperation('-')} style={{ backgroundColor: 'yellow'}}>-</button>
        <button onClick={() => handleClick('1')} style={{ backgroundColor: 'white'}}>1</button>
        <button onClick={() => handleClick('2')} style={{ backgroundColor: 'white'}}>2</button>
        <button onClick={() => handleClick('3')} style={{ backgroundColor: 'white'}}>3</button>
        <button onClick={() => handleOperation('+')} style={{ backgroundColor: 'yellow'}}>+</button>
        <button onClick={() => handleClick('0')} style={{ backgroundColor: 'white'}}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={handlePercent} style={{ backgroundColor: '#f67fbe'}}>%</button>
        <button onClick={calculate}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
