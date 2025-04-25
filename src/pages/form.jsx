import "../App.scss"
import "./form.scss"
import "react-datepicker/dist/react-datepicker.css"
import { useState } from "react"
import DatePicker from "react-datepicker"

function Form() {
	const DateOfBirthPicker = () => {
		const [startDate, setStartDate] = useState(new Date())
		return (
			<span>
				<label htmlFor="dateOfBirth">Date Of Birth</label>
				<DatePicker id="dateOfBirth" showIcon selected={startDate} onChange={(date) => setStartDate(date)} />
			</span>
		)
	}

	const StartDatePicker = () => {
		const [startDate, setStartDate] = useState(new Date())
		return (
			<span>
				<label htmlFor="startDate">Start Date</label>
				<DatePicker id="startDate" showIcon selected={startDate} onChange={(date) => setStartDate(date)} />
			</span>
		)
	}

	return (
		<section className="form">
			<h2 className="title">Create Employee</h2>
			<form>
				<div className="input-wrapper">
					<span>
						<label htmlFor="firstName">First Name</label>
						<input name="firstName" type="text" id="firstName" value="" onChange="" />
					</span>
					<span>
						<label htmlFor="lastName">Last Name</label>
						<input name="lastName" type="text" id="lastName" value="" onChange="" />
					</span>
				</div>
				<div className="input-wrapper">
					<DateOfBirthPicker />
					<StartDatePicker />
				</div>
				<fieldset className="address">
					<legend>Address</legend>
					<div className="input-wrapper">
						<span>
							<label htmlFor="street">Street</label>
							<input name="street" type="text" id="street" value="" onChange="" />
						</span>
						<span>
							<label htmlFor="city">City</label>
							<input name="city" type="text" id="city" value="" onChange="" />
						</span>
					</div>
					<div className="input-wrapper">
						<span>
							<label htmlFor="zipcode">Zipcode</label>
							<input name="zipcode" type="number" id="zipcode" value="" onChange="" />
						</span>
					</div>
				</fieldset>
				<button className="saveBtn">Save</button>
			</form>
		</section>
	)
}

export default Form
