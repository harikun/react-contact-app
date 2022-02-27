import "./App.css";
import { Route, Routes } from "react-router-dom";
import ContactApps from "./views/ContactApps";
import CategoryContact from "./views/ContactApps";
import DetailContact from "./views/ContactApps";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ContactApps} />
        <Route path="/category" element={CategoryContact} />
        <Route path="/detail" element={DetailContact} />
      </Routes>
    </>
  );
}

export default App;
