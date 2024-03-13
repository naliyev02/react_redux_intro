import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useState } from "react";
import { decrement, increment } from "./redux/features/counter/counterSlice";

function App() {
	// const counter = useSelector((state) => state.counter.counter);
	const dispatch = useDispatch();

	const {counter} = useSelector(state => state.counter);

	return (
		<div className="App">
			<button onClick={() => dispatch(decrement())}>decrement</button>
			<div>{counter}</div>
			<button onClick={() => dispatch(increment())}>increment</button>
		</div>
	);
}

export default App;
