
import { useState } from "react";

export default function Playground() {
	const [inputValue, setInputValue] = useState('');
	const [items, setItems] = useState<string[]>([]);

	const handleAddItem = () => {
		if (inputValue) {
			setItems([...items, inputValue]);
			setInputValue('');
		}
	};

	return (
		<div>
			<input
				type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<button onClick={handleAddItem}>Add Item</button>
			<ul>
				{items.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	)
}