import React from "react";
import { decrement, increment } from "./action";
import { connect } from "react-redux";

const Counter = ({ count, increment, decrement }) => {
  return (
    <div>
      <h2>Count: {count} </h2>
      <button onClick={increment}>Increment</button>
      {count > 0 && <button onClick={decrement}>Decrement</button>}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
