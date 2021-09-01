import "./App.css";
import Card from "./components/Card";
import Card2 from "./components/Card2";
import Header from "./components/Header";
import Header2 from "./components/Header2"
import Fleets from "./components/Fleets"
import NavBar from "./components/NavBar"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="App container">
        {/* <Header /> */}
        <Header2 />
        <Fleets />
        <Card2 />
        {/* <Card fill="#D8D8D8"/>
        <Card fill="#EA5F5F"/> */}
      </div>
      <NavBar/>
    </>
  );
}

export default App;
