import "./Projects.scss";
import { ProBox } from "../../components";
import {images} from '../../constants'

function Projects() {
    return (
        <>
            <section id="projects" className="project">
                <div className="container">
                    <div className="project-content">
                        <p>portfolio</p>
                        <h3>
                            Each project is a unique piece of development 🧩
                        </h3>
                        <div className="projects-grid">
                            {/* ProBox Start*/}
                            <ProBox
                                name={"Coming Soon"}
                                description={
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ab quae deserunt repudiandae sapiente velit distinctio vero temporibus laborum, minus asperiores similique dolorum perspiciatis. Laudantium, voluptatibus enim! Tempora, itaque nisi!"
                                }
                                image={images.firstProject}
                                swap={"swap"}
                            />
                            <ProBox
                                name={"Coming Soon"}
                                description={
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ab quae deserunt repudiandae sapiente velit distinctio vero temporibus laborum, minus asperiores similique dolorum perspiciatis. Laudantium, voluptatibus enim! Tempora, itaque nisi!"
                                }
                                image={images.secondProject}
                                swap={"swap"}
                            />
                            {/* ProBox End*/}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projects;
