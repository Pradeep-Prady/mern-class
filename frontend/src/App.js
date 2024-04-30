import { Outlet } from "react-router-dom";
import All from "./components/All";
import Home from "./components/Home";

 

function App() {
  return (
    <div className="App">
     <Home/>
     <All/>
     <Outlet></Outlet>
    </div>
  );
}

export default App;
