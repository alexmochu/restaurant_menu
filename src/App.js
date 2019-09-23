import React from 'react';
import './App.css';
import menuItems from './menuItems';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
        items: menuItems
    }
  }

  handleChange = prop => (e) => {
    return this.setState(preveState => ({
      items: preveState.items.map(item => (
        (item.name === prop ? Object.assign(item, {checked: !item.checked}) : item)
      ))
    }))
  }

  render() {
  const { items } = this.state;
  let menuChoices;
  let firstChoice;
  let secondChoice;
  let thirdChoice;
  
  menuChoices= items.map(item => {
    const { name, choices, related, checked } = item;

    firstChoice = choices.map(item => {
      return (
        <li key={item.name} className={`${checked ? ("display") : "hide"}`}>
        <input type="checkbox"/>
        <span className="checkmark">{item.name}</span>
        </li>
      );
    });

    secondChoice = related.map(item => {
      const { choices } = item;
      thirdChoice = choices.map(item => {
        return (
          <li 
            key={item.name}
            >
          <input 
            type="checkbox"
            checked={item.checked}
          />
          <span className="checkmark">{item.name}</span>
          </li>
        );
      });
      return (
        <li key={item.name} className={`${checked ? ("display") : "hide"}`}>
        <input
          type="checkbox"
        />
        <span className="checkmark">{item.name}</span>
        <ul>
          {thirdChoice}
        </ul>
        </li>
      );
    });
    return (
      <ul>
      <li
        key={name}
      >
        <input 
          type="checkbox"
          onChange={this.handleChange(`${name}`)}
          checked={item.checked}
          />
        <span className="checkmark">{name}</span>
        <ul>
        {firstChoice}
        </ul>
        <ul>
          <li className={`${related.length > 0 && checked ? ("extras_display") : ("hide")}`}>
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
