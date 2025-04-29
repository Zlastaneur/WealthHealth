import { createRoot } from "react-dom/client"
import { PersistGate } from "redux-persist/integration/react"
import "./App.scss"
import App from "./App.jsx"
import { Provider } from "react-redux"
import { store, persistor } from "./store"

createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>
)
