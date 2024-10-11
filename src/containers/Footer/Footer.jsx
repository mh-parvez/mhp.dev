import "./Footer.scss";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

function Footer() {
	return (
		<>
			<footer>
				<div className='container'>
					<div className='footerc'>
						<h3>
							Copyright © {new Date().getFullYear()}. All rights
							are reserved
						</h3>
						<div className='footerc__socials'>
							<a
								aria-label='linkedin'
								target='_blank'
								rel='noreferrer'
								href='https://github.com/mh-parvez'>
								<AiOutlineGithub width={30} height={30} />
							</a>
							<a
								aria-label='github'
								target='_blank'
								rel='noreferrer'
								href='https://www.linkedin.com/in/mh-parvez-656629332/'>
								<AiOutlineLinkedin width={30} height={30} />
							</a>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
