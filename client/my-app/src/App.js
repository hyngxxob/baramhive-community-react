// React 앱의 루트 컴포넌트. 여러 개의 하위 컴포넌트들을 렌더링하고, 앱의 전반적인 로직을 구현.
// JSX 코드

import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './view/hodong/home';
import Rank from './view/public/rank';


function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/rank" element={<Rank />} />
            <Route path="/hodong/home" element={<Home />} />
            {/* <Route path="/about" component={About} /> */}
          </Routes>
      </Router>
    </div>
  );
}

export default App;
