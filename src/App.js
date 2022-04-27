import { Outlet, Link } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<div>
			<h1>Bookkeeper!</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      {/* Outlet enables a shared layout
          P.S Anything above it remains constant no matter the route you navigate to  
       */}
      <Outlet />
		</div>
	);
}

export default App;
