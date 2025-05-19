import React from "react"
import "./header.scss"
import { Link, useLocation } from "react-router"

const Header = () => {
	const location = useLocation()

	const isOnEmployeesPage = location.pathname === "/employees"
	const linkPath = isOnEmployeesPage ? "/" : "/employees"
	const linkText = isOnEmployeesPage ? "Create new employees" : "View current employees"

	return (
		<header className="header">
			<h1 className="title">HRnet</h1>
			<Link to={linkPath}>{linkText}</Link>
		</header>
	)
}

export default Header
