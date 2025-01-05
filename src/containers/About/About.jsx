import { images } from "../../constants";
import "./About.scss";

function AboutMe() {
    return (
		<>
			<section className='about' id='about'>
				<div className='container'>
					<div className='about-content'>
						<div className='img-side'>
							<img
								src={images.workingEmoji}
								alt='emoji'
								className='work-emoji'
							/>
							<img
								src={images.aboutImg}
								alt='mee'
								className='img-side__main-img'
							/>
							<span>
								<img
									src={images.circleText}
									alt='text'
									className='circle_image'
								/>
							</span>
						</div>
						<div className='text-side'>
							<h3>About me 💬 </h3>
							<h4>
								Frontend Engineer & <br /> Javascript Developer,
								in 2025
							</h4>
							<p>
								My main stack currently is React/Next.js in
								combination with SASS & TypeScript.
								<br />
								<br />
								I'm highly interested to working with Design
								System, Monorepo, Storybook, Accessibilities
								etc. advanced frontend things.
								<br />
								<br />
								Recently, I'm building my own Design System &
								Component Library (DS.MHP)
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default AboutMe;