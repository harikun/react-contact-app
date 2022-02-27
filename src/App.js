import "./App.css";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/">Home</Route>
        <Route path="/detail">Detail</Route>
        <Route path="/category">Category</Route>
      </Routes>
    </>
  );
}

export default App;
