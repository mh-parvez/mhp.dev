import { AiOutlineGithub } from "react-icons/ai";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineInstallDesktop } from "react-icons/md";
import "./ProBox.scss";

const ProBox = ({ name, description, image, swap }) => {
	return (
		<>
			<div className='project-box-content'>
				<div className='text-side'>
					<h3>{name} </h3>
					<p>{description}</p>
					<div className='links_content'>
						<a href='#' target='_blank'>
							{" "}
							Document <IoDocumentTextOutline />{" "}
						</a>
						<a href='#' target='_blank'>
							{" "}
							Live Demo <MdOutlineInstallDesktop />{" "}
						</a>
						<a href='#' target='_blank'>
							{" "}
							Code <AiOutlineGithub />{" "}
						</a>
					</div>
				</div>

				<div className='img-side'>
					<img
						src={image}
						alt='mee'
						className={`img-side__main-img ${swap}`}
					/>
				</div>
			</div>
		</>
	);
};

export default ProBox;