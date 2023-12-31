import Body from "./components/Body";
import { Provider } from "react-redux";
import pokemonStore from "./redux/pokemonStore";
function App() {
  return (
    <div className="App">
      <Provider store={pokemonStore}>
      <Body/>
      </Provider>

      
    </div>
  );
}

export default App;
