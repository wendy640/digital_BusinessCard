import React from 'react'
import dop from '../images/dpics.jpg'
import mail from '../images/Mail.png'
import linkedin from '../images/linkedin.png';

const Profile = () => {
  
  return (
		<div className="profile">
			<img src={dop} alt="dp" className="profile--dp" />
			<div className="profile--content">
				<h2>Chinwendu .E. Joy</h2>
				<h3>Frontend Developer</h3>
				<p>chinwe640@gmail.com</p>
			</div>
			<div className="profile--button">
				<a href="https://mail.google.com/">
					<button className="mail">
						<img src={mail} alt="mail" /> Email
					</button>
				</a>

				<a href="https://www.linkedin.com/in/chinwendu-enyidiegwu-a073ba153/">
					<button className="linkedin">
						<img src={linkedin} alt="linkedin" /> Linkedin
					</button>
				</a>
			</div>
		</div>
	)
}

export default Profile