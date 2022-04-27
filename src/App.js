import logo from './logo.svg';
import './App.css';
import DataFetching from "./DataFetching";
import './layout.scss';

function App() {
  return (
    <div className="app-list">
      <div> Item List </div>
        <DataFetching/>
    </div>
  );
}

export default App;
