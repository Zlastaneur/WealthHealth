import "../App.scss"
import "./form.scss"
import dayjs from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import DropdownSelector from "../components/dropdownSelector"
import Modal from "wealth-health-react-popup"
import 'wealth-health-react-popup/dist/modal.css'
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
		<LocalizationProvider dateAdapter={AdapterDayjs}>

			<section className="form">
				{showModal && <Modal message="Employee Created !" />}
				<h2 className="title">Create Employee</h2>
				<form>
					<div className="input-wrapper">
						<span className="span">
							<label htmlFor="firstName">First Name</label>
							<input
								name="firstName"
								type="text"
								id="firstName"
								value={formData.firstName}
								onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
							/>
						</span>
						<span className="span">
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

						<DatePicker
							label="Date of birth"
							value={formData.dateOfBirth ? dayjs(formData.dateOfBirth) : null}
							onChange={(date) => {
								setFormData({ ...formData, dateOfBirth: date })
							}}
							views={['day', 'month', 'year']}
						/>


						<DatePicker
							label="Start date"
							value={formData.startDate ? dayjs(formData.startDate) : null}
							onChange={(date) => {
								setFormData({ ...formData, startDate: date })
							}}
						/>
					</div>
					<fieldset className="address">
						<legend>Address</legend>
						<div className="input-wrapper">
							<span className="span">
								<label htmlFor="street">Street</label>
								<input
									name="street"
									type="text"
									id="street"
									value={formData.street}
									onChange={(e) => setFormData({ ...formData, street: e.target.value })}
								/>
							</span>
							<span className="span">
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
							<span className="span">
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
								onSelect={(value) => setFormData({ ...formData, state: value })}
							/>
						</div>
					</fieldset>
					<div className="input-wrapper">
						<DropdownSelector
							label="Department"
							id="department"
							options={departments}
							onSelect={(value) => setFormData({ ...formData, department: value })}
						/>
					</div>

					<button className="saveBtn" onClick={handleSave}>
						Save
					</button>
					{errorMessage && <p className="errorMessage">{errorMessage}</p>}
				</form>
			</section>
		</LocalizationProvider>
	)
}

export default Form
