import "../App.scss"
import "./employees.scss"
import { useSelector } from "react-redux"
import DataTable from "../components/dataTable.jsx"

function Employees() {
	const employees = useSelector((state) => state.employee)

	return (
		<div id="employee-div" className="employee-container">
			<h1>Current Employees</h1>
			<DataTable employees={employees} />
		</div>
	)
}

export default Employees
