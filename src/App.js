import "./App.css";
import Header from "./Header";
import Section from "./Section";
import movies from "./movies.json";

console.log(movies);

function App() {
  return (
    <div>
      <Header />
      <Section />
    </div>
  );
}

export default App;
