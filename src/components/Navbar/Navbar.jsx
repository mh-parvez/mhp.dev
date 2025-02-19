import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";
import { navlinks } from "./data";
import "./Navbar.scss";

function Navbar() {
	const [hamburger, setHamburger] = useState(false);

	const hamburgerMenu = () => {
		setHamburger(!hamburger);
	};

	const pageUp = () => {
		window.scrollTo({ top: (0, 0), behavior: "smooth" });
	};

	return (
		<>
			<nav>
				<h3 onClick={pageUp} className='logo'>
					mhp.dev
				</h3>
				<ul>
					{navlinks.map((item) => (
						<li key={item.name}>
							<a href={item.link}>{item.name}</a>
						</li>
					))}
					<li>
						
						<a href='https://drive.google.com/file/d/17uttGl_osX8ecqVcV6GLLue99OxhqL1m/view' target='_blank' >
							Resume
						</a>
					</li>
					<li onClick={() => hamburgerMenu()}>
						<HiMenu className='mobile-menu' />
					</li>
				</ul>
			</nav>

			{/* mobile nav */}
			<div
				className={`mobile-nav ${
					hamburger ? "open-menu" : "closed-menu"
				}`}>
				<span onClick={() => hamburgerMenu()}>
					<HiX />
				</span>

				<ul>
					{navlinks.map((item) => (
						<li key={item.name} onClick={() => hamburgerMenu()}>
							<a href={item.link}>{item.name}</a>
						</li>
					))}
					<li>
						<a
<<<<<<< HEAD
							href='https://drive.google.com/file/d/17uttGl_osX8ecqVcV6GLLue99OxhqL1m/view'
=======
							href='https://drive.google.com/file/d/1-lTd9y8LcmjGlhf9XnlIZYmB3j2nm9T4/view'
>>>>>>> 2e14cab0af6aff10b21a36895c55ff694e551ebe
							target='_blank'>
							Resume
						</a>
					</li>
				</ul>
			</div>
		</>
	);
}

export default Navbar;
