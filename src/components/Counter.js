import { Component } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/index";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  console.log(showCounter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>INCREMENT</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>DECREMENT</button>
      </div>
      .<button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

/* class Counter extends Component {
  incrementHandler() {
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
  }

  toggleCounterHandler() {}
  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>INCREMENT</button>
          <button onClick={this.decrementHandler.bind(this)}>DECREMENT</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
 
 */
