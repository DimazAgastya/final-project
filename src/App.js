import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Account from "./Pages/Account";
import Profile from "./Pages/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Login />}></Route>
			<Route path="/register" element={<Register />}></Route>
			<Route path="/account" element={<Account />}></Route>
			<Route path="/profile" element={<Profile />}></Route>
		</Routes>
	);
}

export default App;
