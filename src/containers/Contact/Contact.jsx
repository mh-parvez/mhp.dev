import { IoMailOpenOutline } from "react-icons/io5";
import { SiGooglemaps } from "react-icons/si";

import "./Contact.scss";

function Contact() {
	return (
		<>
			<section id='contact' className='contact'>
				<div className='container'>
					<div className='contact__content'>
						<div className='contact__title'>
							{/* <p>contact</p> */}
							<h3>Don't be shy! Hit me up! 🖐🏻</h3>
						</div>
						<div className='contact__icons'>
							<div className='contact__icon-box'>
								<span>
									<SiGooglemaps width={30} height={30} />
								</span>
								<div className='contact__info'>
									<h3>Location</h3>
									<p>Sylhet, Bangladesh</p>
								</div>
							</div>

							<div className='contact__icon-box'>
								<span>
									<IoMailOpenOutline width={30} height={30} />
								</span>
								<div className='contact__info'>
									<h3>Mail</h3>
									<a href='mailto:mh.parvez.dev1@gmail.com'>
										mh.parvez.dev1@gmail.com
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Contact;
