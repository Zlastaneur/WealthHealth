import "react-datepicker/dist/react-datepicker.css"
import DatePicker from "react-datepicker"

function CustomDatePicker({ label, id, selectedDate, onChange }) {
	return (
		<span>
			<label htmlFor={id}>{label}</label>
			<DatePicker id={id} className="datePicker" showIcon selected={selectedDate} onChange={onChange} />
		</span>
	)
}

export default CustomDatePicker
