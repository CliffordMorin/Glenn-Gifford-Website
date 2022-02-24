import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Bio from "./components/Bio/Bio";
import Teaching from "./components/Teaching/Teaching";
import Contact from "./components/Contact/Contact";
import Media from "./components/Media/Media";
import Calender from "./components/Calender/Calender";

function App() {
  return (
    <Router>
      <Route path="/" component={Home}></Route>
      <Route path="/bio" component={Bio}></Route>
      <Route path="/teaching" component={Teaching}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route path="/media" component={Media}></Route>
      <Route path="/calender" component={Calender}></Route>
    </Router>
  );
}

export default App;
