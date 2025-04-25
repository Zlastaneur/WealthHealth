import React from "react"
import "./header.scss"
import { Link } from "react-router"

const Header = () => {
	return (
		<header className="header">
			<h1 className="title">HRnet</h1>
			<Link>View current employees</Link>
		</header>
	)
}

export default Header
