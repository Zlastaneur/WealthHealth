import { useState } from "react"
import "./dropdownSelector.scss"

function DropdownSelector({ label, id, options, onSelect }) {
	const [isCollapsed, setIsCollapsed] = useState(false)

	return (
		<span className="dropdown-container">
			<label htmlFor={id}>{label}</label>
			<div
				className={isCollapsed ? "list opened-dropdown" : "list closed-dropdown"}
				id={id}
				onClick={(e) => {
					e.preventDefault()
					setIsCollapsed(!isCollapsed)
				}}
			>
				<button>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
						<path d="m12 6.586-8.707 8.707 1.414 1.414L12 9.414l7.293 7.293 1.414-1.414L12 6.586z" />
					</svg>
				</button>
				{options.map((option, index) => (
					<div
						className="option"
						key={index}
						onClick={(e) => {
							e.preventDefault()
							onSelect(options.name)
						}}
					>
						{option.name}
					</div>
				))}
			</div>
		</span>
	)
}

export default DropdownSelector
