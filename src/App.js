import "./App.css";
import { Route, Routes } from "react-router-dom";
import ContactApps from "./views/ContactApps";
import CategoryContact from "./views/CategoryContact";
import DetailContact from "./views/DetailContact";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ContactApps />} />
        <Route path="/:category" element={<CategoryContact />} />
        {/* <Route path="/detail" element={<DetailContact />} /> */}
      </Routes>
    </>
  );
}

export default App;
