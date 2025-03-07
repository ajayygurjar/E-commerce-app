import { Link } from 'react-router-dom';

const NotFoundPage = () => {
	return (
		<div className="flex flex-col justify-center items-start py-30">
			<h1>404 - Page Not Found</h1>
			<p>Sorry, the page you are looking for does not exist.</p>
			<Link
				to="/"
				replace	
			>
				Go back Home
			</Link>
		</div>
	);
};

export default NotFoundPage;