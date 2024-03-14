// import { RecoilRoot } from "recoil";
import InputGroupName from "./pages/CreateGroupPage/InputGroupName";
import InputUserName from "./pages/CreateGroupPage/InputUserName";
import InputPosition from "./pages/CreateGroupPage/InputPosition";
import InputGroupCode from "./pages/CreateGroupPage/InputGroupCode";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/InputGroupCode" element={<InputGroupCode />}></Route>
        <Route path="/InputGroupName" element={<InputGroupName />}></Route>
        <Route path="/InputUserName" element={<InputUserName />}></Route>
        <Route path="/InputPosition" element={<InputPosition />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
