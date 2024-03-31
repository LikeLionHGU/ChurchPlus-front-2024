import { RecoilRoot } from "recoil";
import InputGroupName from "./Pages/CreateGroupPage/InputGroupName";
import InputUserName from "./Pages/CreateGroupPage/InputUserName";
import InputPosition from "./Pages/CreateGroupPage/InputPosition";
import InputGroupCode from "./Pages/CreateGroupPage/InputGroupCode";
import Homepage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/HomePage/LoginPage/LoginPage";
// import LoginPage from "./Pages/HomePage/LoginPage/LoginPage";
import Loading from "./Pages/HomePage/LoginPage/Loading";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SelectTeamPage from "./Pages/HomePage/SelectTeamPage";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/InputGroupCode" element={<InputGroupCode />}></Route>
          <Route path="/InputGroupName" element={<InputGroupName />}></Route>
          <Route path="/InputUserName" element={<InputUserName />}></Route>
          <Route path="/InputPosition" element={<InputPosition />}></Route>
          <Route path="/LoginPage" element={<LoginPage />}></Route>
          {/* <Route path="/LoginPage" element={<LoginPage />}></Route> */}
          <Route path="/loading" element={<Loading />}></Route>
          <Route path="/SelectTeamPage" element={<SelectTeamPage />}></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
