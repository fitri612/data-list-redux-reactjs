import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Cart from "./component/Cart";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Tugas Pertemuan 10</h1>
      </div>
      <Cart />
    </Provider>
  );
}

export default App;
