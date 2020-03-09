import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handletype, refresh, plus } from "./actions";
import "./styles/App.css";

const App = () => {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flexBoxContainer">
        <div className="calculator">
          <input value={counter} />
          <div className="keys" onClick={() => dispatch(refresh())}>
            AC
          </div>
          <div className="keys">&larr;</div>
          <div className="keys" onClick={() => dispatch(plus())}>
            +
          </div>
          <div className="keys">-</div>
          <div
            className="keys"
            data-type="1"
            onClick={() => dispatch(handletype())}
          >
            1
          </div>
          <div className="keys" data-type="2">
            2
          </div>
          <div className="keys" data-type="3">
            3
          </div>
          <div className="keys">x</div>
          <div className="keys" data-type="4">
            4
          </div>
          <div className="keys" data-type="5">
            5
          </div>
          <div className="keys" data-type="6">
            6
          </div>
          <div className="keys">/</div>
          <section className="keys_wrapper">
            <section>
              <div className="keys" data-type="7">
                7
              </div>
              <div className="keys" data-type="8">
                8
              </div>
              <div className="keys" data-type="9">
                9
              </div>
              <div className="keys long" data-type="0">
                0
              </div>
              <div className="keys">.</div>
            </section>
            <section>
              <div className="keys tall">=</div>
            </section>
          </section>
        </div>
      </div>

      {isLogged ? <h4>Udah login ?</h4> : ""}
    </div>
  );
};

export default App;
