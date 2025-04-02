import  { useState } from 'react';


import { Container,Button,Form, Col, Row } from 'react-bootstrap';

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
		<Container className='py-5'>
			<h2 className='text-center mb-4' >Contact US</h2>
			<Row className='justify-content-center'>
				<Col md={6}>
			<Form onSubmit={handleSubmit}>
				
					<Form.Label htmlFor="name">Name</Form.Label>
					<Form.Control
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
					    placeholder="Enter your name"
						required
						autoFocus
					/>
				

				
					<Form.Label htmlFor="email" >Email</Form.Label>
					<Form.Control
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="Enter your email"
						required
					/>
				

				
					<Form.Label htmlFor="phone" >
						Phone Number
					</Form.Label>
					<Form.Control
						type="tel"
						id="phone"
						name="phone"
						value={formData.phone}
						onChange={handleChange}
						placeholder="Enter your phone number"
						required
					/>
				

				<Button variant='primary' className='mt-2 ' type="submit">
					Submit
				</Button>
			</Form>
			</Col>
			</Row>
		</Container>
	);
};

export default Contact;
