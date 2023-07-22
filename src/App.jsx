import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Saludo from "./components/Saludo.jsx";

function App() {
  const individuo = "My Friend";
  return (
    <>
      <Saludo nombre={individuo} />
    </>
  );
}

export default App;
