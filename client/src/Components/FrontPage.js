import "../App.css";
import { Link } from "react-router-dom";

function FrontPage() {
  return (
    <div>
      <div className="text-center">
        <header className="App-header">
          <h1 className="display-1 mb-4">CRUD OPERATIONS</h1>
          {/* <button >
      </button> */}
          <Link to={"/create"}>
            <button className="btn btn-primary mb-3">C</button>
          </Link>
          <Link to={"/read"}>
            <button className="btn btn-success mb-3">R</button>
          </Link>
          <Link to={"/update"}>
            <button className="btn btn-warning mb-3">U</button>
          </Link>
          <Link to={"/delete"}>
            <button className="btn btn-danger mb-3">D</button>
          </Link>
          {/* <button className="btn btn-success mb-3"><Link to={'/'}>R</Link></button>
      <button className="btn btn-warning mb-3"><Link to={'/'}>U</Link></button>
      <button className="btn btn-danger"><Link to={'/'}>D</Link></button> */}
        </header>
      </div>
    </div>
  );
}

export default FrontPage;
