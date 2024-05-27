import { RecoilRoot } from "recoil";
import InputGroupName from "./pages/CreateGroupPage/InputGroupName";
import InputUserName from "./pages/CreateGroupPage/InputUserName";
import InputPosition from "./pages/CreateGroupPage/InputPosition";
import InputGroupCode from "./pages/CreateGroupPage/InputGroupCode";
import Homepage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/HomePage/LoginPage/LoginPage";
// import LoginPage from "./Pages/HomePage/LoginPage/LoginPage";
import Loading from "./pages/HomePage/LoginPage/Loading";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SelectTeamPage from "./pages/HomePage/SelectTeamPage";
import MainPage from "./pages/MainPage/MainPage";
import ManageTeamPage from "./pages/MainPage/ManageTeamPage";
import ContiStoragePage from "./pages/MainPage/ContiStoragePage";
import CreateContiPage from "./pages/MainPage/CreateContiPage";
import CreateNewGroupPage from "./pages/CreateGroupPage/CreateNewGroupPage";
import JoinAlreadyExistGroupPage from "./pages/CreateGroupPage/JoinAlreadyExistGroupPage";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Homepage />}></Route> */}
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/Main" element={<MainPage />}></Route>
          <Route
            path="/CreateNewGroup"
            element={<CreateNewGroupPage />}
          ></Route>
          <Route
            path="/JoinGroup"
            element={<JoinAlreadyExistGroupPage />}
          ></Route>
          <Route path="/InputGroupCode" element={<InputGroupCode />}></Route>
          <Route path="/InputGroupName" element={<InputGroupName />}></Route>
          <Route path="/InputUserName" element={<InputUserName />}></Route>
          <Route path="/InputPosition" element={<InputPosition />}></Route>
          <Route path="/loading" element={<Loading />}></Route>
          <Route path="/SelectTeamPage" element={<SelectTeamPage />}></Route>
          <Route path="/ManageTeamPage" element={<ManageTeamPage />}></Route>
          <Route
            path="/ContiStoragePage"
            element={<ContiStoragePage />}
          ></Route>
          <Route path="/CreateContiPage" element={<CreateContiPage />}></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
