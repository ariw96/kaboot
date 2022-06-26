import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/Kahoot.jpg";

function Header() {
	const navigate = useNavigate();
	const user = "";

	const onLogout = () => {
		navigate("/");
	};
	return (
		<header className="header">
			<div className="logo">
				<NavLink to="/">
					<img src={logo} />
				</NavLink>
			</div>
			<ul>
				{user ? (
					<li>
						<button className="btn" onClick={onLogout}>
							<FaSignOutAlt /> Logout
						</button>
					</li>
				) : (
					<>
						<li>
							<NavLink to="/login">
								<FaSignInAlt /> Login
							</NavLink>
						</li>
						<li>
							<NavLink to="/register">
								<FaUser /> Register
							</NavLink>
						</li>
					</>
				)}
			</ul>
		</header>
	);
}

export default Header;
