import React from 'react'
import facebook from "../images/Facebook Icon.png"
import twitter from '../images/Twitter Icon.png'
import instagram from '../images/Instagram Icon.png'
import git from '../images/GitHub Icon.png'
const Footer = () => {
  return (
		<div className="footer">
			<a href="https://twitter.com/i/flow/single_sign_on">
				{' '}
				<img src={twitter} alt="social media" className="twitter" />
			</a>
			<a href="https://web.facebook.com/?_rdc=1&_rdr">
				<img src={facebook} alt="" />
			</a>
			<a href="https://www.instagram.com/?hl=en">
				{' '}
				<img src={instagram} alt="" />
			</a>
			<a href="https://github.com/wendy640">
				<img src={git} alt="" />
			</a>
		</div>
	)
}

export default Footer