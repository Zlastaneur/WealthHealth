function DropdownSelector({ label, id, options, selectedOption, onChange }) {
	return (
		<span>
			<label htmlFor={id}>{label}</label>
			<select id={id} value={selectedOption} onChange={(e) => onChange(e.target.value)}>
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
