import "./App.css";
import { Route, Routes } from "react-router-dom";
import ContactApps from "./views/ContactApps";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ContactApps} />
      </Routes>
    </>
  );
}

export default App;
