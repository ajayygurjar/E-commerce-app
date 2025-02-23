




import  { useState } from 'react';

const API_URL =
	'https://react-http-ffc12-default-rtdb.firebaseio.com/userContacts';

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
	});
	// console.log('re-rendered');

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// console.log('Form Data:', formData);

		//form submission logic
		try {
			const response = await fetch(`${API_URL}.json`, {
				method: 'POST',
				body: JSON.stringify(formData),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			console.log(response.status, response.statusText, 'Contact details received');
			if (!response.ok) {
				throw new Error(`Contact Failed. HTTP error! status: ${response.statusText}`);
			}

			setFormData({
				name: '',
				email: '',
				phone: '',
			});
		} catch (error) {
			console.log('Error : ', error.message);
		}
	};

	return (
		<section >
			<h2 >Contact US</h2>
			<form
				onSubmit={handleSubmit}
				
			>
				<div >
					<label htmlFor="name">
						Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
					    placeholder="Enter your name"
						required
						autoFocus
					/>
				</div>

				<div>
					<label htmlFor="email" >
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="Enter your email"
						required
					/>
				</div>

				<div >
					<label htmlFor="phone" >
						Phone Number
					</label>
					<input
						type="tel"
						id="phone"
						name="phone"
						value={formData.phone}
						onChange={handleChange}
						placeholder="Enter your phone number"
						required
					/>
				</div>

				<button type="submit">
					Submit
				</button>
			</form>
		</section>
	);
};

export default Contact;
