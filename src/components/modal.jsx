import { useState } from "react"
import "./modal.scss"

function Modal({ message }) {
	const [isVisible, setIsVisible] = useState(true)

	const handleClose = () => {
		setIsVisible(false)
	}

	if (!isVisible) {
		return null
	}

	return (
		<div className="modal">
			<div className="modal-content">
				<span className="close-button" onClick={handleClose}>
					&times;
				</span>
				<p>{message}</p>
			</div>
		</div>
	)
}

export default Modal
