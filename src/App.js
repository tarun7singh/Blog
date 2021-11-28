import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Post from './components/Post';
import { ReadProvider } from './readContext'

function App() {
  return (
    <div className="App">
      <Router>
        <ReadProvider>
        <Routes>
          <Route path="/post/:id" element={<Post />}> </Route>
          <Route path="/" element={<Home />}> </Route>
        </Routes>
        </ReadProvider>
      </Router>
    </div>
  );
}

export default App;
