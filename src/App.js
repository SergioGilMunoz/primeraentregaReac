
import './App.css';
export default App ;


function Person(){

  return (

    <div className ="peson">
      <h3>Nombre:Pedro</h3>
      <p>Edad:25</p>
    </div>
  );
}
function App(){
  return (
    <div className="App">
      <h1>hola mundo</h1>
      <Person/>
    </div>

  );
}


