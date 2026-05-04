import { Routes, Route } from "react-router-dom";

import ErrorPage from "./pages/errorpage/Errorpage";
import GamePage from "./pages/gamePage/GamePage";
import RulesPage from "./pages/rulesPage/RulesPage";
import LeadershipPage from "./pages/leadershipPage/Leaderboard";
import StartPage from "./pages/startPage/StartPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage/>}/>
      <Route path="/error" element={<ErrorPage/>}/>
      <Route path="/rules" element={<RulesPage/>}/>
      <Route path="/leader" element={<LeadershipPage/>}/>
      <Route path="/game" element={<GamePage/>}/>
    </Routes>
  );
}

export default App;
    