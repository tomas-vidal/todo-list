import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <form className="input-form">
        <input className="input-form-todo" type="text"></input>
        <button>
          <span>+</span>
        </button>
      </form>
    </div>
  );
}

export default App;
