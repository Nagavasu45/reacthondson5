
import './App.css';
import Higher2 from './first/HIgher2';
import Higher1 from './first/Higher1';
import Pure from './first/Pure';

function App() {
  return (
    <div className="App">
      <Pure />
      <Higher2 child={Higher1}/>
    </div>
  );
}

export default App;
