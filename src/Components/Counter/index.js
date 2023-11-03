import React from "react";
import { connect } from "react-redux";
import { Plus, Minus } from "../../Actions/CounterActions";



const Counter = ({ counter, Plus, Minus }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="mt-5 wrapper">
            <span className="minus btn btn-warning" onClick={Minus}>-</span>
            <input type="number" className="count" value={counter} />
            <span className="plus btn btn-success" onClick={Plus}>
              +
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ CounterReducer }) => {
  const { counter } = CounterReducer;
  return { counter };
};

const mapDispatchToProps = {
  Plus,
  Minus,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
