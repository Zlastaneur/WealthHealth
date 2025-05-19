import { useEffect, useState } from "react"
import DataTableComponent from 'react-data-table-component';

function DataTable({ employees }) {
	const [searchTerm, setSearchTerm] = useState("")
	const [columns, setColumns] = useState([]);
	const [filteredEmployees, setFilteredEmployees] = useState([]);

	useEffect(() => {
		setFilteredEmployees(employees.filter((employee) =>
		Object.values(employee).some((value) => value.toString().toLowerCase().includes(searchTerm.toLowerCase()))
		));
		if(employees[0]) {
			setColumns(Object.keys(employees[0]).map(name => ({name, selector: row => row[name], sortable: true})));
		}	
	}, [employees, searchTerm]);

	return (
		<>
			<input
				type="text"
				placeholder="Search employees..."
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				className="search-input"
			/>
			{employees && (
			<DataTableComponent
				columns={columns}
				data={filteredEmployees}
				pagination
			/>
			)}
		</>
	)
}

export default DataTable
