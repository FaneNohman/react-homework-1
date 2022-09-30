import './App.css';
import ClassComponent from './components/ClassComponent';
import  FunctionComponent  from './components/FunctionComponent';
function App() {
  const alertValue=(value)=>{
    window.alert(value);
  }
  return (
    <div className="App">
      <ClassComponent str="class component" num="" func={alertValue}/>
      <FunctionComponent str="function componetn" num="10" func={alertValue}/>
    </div>
  );
}

export default App;
