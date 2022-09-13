import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home';
import Settings from './pages/Settings/Settings';
import Questions from './pages/Questions/Questions';
import Users from './pages/Users/Users';
import User from './pages/User/User';
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./app.scss";


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="questions" element={<Questions />} />
              <Route path="settings" element={<Settings />} />
              <Route path="users">
                <Route index element={<Users />} />
                <Route path=":usedId" element={<User />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>

  );
}

export default App;
