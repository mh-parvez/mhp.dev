import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { skillsIcons } from "./data";
import "./Hero.scss";
// import { images } from "../../constants";

function Hero() {
	return (
		<>
			<section id='home' className='hero'>
				<div className='container'>
					<div className='content'>
						<div className='hero-main'>
							<div className='hero-text'>
								<h1>
									Frontend Focus
									<br />
									MERN Developer
								</h1>
								{/* <h1>Frontend Focus Engineer </h1> */}
								{/* <img
                                    src={images.wavingEmoji}
                                    alt="waving_hand"
                                /> */}
								<p>
									Hi, I'm MH Parvez. A passionate Frontend
									Engineer & MERN Stack Developer, from
									Sylhet, Bangladesh. 💼
								</p>
								<span>
									<a
										aria-label='linkedin'
										rel='noreferrer'
										target='_blank'
										href='#'>
										<AiOutlineLinkedin
											width={32}
											height={32}
										/>
									</a>
									<a
										aria-label='github'
										rel='noreferrer'
										target='_blank'
										href='https://github.com/mh-parvez'>
										<AiOutlineGithub
											width={32}
											height={32}
										/>
									</a>
								</span>
							</div>

							<div className='hero-img'></div>
						</div>

						{/*  */}
						<div className='skills'>
							<p>Tech Stack</p>
							<div className='logos'>
								<ul>
									{skillsIcons.map((icon) => (
										<li key={icon.id}>
											<img
												src={icon.img}
												alt='skill-icon'
											/>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Hero;
