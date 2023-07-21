import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Saludo from "./components/Saludo.jsx";

function App() {
  const individuo = "My Friend";
  return (
    <div>
      <h1>
        <Saludo nombre={individuo} />
      </h1>
    </div>
  );
}

export default App;
