import './App.css';
import ClassComponent from './components/ClassComponent';
import  FunctionComponent  from './components/FunctionComponent';
function App() {
  return (
    <div className="App">
      <ClassComponent str="class component" num=""/>
      <FunctionComponent str="function componetn" num="10"/>
    </div>
  );
}

export default App;
