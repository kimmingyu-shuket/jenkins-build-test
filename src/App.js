import logo from "./logo.svg";
import "./App.css";

function App() {
    console.log("react test");
    console.log("react test2");
    console.log("react test3");
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Edit React
                </a>
            </header>
        </div>
    );
}

export default App;
