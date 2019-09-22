import React from 'react';
import './App.css';
import menuItems from './menuItems';

class App extends React.Component {
  render() {
  console.log('Mayo', menuItems);
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Restaurant Menu
        </h1>
        <nav>
          <ul>
            <li>
              <input type="checkbox"/>
              <span className="checkmark">Salad</span>
                <ul>
                  <li>
                    <input type="checkbox"/>
                    <span className="checkmark">Santa Fe</span>
                  </li>
                  <li>
                    <input type="checkbox"/>
                    <span className="checkmark">Greek</span>
                  </li>
                  <li>
                    <input type="checkbox"/>
                    <span className="checkmark">Asian</span>
                  </li>
                  <li>
                    <span className="extras">You might also want:</span>
                  </li>
                  <li>
                    <input type="checkbox"/>
                    <span className="checkmark">Dressing</span>
                    <ul>
                      <li>
                        <input type="checkbox"/>
                        <span className="checkmark">Italian</span>
                      </li>
                      <li>
                        <input type="checkbox"/>
                        <span className="checkmark">Blue Cheese</span>
                      </li>
                      <li>
                        <input type="checkbox"/>
                        <span className="checkmark">Ranch</span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <input type="checkbox"/>
                    <span className="checkmark">Bread</span>
                  </li>
                </ul>
            </li>
            <li>
              <input type="checkbox"/>
              <span className="checkmark">Entree</span>
            </li>
            <li>
              <input type="checkbox"/>
              <span className="checkmark">Soup</span>
              <ul>
                <li>
                  <input type="checkbox"/>
                  <span className="checkmark">Minestrone</span>
                </li>
                <li>
                  <input type="checkbox"/>
                  <span className="checkmark">Hot and Sour</span>
                </li>
                <li>
                  <input type="checkbox"/>
                  <span className="checkmark">Miso</span>
                </li>
                <li>
                  <span className="extras">You might also want:</span>
                </li>
                <li>
                  <input type="checkbox"/>
                  <span className="checkmark">Bread</span>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
}

export default App;
