import "./App.css";
import ContestProvider from "./contestApi/ContestProvider";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <ContestProvider>
        <AllRoutes />
      </ContestProvider>
    </div>
  );
}

export default App;
