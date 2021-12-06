import React, { useState } from 'react';
// import Hello from './sayHello';
import Tweet from './Tweet'

function App () {

  // const sayHello = () => {
  //   console.log("Hello!");
  // };

  // return (
  //   <div>
  //     <h1>Hello there!</h1>
  //     <button onClick={sayHello}>Hello</button>
  //   </div>
  // )

  const [isRed, setRed] = useState(false); 
  const [count, setCount] = useState(0);

  const [user, setUsers] = useState([
    { name:'Ed', message: "Hello there" },
    { name: "Mick", message: "General Kenobi"}
  ]);

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed)
  }

  return (
    <div className="App">
      <h1>Hello there!</h1>
        {/* <Hello /> */}
        <Tweet name="Dev Ed" message="Random Tweet" likes="23"/>
        <Tweet name="John Snow" message="Another Tweet" likes="3434"/>
        <Tweet name="Mike" message="Hello there" likes="423242"/>
        <h1 className={ isRed ? 'red' : ''}>Change my Color!</h1>
        <button onClick={ increment }>Increment</button>
        <h1>{ count }</h1>
        { user.map( user => (
          <Tweet name={ user.name } message={ user.message }/>
        ))}
    </div>
  )
}

export default App;