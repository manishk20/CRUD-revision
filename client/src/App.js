import "./App.css";
// import FrontPage from './FrontPage';
import RootRoutes from "./RootRoutes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <div className="text-center">

      <header className="App-header">
      <h1 className="display-1 mb-4">CRUD OPERATIONS</h1>
      <button className="btn btn-primary mb-3">C</button>
      <button className="btn btn-success mb-3">R</button>
      <button className="btn btn-warning mb-3">U</button>
      <button className="btn btn-danger">D</button>
      </header>
    </div>
     */}
      <Router>
        <RootRoutes />
      </Router>
    </div>
  );
}

export default App;
