import React, { useState, useEffect } from 'react';
import { useForm } from "./useForm";
import { Hello } from "./Hello";
import { useFetch } from "./useFetch";

const App = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });
  const [showHello, setShowHello] = useState(true);

  // everytime this component is rendered this function will get called
  useEffect(() => {
    console.log("Render")
    const onMouseMove =e => {
      console.log(e)
    }
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      console.log("Unmount")
      window.removeEventListener("mousemove", onMouseMove);
    }
  }, [values.email]); 
  // only change when password is changed, this is the dependency Array!
  // // empty array it is then called once!

  const [count, setCount] = useState(() => JSON.parse(localStorage.getItem("count")));
  const { data, loading } = useFetch(`http://numbersapi.com/${ count }/trivia`);

  // using localstorage to keep track of the count for when we refresh
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count)); 
  }, [count])

  return (
    <div>
      <div>
        { loading ? '...' : data }
        <div>
          count: { count }
        </div>
        <button onClick={() => setCount(c => c + 1)}>Increment!</button>
        <button onClick={() => setCount(c => (Math.floor(Math.random() * 100)))}>Random</button>
      </div>
      <>
      <button onClick={() => setShowHello(!showHello)}>toggle</button>
      { showHello && <Hello /> }
      <input name="email" value={ values.email } onChange={ handleChange } />
      <input 
        type="password" 
        name="password" 
        value={ values.password } onChange={ handleChange }/>
      </>
    </div>
  );
};

export default App;