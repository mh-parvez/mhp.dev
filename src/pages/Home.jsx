import { Navbar } from "../components";
import { Hero, About, Projects, Contact, Footer } from "../containers";

const Home = () => {
	return (
		<div id='home'>
			<Navbar />
			<Hero />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
};

export default Home;
