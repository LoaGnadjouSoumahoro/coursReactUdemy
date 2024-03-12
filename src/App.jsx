import "./App.css";
import { FriendsList } from "./FriendsList";

function App() {
  return (
    <>
      <FriendsList name="Elthon" hobbies={["Piano", "Singing", "Dancing"]} />
      <FriendsList
        name="Dave"
        hobbies={["Cycling", "playing Game", "Swimming", "Joggin"]}
      />
    </>
  );
}

export default App;
