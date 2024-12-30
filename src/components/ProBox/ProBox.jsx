import { AiOutlineGithub } from "react-icons/ai";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineInstallDesktop } from "react-icons/md";
import { images } from "../../constants";
import "./ProBox.scss";

const ProBox = () => {
	return (
		<div className='projects-container'>
			{/* ---------- Project one ------------ */}
			<div className='project-box-content'>
				<div className='text-side'>
					<h3>Sylheti Dukan</h3>
					<p>
						<b>Ecommerce management system - </b> This ecommerce
						platform will enable users to browse products, manage
						their accounts, additems to their cart, and complete
						purchases through a secure payment system.
						<br />
						<br />
						Admin can manage inventory, orders, and analytics. Add,
						edit, and delete products items. Track, update, and
						fulll orders.
					</p>
					<div className='links_content'>
						<a
							href='https://github.com/mh-parvez/sylheti-dukan-docs'
							target='_blank'>
							Docs
							<IoDocumentTextOutline />{" "}
						</a>
						<a
							href='https://sylhetidukan.vercel.app/'
							target='_blank'>
							Live <MdOutlineInstallDesktop />{" "}
						</a>
						<a
							href='https://github.com/mh-parvez/sylheti-dukan-client'
							target='_blank'>
							Client <AiOutlineGithub />{" "}
						</a>
						<a
							href='https://github.com/mh-parvez/sylheti-dukan-server'
							target='_blank'>
							Server <AiOutlineGithub />{" "}
						</a>
					</div>
				</div>

				<div className='img-side'>
					<img
						src={images.firstProject}
						alt='sylheti dukan image'
						className={`img-side__main-img`}
					/>
				</div>
			</div>
			{/*---------------- Project Two ---------------*/}
			<div className='project-box-content'>
				<div className='text-side'>
					<h3>DS.MHP</h3>
					<p>
						<b>Design System & Component Library Prototype - </b>
						This design system adaptable across various projects (e.g. Angular,
						Vue, React component libraries). It is easy to integrate
						into any frontend framework or project.
						<br /> <br />
						Follow the principles of Atomic Design to ensure a
						clear, reusable component structure (Atoms, Molecules,
						Organisms, Templates, Pages). This helps maintain
						consistency and makes the design system more intuitive
						and easier to scale
					</p>
					<div className='links_content'>
						<a
							href='https://github.com/mh-parvez/ds.mhp-docs'
							target='_blank'>
							Docs
							<IoDocumentTextOutline />{" "}
						</a>
						<a
							href='https://github.com/mh-parvez/ds.mhp.main'
							target='_blank'>
							Repo <MdOutlineInstallDesktop />{" "}
						</a>
						<a
							href='https://github.com/mh-parvez/ds.mhp.main/tree/master/packages/scss'
							target='_blank'>
							Sass <AiOutlineGithub />{" "}
						</a>
						<a
							href='https://github.com/mh-parvez/ds.mhp.main/tree/master/packages/react'
							target='_blank'>
							Lib <AiOutlineGithub />{" "}
						</a>
					</div>
				</div>

				<div className='img-side'>
					<img
						src={images.secondProject}
						alt='sylheti dukan image'
						className={`img-side__main-img`}
					/>
				</div>
			</div>
		</div>
	);
};

export default ProBox;
