import { useState } from "react"

function DropdownSelector({ label, id, options }) {
	const [selectedOption, setSelectedOption] = useState("")

	const handleSelectionChange = (event) => {
		setSelectedOption(event.target.value)
	}

	return (
		<span>
			<label htmlFor={id}>{label}</label>
			<select id={id} value={selectedOption} onChange={handleSelectionChange}>
				<option value=""></option>
				{options.map((option, index) => (
					<option key={index} value={option.name}>
						{option.name}
					</option>
				))}
			</select>
		</span>
	)
}

export default DropdownSelector
