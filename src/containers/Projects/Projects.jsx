import "./Projects.scss";
import { ProBox } from "../../components";

function Projects() {
	return (
		<>
			<section id='project' className='project'>
				<div className='container'>
					<div className='project-content'>
						{/* <p>portfolio</p> */}
						<h3>
							Unique Piece of Development 👨🏻‍🔬
						</h3>
						<ProBox/>
					</div>
				</div>
			</section>
		</>
	);
}

export default Projects;
