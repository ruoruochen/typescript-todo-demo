import "./App.css";
// TODO:去掉后面的tsx
import Header from "./components/Header/index.tsx";
import Footer from "./components/Footer/index.tsx";
import MainSection from "./components/MainSection/index.tsx";
import { Provider } from "react-redux";
import store from "./redux/index.ts";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <h1>TODO</h1>
        <Header></Header>
        <MainSection></MainSection>
        <Footer></Footer>
      </Provider>
    </div>
  );
}

export default App;
