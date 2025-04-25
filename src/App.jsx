import "./App.scss"
import { BrowserRouter, Routes, Route } from "react-router"
import Header from "./components/header"
import Footer from "./components/footer"
import Form from "./pages/form"
import Employees from "./pages/employees"

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Form />} />
				<Route path="/" element={<Employees />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}

export default App
