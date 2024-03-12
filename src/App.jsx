import "./App.css";

import { Hello } from "./Hello";

import { FriendsList } from "./FriendsList";


function App() {
  return (
    <>

      <Hello to="Julia" from="Paul" bangs={4} />
      <Hello to="Dave" />

      <FriendsList name="Elthon" hobbies={["Piano", "Singing", "Dancing"]} />
      <FriendsList
        name="Dave"
        hobbies={["Cycling", "playing Game", "Swimming", "Joggin"]}
      />

    </>
  );
}

export default App;
