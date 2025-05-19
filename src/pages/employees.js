import "../App.scss"
import "./employees.scss"
import { useSelector, useDispatch } from "react-redux"
import DataTable from "../components/dataTable.js"
import { useEffect } from "react"
import { initMockEmployees } from "../features/employeeSlice"
import mockEmployees from "../data/mock-employees.json";

function Employees() {
	const employees = useSelector((state) => state.employees.data);
	const dispatch = useDispatch();
	useEffect(() => {
		if(employees.length < 2) {
			dispatch(initMockEmployees([...mockEmployees, ...employees]))
		}
	}, [employees]);

	return (
		<div id="employee-div" className="employee-container">
			<h1>Current Employees</h1>
			{employees && <DataTable employees={employees} />}
		</div>
	)
}

export default Employees