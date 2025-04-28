import "../App.scss"
import "./form.scss"
import "react-datepicker/dist/react-datepicker.css"
import DropdownSelector from "../components/dropdownSelector"
import CustomDatePicker from "../components/datePicker"
import states from "../data/states.json"
import departments from "../data/departments.json"

function Form() {
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
					<CustomDatePicker label="Date Of Birth" id="dateOfBirth" />
					<CustomDatePicker label="Start Date" id="startDate" />
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
						<DropdownSelector label="State" id="state" options={states} />
					</div>
				</fieldset>
				<div className="input-wrapper">
					<DropdownSelector label="Department" id="department" options={departments} />
				</div>
				<button className="saveBtn">Save</button>
			</form>
		</section>
	)
}

export default Form
