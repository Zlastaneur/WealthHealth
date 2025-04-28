import "react-datepicker/dist/react-datepicker.css"
import { useState } from "react"
import DatePicker from "react-datepicker"

function CustomDatePicker({ label, id }) {
	const [selectedDate, setSelectedDate] = useState(new Date())

	return (
		<span>
			<label htmlFor={id}>{label}</label>
			<DatePicker id={id} showIcon selected={selectedDate} onChange={(date) => setSelectedDate(date)} />
		</span>
	)
}

export default CustomDatePicker
