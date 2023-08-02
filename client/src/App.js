import "./App.css";
import { Home, Details, Form, Landing } from "./Views";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import FormUpdate from "./Views/Update/FormUpdate";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route exact path="/" element={<Landing />}></Route>
        <Route exact path="*" element={<Landing />}></Route>
        <Route path="/home" element={<Home />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/detail/:id" element={<Details />} />
        <Route path="/formUpdate/:id" element={<FormUpdate />} />
      </Routes>
    </div>
  );
}

export default App;
