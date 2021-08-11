import logo from "./logo.svg";
import "./App.css";
import warsaw from "./warsaw.png";
function App() {
  return (
    <div className="App">
      <div className="" style={{ border: "solid 1px #000", maxWidth: "100vw" }}>
        <h1 className="titel red"> your name here</h1>
        <br/>
        <img className="image" src={warsaw} alt="warsaw" />
        <br/>
        <img className="image" src="/rome.png" alt="rome"/>
        <video width="320" height="240" controls>
 
      </video>
      </div>
    </div>
  );
}

export default App;
