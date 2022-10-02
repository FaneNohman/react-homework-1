import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import ClassComponent from './components/ClassComponent';
import  FunctionComponent  from './components/FunctionComponent';
import Home from './components/Home';
function App() {
  const alertValue=(value)=>{
    window.alert(value);
  }
  return (
    <div className="App">
      <Router>
      <nav>
        <Link to="/" className="link">HOME</Link>
        <Link to="/class" className="link">CLASS</Link>
      </nav>
      <Routes>
        <Route path="/class" element={<ClassComponent str="class component" num="" func={alertValue}/>}>
          <Route path='func' element={<FunctionComponent str="class component" num="" func={alertValue}/>}/>
        </Route>
        <Route path="/" element={<Home/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
