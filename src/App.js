import './App.css';
import Products from './components/Products/Products';
import RemoveLocalStorage from './components/RemoveLocalStorage/RemoveLocalStorage';

function App() {
  return (
    <div className="App">
      <RemoveLocalStorage></RemoveLocalStorage>
      <Products></Products>
    </div>
  );
}

export default App;
