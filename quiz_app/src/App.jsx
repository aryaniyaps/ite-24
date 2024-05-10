import "./App.css";
import Quiz from "./Quiz";

// ASSIGNMENT (04-05-2024, Saturday)
// store 5 questions in js array
// each question has 4 options

// at a time, only one question and its 4 options are displayed
// there's a next and previous button

// next navigates to the next question
// previous navigates to the previous question

// the correct option must be selectable

function App() {
  return (
    <div className="App">
      <Quiz />
    </div>
  );
}

export default App;
