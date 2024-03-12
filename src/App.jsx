import "./App.css";
import { Hello } from "./Hello";

function App() {
  return (
    <>
      <Hello to="Julia" from="Paul" bangs={4} />
      <Hello to="Dave" />
    </>
  );
}

export default App;
