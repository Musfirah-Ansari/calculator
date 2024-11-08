//import React, { Component, useState } from 'react';
import React, { Component, useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator';
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';

import styled from 'styled-components'; //purely for UI

import 'bootstrap/dist/css/bootstrap.min.css'


const MeraButton = styled.button`
  color: white;
  background-color: indigo;
`

//import Calculator from './components/Calculator';
//import Productlisting from './components/Productlisting';

function App(){
    const [todos, setTodos] = useState(['Shoe polishing','Bike Riding']);
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

                {/* <MeraButton>I am OK Button</MeraButton>
               <Comp2/> 
               <Comp1/>  
               <p className='text-danger'>This is Para</p>
               <p className='text-info'>This is Para</p>
               <p className='text-warning'>This is Para</p> */}


         {/* <input type="text" onChange={handleChange} value={text}/>
        <button onClick={handleClick}>Add</button>
        <ul>
          {
            todos.map((t)=>{
              return <li>{t}</li>
            })
          }
        </ul>  */}
      

      </React.Fragment>

    );
  }

export default App;
