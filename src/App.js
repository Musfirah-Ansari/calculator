//import React, { Component, useState } from 'react';
import React, { Component, useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator';
//import Calculator from './components/Calculator';
//import Productlisting from './components/Productlisting';

function App(){
    const [todos, setTodos] = useState(['shoe polishing','bike riding']);
  // const [show, setShow] = useState(false)

  // function handleshow(){
  //   setShow(!show);
  // }
  const [text, setText] = useState('');
  function handleChange(event){
    setText(event.target.value)
  }
  
  function handleClick(){
  if(text.length>0){
    setTodos([...todos, text]);
    setText('');

  }
}

    return (
      <React.Fragment>
              <Calculator/>
              
        {/* <input type="text" onChange={handleChange} value={text}/>
        <button onClick={handleClick}>Add</button>
        <ul>
          {
            todos.map((t)=>{
              return <li>{t}</li>
            })
          }
        </ul> */}
      

      </React.Fragment>

    );
  }

export default App;
