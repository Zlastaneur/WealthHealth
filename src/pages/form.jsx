import "../App.scss"
import "./form.scss"
import "react-datepicker/dist/react-datepicker.css"
import DropdownSelector from "../components/dropdownSelector"
import CustomDatePicker from "../components/datePicker"
import Modal from "../components/modal"
import states from "../data/states.json"
import departments from "../data/departments.json"
import { useDispatch } from "react-redux"
import { addEmployee } from "../features/employeeSlice"
import { useState } from "react"

function Form() {
	const dispatch = useDispatch()

	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		dateOfBirth: "",
		startDate: "",
		street: "",
		city: "",
		zipCode: "",
		state: "",
		department: "",
	})
	const [errorMessage, setErrorMessage] = useState("")
	const [showModal, setShowModal] = useState(false)

	// Date formatter
	const formatDate = (date) => {
		if (!date) return ""
		const day = String(date.getDate()).padStart(2, "0")
		const month = String(date.getMonth() + 1).padStart(2, "0")
		const year = date.getFullYear()
		return `${day}-${month}-${year}`
	}

	const handleSave = (e) => {
		e.preventDefault()
		setErrorMessage("")

		// Ensure all fields are filled
		for (const key in formData) {
			if (!formData[key]) {
				setErrorMessage(`Missing field(s)`)
				return
			}
		}

		// Format dates before sending them to the store
		const formattedData = {
			...formData,
			dateOfBirth: formatDate(new Date(formData.dateOfBirth)),
			startDate: formatDate(new Date(formData.startDate)),
		}

		dispatch(addEmployee(formattedData))

		// Reset the form and show the modal
		setFormData({
			firstName: "",
			lastName: "",
			dateOfBirth: "",
			startDate: "",
			street: "",
			city: "",
			zipCode: "",
			state: "",
			department: "",
		})
		setShowModal(true)
	}

	return (
		<section className="form">
			{showModal && <Modal message="Employee Created !" />}
			<h2 className="title">Create Employee</h2>
			<form>
				<div className="input-wrapper">
					<span>
						<label htmlFor="firstName">First Name</label>
						<input
							name="firstName"
							type="text"
							id="firstName"
							value={formData.firstName}
							onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
						/>
					</span>
					<span>
						<label htmlFor="lastName">Last Name</label>
						<input
							name="lastName"
							type="text"
							id="lastName"
							value={formData.lastName}
							onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
						/>
					</span>
				</div>
				<div className="input-wrapper">
					<CustomDatePicker
						label="Date Of Birth"
						id="dateOfBirth"
						selectedDate={formData.dateOfBirth}
						onChange={(date) => setFormData({ ...formData, dateOfBirth: date.toDateString() })}
					/>
					<CustomDatePicker
						label="Start Date"
						id="startDate"
						selectedDate={formData.startDate}
						onChange={(date) => setFormData({ ...formData, startDate: date.toDateString() })}
					/>
				</div>
				<fieldset className="address">
					<legend>Address</legend>
					<div className="input-wrapper">
						<span>
							<label htmlFor="street">Street</label>
							<input
								name="street"
								type="text"
								id="street"
								value={formData.street}
								onChange={(e) => setFormData({ ...formData, street: e.target.value })}
							/>
						</span>
						<span>
							<label htmlFor="city">City</label>
							<input
								name="city"
								type="text"
								id="city"
								value={formData.city}
								onChange={(e) => setFormData({ ...formData, city: e.target.value })}
							/>
						</span>
					</div>
					<div className="input-wrapper">
						<span>
							<label htmlFor="zipcode">Zipcode</label>
							<input
								name="zipcode"
								type="number"
								id="zipcode"
								value={formData.zipCode}
								onChange={(e) => setFormData({ ...formData, zipCode: e.target.value.toString() })}
							/>
						</span>
						<DropdownSelector
							label="State"
							id="state"
							options={states}
							selectedOption={formData.state}
							onChange={(value) => setFormData({ ...formData, state: value })}
						/>
					</div>
				</fieldset>
				<div className="input-wrapper">
					<DropdownSelector
						label="Department"
						id="department"
						options={departments}
						selectedOption={formData.department}
						onChange={(value) => setFormData({ ...formData, department: value })}
					/>
				</div>

				<button className="saveBtn" onClick={handleSave}>
					Save
				</button>
				{errorMessage && <p className="errorMessage">{errorMessage}</p>}
			</form>
		</section>
	)
}

export default Form
