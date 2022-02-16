import {useDispatch,useSelector} from 'react-redux'
import {increment,decrement} from './actions'
import './App.css';

function App() {
  const counter = useSelector(state =>state.increment);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Number : {counter} </h1>
      <button onClick={() => dispatch(decrement())} >-</button>
      <button  onClick={() => dispatch(increment())} >+</button>
    </div>
  );
}

export default App;
