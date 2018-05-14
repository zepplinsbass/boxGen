import React, { Component } from 'react';
import './app.css';


class App extends Component {
  state = {
    boxArr: [],
  }

  makeBox = (box) => {
    this.setState((state) => ({
      boxArr: state.boxArr.concat(box)
    }));
  }

  render() {
    return (
      <div className="container">
        <h1 className="hello">Get Ready For Boxes...</h1>
        <BoxGenerator onBtnClick={this.makeBox} boxArr={this.state.boxArr} />
      </div>
    )
  }
}

/*function makeBox() {
  const boxArr = [];
  const box = <li className="box" key={
}*/

  function BoxGenerator(props) {
    const x = ["box"];
    return (
      <div className="gen-container">
        <button onClick={() => props.onBtnClick(x)} id="box-gen">
          Make Box
        </button>
        <ul className="box-container">
          {props.boxArr.map((index) => (
            <li key={index} className="box"></li>
          ))}
        </ul>
      </div>
    )
  }


export default App;
