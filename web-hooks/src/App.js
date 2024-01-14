import './App.css';
import {createContext, useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState} from 'react'

const initialState = 5;
function reducer(usereducerval,action){//function for useReducer
  switch (action.type) {
    case "increment":
      return usereducerval+1;
      break;
    case "decrement":
      return usereducerval-1;
      break;
    default:
      throw new Error();
  }
}

function App() {
  const [statevar, setStateVar] = useState('');//string/boolean/number/array/object
  const [count, setCount] = useState(0);//dynamically render the data to DOM
  const [date,setDate] = useState(new Date().toString());
  const [name,setName] = useState("");
  const [counter,setCounter] =useState(1);

  const [usereducerval, dispatch] =useReducer(reducer, initialState);//custom logic for state function

  useEffect(()=>{ //Replacement for Lifecycle methods in Class Components
    console.log("UseEffect Called")//componentDidMount()
   // const interval = setInterval(showDate, 1000);//componentDidUpdate()
   /* return() => {
      console.log("UseEffect Cleared")
      clearInterval(interval);//componentDidUnmount()
    }*/
  }, [date])

  const showDate = () => {
    setDate(new Date().toString())
  }

  const handleClick = () =>{
    setStateVar("State is updated and re-rendered")
  }
  const increment = () => {
    //setCount(count+1)
    //setCount(count+1)
    setCount((prevState) => prevState+1)
    setCount((prevState) => prevState+1)

  }

  const inputEle = useRef("");//used to access DOM elemenets

  const resetName = () =>{
    setName("")
    inputEle.current.focus()
  }
  
  const result = useMemo(()=>{//used to memoize the application return value
    return expensiveOne(counter)
  },[counter]);

  const displayName = useCallback(() =>{//returns function
    return name;
  },[name])
  console.log(result)
  console.log(displayName)
  /*const abc = createContext(null);//Global State
  Create Context
  SetContext using <abc.Provider value = {something}></abc.Provider>
  Use in the child func useContext() --> <abc.consumer></>
  */
  return (
    <div className="App">
        <button onClick={handleClick}>Click</button>
        <p>{statevar}</p>
        <button onClick={increment}>+</button>
        <p>{count}</p>
        <p>{date}</p>
        <input ref={inputEle} type='text' value = {name} onChange={(e)=>setName(e.target.value)}></input>
        <button onClick={resetName}>reset</button>
        <p>Name is {name}</p>
        <button onClick={()=>setCounter(counter+5)}>useMemo</button>
        <p>{counter}</p>
        <DisplayName displayName={displayName}></DisplayName>
        <button onClick={()=> dispatch({type:"increment"})}>+</button>
        <button onClick={()=> dispatch({type:"decrement"})}>-</button>
        <h4>{usereducerval}</h4>
    </div>
  );
}

const DisplayName = ({displayName, date})=>{
  const[value, setValue] = useState("");
  useEffect(()=>{
    setValue(displayName);
    console.log("displayname");
  },[displayName])
  return <p>From DisplayName {value}</p>
}

function expensiveOne(n){//expensive function which eats the cpu time
  let i = 0;
  while(i<2000000000) i++;
  return n+1;
}

export default App;
