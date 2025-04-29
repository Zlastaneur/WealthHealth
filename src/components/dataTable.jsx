import HRnetTable from "react-hrnet-table"
import { useState } from "react"

function DataTable({ employees }) {
	const [searchTerm, setSearchTerm] = useState("")

	const filteredEmployees = employees.filter((employee) =>
		Object.values(employee).some((value) => value.toString().toLowerCase().includes(searchTerm.toLowerCase()))
	)

	return (
		<>
			<input
				type="text"
				placeholder="Search employees..."
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				className="search-input"
			/>
			<HRnetTable data={filteredEmployees} />
		</>
	)
}

export default DataTable
