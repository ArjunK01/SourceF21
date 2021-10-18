import React, { useState } from "react";

const DisplayMessage = () => {
	// state: input val and message array
	const [messages, setMessages] = useState([]);
	const [inputVal, setInputVal] = useState("");
	// event handlers:
	const handleInputChange = (event) => {
		const value = event.target.value;
		setInputVal(value);
	};
	const handleSubmit = () => {
		if (inputVal.length > 0) {
			setMessages([...messages, inputVal]);
			setInputVal("");
		}
	};

	return (
		// <> </> is a react fragment:
		// you can use it to avoid wrapping your return statement in a div
		<>
			<input type="text" value={inputVal} onChange={handleInputChange} />
			<button type="submit" onClick={handleSubmit}>
				SUBMIT!
			</button>
			{messages.map((message, index) => (
				<Message text={message} key={index + 1} />
			))}
		</>
	); ///
};

// NOTE: separate your components into separate files!
const Message = (props) => {
	return (
		<div>
			<p>{props.text}</p>
		</div>
	);
};

export default DisplayMessage;
