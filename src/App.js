import React from 'react';
import './App.css';
import menuItems from './menuItems';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
        checked: true
    }
  }
  render() {
  let menuChoices;
  let firstChoice;
  let secondChoice;
  let thirdChoice;
  menuChoices= menuItems.map(item => {
    const { name, choices, related } = item;
    const { checked } = this.state

    firstChoice = choices.map(item => {
      return (
        <li key={item.name}>
        <input type="checkbox"/>
        <span className="checkmark">{item.name}</span>
        </li>
      );
    });


    secondChoice = related.map(item => {
      const { choices } = item;
      thirdChoice = choices.map(item => {
        return (
          <li key={item.name}>
          <input type="checkbox"/>
          <span className="checkmark">{item.name}</span>
          </li>
        );
      });
      return (
        <li key={item.name}>
        <input type="checkbox"/>
        <span className="checkmark">{item.name}</span>
        <ul>
          {thirdChoice}
        </ul>
        </li>
      );
    });
    return (
      <ul>
      <li key={name}>
        <input type="checkbox" checked={checked}/>
        <span className="checkmark">{name}</span>
        <ul>
        {firstChoice}
        </ul>
        <ul>
          <li className="extras">
            <span>You might also want:</span>
          </li>
          {secondChoice}
        </ul>
      </li>
      </ul>
    );
  });
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Restaurant Menu
        </h1>
        <nav>
          {menuChoices}
        </nav>
      </header>
    </div>
  );
}
}

export default App;
